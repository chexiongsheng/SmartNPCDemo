using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

// For runtime rounded-corner sprite generation
using System;


namespace SmartNPC
{
    /// <summary>
    /// Manages the dialogue UI and coordinates NPC conversations.
    /// Singleton — attach to a root UI Canvas in the scene.
    /// </summary>
    public class DialogueManager : MonoBehaviour
    {
        public static DialogueManager Instance { get; private set; }

        [Header("UI References")]
        public GameObject dialoguePanel;
        public Text npcNameText;
        public ScrollRect chatScrollRect;
        public RectTransform chatContent;
        public InputField playerInputField;
        public Button sendButton;
        public Text typingIndicator;
        public GameObject messagePrefab;
        public Button closeButton;

        [Header("Settings")]
        public Color playerMessageColor = new Color(0.2f, 0.6f, 1f);
        public Color systemMessageColor = new Color(0.5f, 0.5f, 0.5f);

        private NPCInteraction currentNPC;
        private List<GameObject> messageObjects = new List<GameObject>();
        private PlayerController playerController;
        private bool isDialogueOpen;

        // Cached rounded-corner sprite for bubble backgrounds
        private Sprite _roundedSprite;

        // Waiting indicator UI (shown while model generates approach greeting)
        private GameObject waitingOverlay;
        private Text waitingText;
        private bool isWaitingForGreeting;
        private NPCInteraction waitingNPC;
        private float waitingDotTimer;
        private int waitingDotCount;

        /// <summary>Whether a dialogue is currently open.</summary>
        public bool IsDialogueOpen => isDialogueOpen;

        private void Awake()
        {
            if (Instance != null && Instance != this)
            {
                Destroy(gameObject);
                return;
            }
            Instance = this;

            if (dialoguePanel != null)
                dialoguePanel.SetActive(false);

            if (typingIndicator != null)
                typingIndicator.gameObject.SetActive(false);
        }

        private void Start()
        {
            playerController = FindObjectOfType<PlayerController>();

            if (sendButton != null)
                sendButton.onClick.AddListener(OnSendClicked);

            if (playerInputField != null)
                playerInputField.onEndEdit.AddListener(OnInputEndEdit);

            // Setup close button — create one dynamically if not assigned
            SetupCloseButton();
        }

        /// <summary>
        /// Called when the player enters an NPC's interaction range.
        /// Opens the dialogue panel.
        /// </summary>
        public void OnPlayerApproachNPC(NPCInteraction npc)
        {
            if (isDialogueOpen && currentNPC == npc) return;

            // If talking to another NPC, close that first
            if (isDialogueOpen && currentNPC != npc)
            {
                CloseDialogue();
            }

            HideWaitingIndicator();
            currentNPC = npc;
            OpenDialogue(npc.GetAgent());
        }

        /// <summary>
        /// Show a lightweight waiting overlay while the NPC's model
        /// generates its first greeting. The full dialogue panel is NOT opened yet.
        /// </summary>
        public void ShowWaitingIndicator(NPCInteraction npc)
        {
            // If already in a dialogue, ignore
            if (isDialogueOpen) return;

            isWaitingForGreeting = true;
            waitingNPC = npc;
            waitingDotTimer = 0f;
            waitingDotCount = 0;

            if (waitingOverlay == null)
                CreateWaitingOverlay();

            string npcName = npc.GetAgent()?.NPCName ?? "NPC";
            waitingText.text = $"⏳ {npcName} 注意到了你";
            waitingOverlay.SetActive(true);

            Debug.Log($"[DialogueManager] Showing waiting indicator for {npcName}");
        }

        /// <summary>
        /// Called when the NPC's approach response arrives from the model.
        /// Hides the waiting indicator, opens the dialogue, and shows the
        /// greeting — unless the model replied [SILENCE] (NPC chose not to speak).
        /// </summary>
        public void OnPlayerApproachNPCWithGreeting(NPCInteraction npc, string greeting)
        {
            // If player already walked away, discard
            if (!isWaitingForGreeting && currentNPC != npc) return;
            if (waitingNPC != null && waitingNPC != npc) return;

            HideWaitingIndicator();

            // If talking to another NPC, close that first
            if (isDialogueOpen && currentNPC != npc)
            {
                CloseDialogue();
            }

            currentNPC = npc;
            NPCAgent agent = npc.GetAgent();
            OpenDialogue(agent);

            // Show the greeting message — skip if model returned [SILENCE] or [Agent] prefix
            if (!string.IsNullOrEmpty(greeting) && !IsSilence(greeting) && !greeting.StartsWith("[Agent]"))
            {
                AddMessage(agent.NPCName, greeting, agent.profile.nameColor);
            }
            else if (IsSilence(greeting))
            {
                Debug.Log($"[DialogueManager] {agent.NPCName} chose to stay silent on approach.");
            }
        }

        /// <summary>
        /// Check if a model response indicates the NPC chose to stay silent.
        /// </summary>
        private static bool IsSilence(string response)
        {
            if (string.IsNullOrEmpty(response)) return true;
            string trimmed = response.Trim();
            return trimmed == "[SILENCE]" || trimmed.StartsWith("[SILENCE]");
        }

        /// <summary>
        /// Called when the player leaves an NPC's interaction range.
        /// Closes the dialogue if it's with this NPC.
        /// </summary>
        public void OnPlayerLeaveNPC(NPCInteraction npc)
        {
            // If still waiting for this NPC's greeting, cancel it
            if (isWaitingForGreeting && waitingNPC == npc)
            {
                HideWaitingIndicator();
                npc.GetAgent()?.AbortGeneration();
                return;
            }

            if (currentNPC != npc) return;

            CloseDialogue();
        }

        /// <summary>
        /// Display an NPC message in the chat UI.
        /// </summary>
        public void ShowNPCMessage(NPCAgent agent, string message)
        {
            if (!isDialogueOpen || currentNPC == null) return;
            if (currentNPC.GetAgent() != agent) return;

            // Filter out [Agent] prefix and [SILENCE] messages
            if (message.StartsWith("[Agent]")) return;
            if (IsSilence(message)) return;

            AddMessage(agent.NPCName, message, agent.profile.nameColor);
            HideTypingIndicator();
        }

        private void OpenDialogue(NPCAgent agent)
        {
            isDialogueOpen = true;

            if (dialoguePanel != null)
                dialoguePanel.SetActive(true);

            if (npcNameText != null)
                npcNameText.text = agent.NPCName;

            // Unlock cursor for UI interaction
            Cursor.lockState = CursorLockMode.None;
            Cursor.visible = true;

            // Disable player movement during dialogue
            if (playerController != null)
                playerController.InputLocked = true;

            // Focus input field
            if (playerInputField != null)
            {
                playerInputField.text = "";
                playerInputField.ActivateInputField();
            }

            // Clear previous messages
            ClearMessages();

            Debug.Log($"[DialogueManager] Opened dialogue with {agent.NPCName}");
        }

        private void CloseDialogue()
        {
            isDialogueOpen = false;

            if (dialoguePanel != null)
                dialoguePanel.SetActive(false);

            // Re-lock cursor
            Cursor.lockState = CursorLockMode.Locked;
            Cursor.visible = false;

            // Re-enable player movement
            if (playerController != null)
                playerController.InputLocked = false;

            HideTypingIndicator();

            currentNPC = null;

            Debug.Log("[DialogueManager] Dialogue closed.");
        }

        private void OnSendClicked()
        {
            SendPlayerMessage();
        }

        private void OnInputEndEdit(string text)
        {
            if (Input.GetKeyDown(KeyCode.Return) || Input.GetKeyDown(KeyCode.KeypadEnter))
            {
                SendPlayerMessage();
            }
        }

        private void SendPlayerMessage()
        {
            if (currentNPC == null || !isDialogueOpen) return;

            string message = playerInputField != null ? playerInputField.text.Trim() : "";
            if (string.IsNullOrEmpty(message)) return;

            NPCAgent agent = currentNPC.GetAgent();
            if (agent == null || !agent.IsReady) return;
            if (agent.IsProcessing)
            {
                Debug.Log("[DialogueManager] NPC is still thinking...");
                return;
            }

            // Show player message
            AddMessage("我", message, playerMessageColor);

            // Clear input
            if (playerInputField != null)
            {
                playerInputField.text = "";
                playerInputField.ActivateInputField();
            }

            // Show typing indicator
            ShowTypingIndicator(agent.NPCName);

            // Send to NPC agent
            agent.SendMessage(message, (response, isError) =>
            {
                HideTypingIndicator();

                if (isError)
                {
                    AddMessage("系统", $"出错了: {response}", systemMessageColor);
                }
                else if (!IsSilence(response))
                {
                    // Only display if the NPC chose to speak (not [SILENCE])
                    AddMessage(agent.NPCName, response, agent.profile.nameColor);
                }
                else
                {
                    Debug.Log($"[DialogueManager] {agent.NPCName} chose [SILENCE] in conversation.");
                }
            });
        }

        /// <summary>Is this the player's own message?</summary>
        private bool IsPlayerSender(string sender) => sender == "我";

        private void AddMessage(string sender, string text, Color color)
        {
            if (chatContent == null) return;

            bool isPlayer = IsPlayerSender(sender);

            // --- Row container (full width of chatContent, auto height) ---
            GameObject row = new GameObject("MsgRow", typeof(RectTransform));
            row.transform.SetParent(chatContent, false);
            SetLayerRecursively(row, 5);

            // LayoutElement so the parent VerticalLayoutGroup can size the row
            var rowLE = row.AddComponent<LayoutElement>();
            rowLE.flexibleWidth = 1;

            // --- Bubble: anchored to 80% width, left or right ---
            GameObject bubble = new GameObject("Bubble", typeof(RectTransform));
            bubble.transform.SetParent(row.transform, false);
            Image bubbleBg = bubble.AddComponent<Image>();
            bubbleBg.color = isPlayer
                ? new Color(0.15f, 0.45f, 0.85f, 0.9f)
                : new Color(0.22f, 0.22f, 0.22f, 0.95f);

            // Apply rounded-corner sprite
            if (_roundedSprite == null)
                _roundedSprite = CreateRoundedSprite(32, 8);
            bubbleBg.sprite = _roundedSprite;
            bubbleBg.type = Image.Type.Sliced;
            bubbleBg.pixelsPerUnitMultiplier = 1f;

            RectTransform bubbleRect = bubble.GetComponent<RectTransform>();
            if (isPlayer)
            {
                // Player bubble: right 80% of row width
                bubbleRect.anchorMin = new Vector2(0.2f, 0f);
                bubbleRect.anchorMax = new Vector2(1f, 1f);
            }
            else
            {
                // NPC bubble: left 80% of row width
                bubbleRect.anchorMin = new Vector2(0f, 0f);
                bubbleRect.anchorMax = new Vector2(0.8f, 1f);
            }
            // Increase vertical spacing between bubbles (top/bottom offset)
            bubbleRect.offsetMin = new Vector2(6f, 4f);
            bubbleRect.offsetMax = new Vector2(-6f, -4f);

            var bubbleVLG = bubble.AddComponent<VerticalLayoutGroup>();
            bubbleVLG.padding = new RectOffset(12, 12, 8, 8);
            bubbleVLG.childControlWidth = true;
            bubbleVLG.childControlHeight = true;
            bubbleVLG.childForceExpandWidth = true;
            bubbleVLG.childForceExpandHeight = false;

            var bubbleCSF = bubble.AddComponent<ContentSizeFitter>();
            bubbleCSF.horizontalFit = ContentSizeFitter.FitMode.Unconstrained;
            bubbleCSF.verticalFit = ContentSizeFitter.FitMode.PreferredSize;

            // --- Text inside bubble ---
            GameObject textObj = new GameObject("MsgText", typeof(RectTransform));
            textObj.transform.SetParent(bubble.transform, false);
            Text msgText = textObj.AddComponent<Text>();
            msgText.font = Font.CreateDynamicFontFromOSFont("Arial", 16);
            msgText.fontSize = 16;
            msgText.color = Color.white;
            msgText.supportRichText = true;
            msgText.horizontalOverflow = HorizontalWrapMode.Wrap;
            msgText.verticalOverflow = VerticalWrapMode.Overflow;
            msgText.alignment = TextAnchor.UpperLeft;

            string fullText = $"<color=#{ColorUtility.ToHtmlStringRGB(color)}><b>{sender}</b></color>：{text}";
            msgText.text = fullText;

            // Force layout rebuild to get correct text height
            Canvas.ForceUpdateCanvases();
            LayoutRebuilder.ForceRebuildLayoutImmediate(bubbleRect);

            // Set row height to match bubble height
            float bubbleHeight = bubbleRect.sizeDelta.y;
            if (bubbleHeight < 30f)
                bubbleHeight = Mathf.Max(30f, msgText.preferredHeight + 20f);
            rowLE.preferredHeight = bubbleHeight;

            messageObjects.Add(row);

            // Scroll to bottom
            Canvas.ForceUpdateCanvases();
            if (chatScrollRect != null)
                chatScrollRect.verticalNormalizedPosition = 0f;
        }

        private void ClearMessages()
        {
            foreach (var obj in messageObjects)
            {
                if (obj != null) Destroy(obj);
            }
            messageObjects.Clear();
        }

        private static void SetLayerRecursively(GameObject go, int layer)
        {
            go.layer = layer;
            foreach (Transform child in go.transform)
                SetLayerRecursively(child.gameObject, layer);
        }

        /// <summary>
        /// Create a rounded-corner white sprite at runtime.
        /// size = texture size, radius = corner radius in pixels.
        /// </summary>
        private static Sprite CreateRoundedSprite(int size, int radius)
        {
            var tex = new Texture2D(size, size, TextureFormat.ARGB32, false);
            tex.filterMode = FilterMode.Bilinear;
            var pixels = new Color32[size * size];
            Color32 white = new Color32(255, 255, 255, 255);
            Color32 clear = new Color32(0, 0, 0, 0);

            for (int y = 0; y < size; y++)
            {
                for (int x = 0; x < size; x++)
                {
                    // Determine which corner we're in (if any)
                    int cx = -1, cy = -1;
                    if (x < radius && y < radius) { cx = radius; cy = radius; }           // bottom-left
                    else if (x >= size - radius && y < radius) { cx = size - radius - 1; cy = radius; } // bottom-right
                    else if (x < radius && y >= size - radius) { cx = radius; cy = size - radius - 1; } // top-left
                    else if (x >= size - radius && y >= size - radius) { cx = size - radius - 1; cy = size - radius - 1; } // top-right

                    if (cx >= 0)
                    {
                        float dist = Mathf.Sqrt((x - cx) * (x - cx) + (y - cy) * (y - cy));
                        if (dist > radius + 0.5f)
                            pixels[y * size + x] = clear;
                        else if (dist > radius - 0.5f)
                        {
                            // Anti-alias edge
                            float a = Mathf.Clamp01(radius + 0.5f - dist);
                            pixels[y * size + x] = new Color32(255, 255, 255, (byte)(a * 255));
                        }
                        else
                            pixels[y * size + x] = white;
                    }
                    else
                    {
                        pixels[y * size + x] = white;
                    }
                }
            }
            tex.SetPixels32(pixels);
            tex.Apply();

            // Create sprite with 9-slice borders = radius
            var border = new Vector4(radius, radius, radius, radius);
            return Sprite.Create(tex, new Rect(0, 0, size, size),
                new Vector2(0.5f, 0.5f), 100f, 0, SpriteMeshType.FullRect, border);
        }

        /// <summary>Create a close [X] button on the name header bar.</summary>
        private void SetupCloseButton()
        {
            if (closeButton != null) return; // already assigned
            if (npcNameText == null) return;

            // Parent = the name header bar (npcNameText's parent)
            Transform headerParent = npcNameText.transform.parent;
            if (headerParent == null) headerParent = npcNameText.transform;

            GameObject btnObj = new GameObject("CloseBtn", typeof(RectTransform));
            btnObj.transform.SetParent(headerParent, false);
            SetLayerRecursively(btnObj, 5);

            RectTransform btnRect = btnObj.GetComponent<RectTransform>();
            // Anchor to top-right of header
            btnRect.anchorMin = new Vector2(1, 0);
            btnRect.anchorMax = new Vector2(1, 1);
            btnRect.pivot = new Vector2(1, 0.5f);
            btnRect.sizeDelta = new Vector2(40, 0);
            btnRect.anchoredPosition = new Vector2(-5, 0);

            Image btnBg = btnObj.AddComponent<Image>();
            btnBg.color = new Color(0.8f, 0.2f, 0.2f, 0.9f);

            closeButton = btnObj.AddComponent<Button>();
            closeButton.targetGraphic = btnBg;
            var colors = closeButton.colors;
            colors.highlightedColor = new Color(1f, 0.3f, 0.3f, 1f);
            colors.pressedColor = new Color(0.6f, 0.1f, 0.1f, 1f);
            closeButton.colors = colors;

            // X label
            GameObject labelObj = new GameObject("Label", typeof(RectTransform));
            labelObj.transform.SetParent(btnObj.transform, false);
            SetLayerRecursively(labelObj, 5);
            RectTransform labelRect = labelObj.GetComponent<RectTransform>();
            labelRect.anchorMin = Vector2.zero;
            labelRect.anchorMax = Vector2.one;
            labelRect.offsetMin = Vector2.zero;
            labelRect.offsetMax = Vector2.zero;

            Text labelText = labelObj.AddComponent<Text>();
            labelText.font = Font.CreateDynamicFontFromOSFont("Arial", 18);
            labelText.fontSize = 18;
            labelText.text = "✕";
            labelText.color = Color.white;
            labelText.alignment = TextAnchor.MiddleCenter;
            labelText.fontStyle = FontStyle.Bold;

            closeButton.onClick.AddListener(OnCloseClicked);
        }

        private void OnCloseClicked()
        {
            if (!isDialogueOpen) return;
            if (currentNPC != null)
            {
                currentNPC.GetAgent()?.AbortGeneration();
            }
            CloseDialogue();
        }

        private void ShowTypingIndicator(string npcName)
        {
            if (typingIndicator != null)
            {
                typingIndicator.text = $"{npcName} 正在思考...";
                typingIndicator.gameObject.SetActive(true);
            }
        }

        private void HideTypingIndicator()
        {
            if (typingIndicator != null)
            {
                typingIndicator.gameObject.SetActive(false);
            }
        }

        private void Update()
        {
            // Allow closing dialogue with Tab key or Escape key
            if (isDialogueOpen && (Input.GetKeyDown(KeyCode.Tab) || Input.GetKeyDown(KeyCode.Escape)))
            {
                OnCloseClicked();
            }

            // Animate the waiting indicator dots
            if (isWaitingForGreeting && waitingText != null)
            {
                waitingDotTimer += Time.deltaTime;
                if (waitingDotTimer >= 0.5f)
                {
                    waitingDotTimer = 0f;
                    waitingDotCount = (waitingDotCount + 1) % 4;
                    string npcName = waitingNPC?.GetAgent()?.NPCName ?? "NPC";
                    string dots = new string('.', waitingDotCount);
                    waitingText.text = $"⏳ {npcName} 注意到了你{dots}";
                }
            }
        }

        /// <summary>Create the waiting overlay UI (once, reused).</summary>
        private void CreateWaitingOverlay()
        {
            // Find the root canvas (dialoguePanel's parent canvas)
            Canvas rootCanvas = dialoguePanel != null
                ? dialoguePanel.GetComponentInParent<Canvas>()
                : GetComponentInParent<Canvas>();
            Transform canvasTransform = rootCanvas != null ? rootCanvas.transform : transform;

            // Semi-transparent full-center overlay
            waitingOverlay = new GameObject("WaitingOverlay", typeof(RectTransform));
            waitingOverlay.transform.SetParent(canvasTransform, false);
            SetLayerRecursively(waitingOverlay, 5);

            RectTransform overlayRect = waitingOverlay.GetComponent<RectTransform>();
            // Centered pill shape
            overlayRect.anchorMin = new Vector2(0.3f, 0.45f);
            overlayRect.anchorMax = new Vector2(0.7f, 0.55f);
            overlayRect.offsetMin = Vector2.zero;
            overlayRect.offsetMax = Vector2.zero;

            Image bg = waitingOverlay.AddComponent<Image>();
            bg.color = new Color(0.1f, 0.1f, 0.1f, 0.85f);

            // Apply rounded corners
            if (_roundedSprite == null)
                _roundedSprite = CreateRoundedSprite(32, 8);
            bg.sprite = _roundedSprite;
            bg.type = Image.Type.Sliced;

            // Text child
            GameObject textObj = new GameObject("WaitingText", typeof(RectTransform));
            textObj.transform.SetParent(waitingOverlay.transform, false);
            SetLayerRecursively(textObj, 5);

            RectTransform textRect = textObj.GetComponent<RectTransform>();
            textRect.anchorMin = Vector2.zero;
            textRect.anchorMax = Vector2.one;
            textRect.offsetMin = new Vector2(10, 0);
            textRect.offsetMax = new Vector2(-10, 0);

            waitingText = textObj.AddComponent<Text>();
            waitingText.font = Font.CreateDynamicFontFromOSFont("Arial", 22);
            waitingText.fontSize = 22;
            waitingText.color = new Color(1f, 0.9f, 0.5f);
            waitingText.alignment = TextAnchor.MiddleCenter;
            waitingText.text = "";

            waitingOverlay.SetActive(false);
        }

        private void HideWaitingIndicator()
        {
            isWaitingForGreeting = false;
            waitingNPC = null;
            if (waitingOverlay != null)
                waitingOverlay.SetActive(false);
        }

        private void OnDestroy()
        {
            if (Instance == this)
                Instance = null;
        }
    }
}
