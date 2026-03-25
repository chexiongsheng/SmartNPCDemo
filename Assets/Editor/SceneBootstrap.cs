using UnityEngine;
using UnityEngine.UI;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine.SceneManagement;

namespace SmartNPC
{
    /// <summary>
    /// Editor tool that creates the SmartNPC demo scene via menu.
    /// Menu: SmartNPC > Create Demo Scene
    /// This replaces the old runtime AutoBootstrap approach, generating a proper saved .unity scene.
    /// </summary>
    public static class SmartNPCSceneCreator
    {
        [MenuItem("SmartNPC/Create Demo Scene")]
        public static void CreateDemoScene()
        {
            // Prompt to save current scene if dirty
            if (!EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo())
                return;

            // Find or create LLMConfig
            LLMConfig llmConfig = FindOrCreateLLMConfig();

            // Create a new empty scene
            Scene newScene = EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Single);

            // Build scene contents
            CreateEnvironment();
            CreatePlayer();
            CreateNPCs(llmConfig);
            CreateDialogueUI();
            CreateHUD();

            // Ensure Scenes folder exists
            if (!AssetDatabase.IsValidFolder("Assets/Scenes"))
                AssetDatabase.CreateFolder("Assets", "Scenes");

            // Save the scene
            string scenePath = "Assets/Scenes/SmartNPCDemo.unity";
            EditorSceneManager.SaveScene(newScene, scenePath);

            // Add to build settings if not already there
            AddSceneToBuildSettings(scenePath);

            Debug.Log($"[SmartNPC] Demo scene created and saved at: {scenePath}");
            EditorUtility.DisplayDialog("SmartNPC",
                "Demo scene created!\n\n" +
                "Scene saved at: Assets/Scenes/SmartNPCDemo.unity\n\n" +
                "Before playing:\n" +
                "1. Select LLMConfig in Inspector and fill in your API Key\n" +
                "2. Press Play!",
                "OK");

            // Select the LLMConfig so user can fill in API key
            Selection.activeObject = llmConfig;
        }

        private static LLMConfig FindOrCreateLLMConfig()
        {
            // Try to load existing
            LLMConfig config = Resources.Load<LLMConfig>("LLMConfig");
            if (config != null) return config;

            // Create new one
            if (!AssetDatabase.IsValidFolder("Assets/Resources"))
                AssetDatabase.CreateFolder("Assets", "Resources");

            config = ScriptableObject.CreateInstance<LLMConfig>();
            AssetDatabase.CreateAsset(config, "Assets/Resources/LLMConfig.asset");
            AssetDatabase.SaveAssets();
            Debug.Log("[SmartNPC] Created LLMConfig at Assets/Resources/LLMConfig.asset. Please fill in your API key!");
            return config;
        }

        private static void AddSceneToBuildSettings(string scenePath)
        {
            var scenes = EditorBuildSettings.scenes;
            foreach (var s in scenes)
            {
                if (s.path == scenePath) return; // Already added
            }

            var newScenes = new EditorBuildSettingsScene[scenes.Length + 1];
            scenes.CopyTo(newScenes, 0);
            newScenes[scenes.Length] = new EditorBuildSettingsScene(scenePath, true);
            EditorBuildSettings.scenes = newScenes;
        }

        // ===================================================================
        // Environment
        // ===================================================================

        private static void CreateEnvironment()
        {
            // Ground
            GameObject ground = GameObject.CreatePrimitive(PrimitiveType.Plane);
            ground.name = "Ground";
            ground.transform.position = Vector3.zero;
            ground.transform.localScale = new Vector3(5, 1, 5);

            Renderer groundRenderer = ground.GetComponent<Renderer>();
            Material groundMat = new Material(Shader.Find("Standard"));
            groundMat.color = new Color(0.3f, 0.5f, 0.2f);
            groundRenderer.sharedMaterial = groundMat;

            // Directional Light
            GameObject lightObj = new GameObject("Directional Light");
            Light light = lightObj.AddComponent<Light>();
            light.type = LightType.Directional;
            light.color = new Color(1f, 0.95f, 0.85f);
            light.intensity = 1.2f;
            lightObj.transform.rotation = Quaternion.Euler(50, -30, 0);

            // NPC area structures
            CreateNPCArea("Smithy", new Vector3(-8, 0, 8), new Color(0.4f, 0.25f, 0.15f));
            CreateNPCArea("HerbShop", new Vector3(8, 0, 8), new Color(0.2f, 0.4f, 0.2f));
            CreateNPCArea("Tavern", new Vector3(0, 0, -8), new Color(0.5f, 0.3f, 0.2f));
        }

        private static void CreateNPCArea(string name, Vector3 position, Color color)
        {
            // Parent object
            GameObject area = new GameObject($"{name}_Area");

            // Building cube
            GameObject building = GameObject.CreatePrimitive(PrimitiveType.Cube);
            building.name = $"{name}_Building";
            building.transform.SetParent(area.transform);
            building.transform.position = position + Vector3.up * 1.5f;
            building.transform.localScale = new Vector3(4, 3, 4);

            Renderer renderer = building.GetComponent<Renderer>();
            Material mat = new Material(Shader.Find("Standard"));
            mat.color = color;
            renderer.sharedMaterial = mat;

            // Floor
            GameObject floor = GameObject.CreatePrimitive(PrimitiveType.Cube);
            floor.name = $"{name}_Floor";
            floor.transform.SetParent(area.transform);
            floor.transform.position = position + new Vector3(0, 0.05f, -3f);
            floor.transform.localScale = new Vector3(5, 0.1f, 3);

            Renderer floorRenderer = floor.GetComponent<Renderer>();
            Material floorMat = new Material(Shader.Find("Standard"));
            floorMat.color = color * 0.8f;
            floorRenderer.sharedMaterial = floorMat;

            // Sign
            GameObject sign = new GameObject($"{name}_Sign");
            sign.transform.SetParent(area.transform);
            sign.transform.position = position + new Vector3(0, 3.5f, -2f);
            TextMesh textMesh = sign.AddComponent<TextMesh>();
            textMesh.text = name == "Smithy" ? "铁匠铺" : name == "HerbShop" ? "药草堂" : "醉仙楼";
            textMesh.fontSize = 48;
            textMesh.characterSize = 0.15f;
            textMesh.anchor = TextAnchor.MiddleCenter;
            textMesh.alignment = TextAlignment.Center;
            textMesh.color = Color.white;
            sign.AddComponent<BillboardText>();
        }

        // ===================================================================
        // Player
        // ===================================================================

        private static void CreatePlayer()
        {
            GameObject player = new GameObject("Player");
            player.tag = "Player";
            player.transform.position = new Vector3(0, 1, 0);

            // Character controller
            CharacterController cc = player.AddComponent<CharacterController>();
            cc.height = 2f;
            cc.radius = 0.5f;
            cc.center = Vector3.zero;

            // Player body
            GameObject body = GameObject.CreatePrimitive(PrimitiveType.Capsule);
            body.name = "PlayerBody";
            body.transform.SetParent(player.transform);
            body.transform.localPosition = Vector3.zero;
            Object.DestroyImmediate(body.GetComponent<Collider>());

            Renderer bodyRenderer = body.GetComponent<Renderer>();
            Material bodyMat = new Material(Shader.Find("Standard"));
            bodyMat.color = new Color(0.2f, 0.4f, 0.8f);
            bodyRenderer.sharedMaterial = bodyMat;

            // Camera
            GameObject camHolder = new GameObject("CameraHolder");
            camHolder.transform.SetParent(player.transform);
            camHolder.transform.localPosition = new Vector3(0, 0.8f, 0);

            Camera cam = camHolder.AddComponent<Camera>();
            cam.nearClipPlane = 0.1f;
            cam.fieldOfView = 70f;
            cam.tag = "MainCamera";

            camHolder.AddComponent<AudioListener>();

            // Player controller
            PlayerController pc = player.AddComponent<PlayerController>();
            pc.cameraTransform = camHolder.transform;
        }

        // ===================================================================
        // NPCs
        // ===================================================================

        private static void CreateNPCs(LLMConfig llmConfig)
        {
            CreateNPC("铁匠老王", new Vector3(-8, 1, 4.5f), "npc-blacksmith",
                new Color(0.9f, 0.5f, 0.2f), 4f, llmConfig);

            CreateNPC("药师月灵", new Vector3(8, 1, 4.5f), "npc-herbalist",
                new Color(0.5f, 0.2f, 0.8f), 3f, llmConfig);

            CreateNPC("红姐", new Vector3(0, 1, -11.5f), "npc-tavern",
                new Color(0.9f, 0.2f, 0.3f), 4f, llmConfig);
        }

        private static void CreateNPC(string npcName, Vector3 position, string resourceFolder,
            Color color, float radius, LLMConfig llmConfig)
        {
            GameObject npc = new GameObject(npcName);
            npc.transform.position = position;

            // Visual capsule
            GameObject visual = GameObject.CreatePrimitive(PrimitiveType.Capsule);
            visual.name = "Body";
            visual.transform.SetParent(npc.transform);
            visual.transform.localPosition = Vector3.zero;
            Object.DestroyImmediate(visual.GetComponent<Collider>());

            Renderer renderer = visual.GetComponent<Renderer>();
            Material mat = new Material(Shader.Find("Standard"));
            mat.color = color;
            renderer.sharedMaterial = mat;

            // Name label
            GameObject nameLabel = new GameObject("NameLabel");
            nameLabel.transform.SetParent(npc.transform);
            nameLabel.transform.localPosition = new Vector3(0, 1.5f, 0);
            TextMesh text = nameLabel.AddComponent<TextMesh>();
            text.text = npcName;
            text.fontSize = 36;
            text.characterSize = 0.1f;
            text.anchor = TextAnchor.MiddleCenter;
            text.alignment = TextAlignment.Center;
            text.color = color;
            nameLabel.AddComponent<BillboardText>();

            // Create and save NPCProfile asset
            NPCProfile profile = ScriptableObject.CreateInstance<NPCProfile>();
            profile.npcName = npcName;
            profile.nameColor = color;
            profile.resourceFolder = resourceFolder;
            profile.interactionRadius = radius;

            // Save NPCProfile as asset
            if (!AssetDatabase.IsValidFolder("Assets/Resources/NPCProfiles"))
            {
                if (!AssetDatabase.IsValidFolder("Assets/Resources"))
                    AssetDatabase.CreateFolder("Assets", "Resources");
                AssetDatabase.CreateFolder("Assets/Resources", "NPCProfiles");
            }

            string profilePath = $"Assets/Resources/NPCProfiles/{resourceFolder}.asset";
            NPCProfile existingProfile = AssetDatabase.LoadAssetAtPath<NPCProfile>(profilePath);
            if (existingProfile != null)
            {
                profile = existingProfile;
            }
            else
            {
                AssetDatabase.CreateAsset(profile, profilePath);
                AssetDatabase.SaveAssets();
            }

            // Rigidbody
            Rigidbody rb = npc.AddComponent<Rigidbody>();
            rb.isKinematic = true;

            // Trigger collider
            SphereCollider trigger = npc.AddComponent<SphereCollider>();
            trigger.isTrigger = true;
            trigger.radius = radius;

            // NPCAgent
            NPCAgent agent = npc.AddComponent<NPCAgent>();
            agent.profile = profile;
            agent.llmConfig = llmConfig;

            // NPCInteraction
            npc.AddComponent<NPCInteraction>();
        }

        // ===================================================================
        // Dialogue UI
        // ===================================================================

        private static void CreateDialogueUI()
        {
            // Canvas
            GameObject canvasObj = new GameObject("DialogueCanvas");
            Canvas canvas = canvasObj.AddComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceOverlay;
            canvas.sortingOrder = 100;
            CanvasScaler scaler = canvasObj.AddComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = new Vector2(1920, 1080);
            canvasObj.AddComponent<GraphicRaycaster>();

            // Dialogue Panel
            GameObject panel = CreateUIElement("DialoguePanel", canvasObj.transform);
            RectTransform panelRect = panel.GetComponent<RectTransform>();
            panelRect.anchorMin = new Vector2(0.15f, 0.02f);
            panelRect.anchorMax = new Vector2(0.85f, 0.55f);
            panelRect.offsetMin = Vector2.zero;
            panelRect.offsetMax = Vector2.zero;
            Image panelImage = panel.AddComponent<Image>();
            panelImage.color = new Color(0, 0, 0, 0.85f);

            // NPC Name Header (Image and Text must be on separate GameObjects since both are Graphic)
            GameObject nameHeader = CreateUIElement("NPCName", panel.transform);
            RectTransform nameRect = nameHeader.GetComponent<RectTransform>();
            nameRect.anchorMin = new Vector2(0, 0.9f);
            nameRect.anchorMax = new Vector2(1, 1);
            nameRect.offsetMin = new Vector2(15, 0);
            nameRect.offsetMax = new Vector2(-15, 0);
            Image nameHeaderBg = nameHeader.AddComponent<Image>();
            nameHeaderBg.color = new Color(0.15f, 0.15f, 0.15f, 1f);

            // Child object for the name text
            GameObject nameTextObj = CreateUIElement("NameText", nameHeader.transform);
            RectTransform nameTextRect = nameTextObj.GetComponent<RectTransform>();
            nameTextRect.anchorMin = Vector2.zero;
            nameTextRect.anchorMax = Vector2.one;
            nameTextRect.offsetMin = new Vector2(10, 0);
            nameTextRect.offsetMax = new Vector2(-10, 0);
            Text nameText = CreateTextComponent(nameTextObj, "NPC", 22, Color.white, TextAnchor.MiddleLeft);

            // Chat scroll area
            GameObject scrollArea = CreateUIElement("ChatScrollArea", panel.transform);
            RectTransform scrollAreaRect = scrollArea.GetComponent<RectTransform>();
            scrollAreaRect.anchorMin = new Vector2(0, 0.15f);
            scrollAreaRect.anchorMax = new Vector2(1, 0.9f);
            scrollAreaRect.offsetMin = new Vector2(5, 0);
            scrollAreaRect.offsetMax = new Vector2(-5, 0);

            ScrollRect scroll = scrollArea.AddComponent<ScrollRect>();
            scroll.horizontal = false;
            Image scrollBg = scrollArea.AddComponent<Image>();
            scrollBg.color = new Color(0.05f, 0.05f, 0.05f, 0.5f);
            scrollArea.AddComponent<Mask>().showMaskGraphic = true;

            // Chat content
            GameObject content = CreateUIElement("ChatContent", scrollArea.transform);
            RectTransform contentRect = content.GetComponent<RectTransform>();
            contentRect.anchorMin = new Vector2(0, 1);
            contentRect.anchorMax = new Vector2(1, 1);
            contentRect.pivot = new Vector2(0.5f, 1);
            contentRect.offsetMin = new Vector2(10, 0);
            contentRect.offsetMax = new Vector2(-10, 0);

            VerticalLayoutGroup vlg = content.AddComponent<VerticalLayoutGroup>();
            vlg.spacing = 8;
            vlg.padding = new RectOffset(5, 5, 5, 5);
            vlg.childForceExpandWidth = true;
            vlg.childForceExpandHeight = false;
            vlg.childControlWidth = true;
            vlg.childControlHeight = true;

            ContentSizeFitter csf = content.AddComponent<ContentSizeFitter>();
            csf.verticalFit = ContentSizeFitter.FitMode.PreferredSize;

            scroll.content = contentRect;
            scroll.viewport = scrollAreaRect;

            // Input area
            GameObject inputArea = CreateUIElement("InputArea", panel.transform);
            RectTransform inputAreaRect = inputArea.GetComponent<RectTransform>();
            inputAreaRect.anchorMin = new Vector2(0, 0);
            inputAreaRect.anchorMax = new Vector2(1, 0.15f);
            inputAreaRect.offsetMin = new Vector2(10, 5);
            inputAreaRect.offsetMax = new Vector2(-10, -5);

            // Input Field
            GameObject inputFieldObj = CreateUIElement("InputField", inputArea.transform);
            RectTransform inputFieldRect = inputFieldObj.GetComponent<RectTransform>();
            inputFieldRect.anchorMin = new Vector2(0, 0);
            inputFieldRect.anchorMax = new Vector2(0.82f, 1);
            inputFieldRect.offsetMin = Vector2.zero;
            inputFieldRect.offsetMax = new Vector2(-5, 0);

            Image inputBg = inputFieldObj.AddComponent<Image>();
            inputBg.color = new Color(0.2f, 0.2f, 0.2f, 1f);

            InputField inputField = inputFieldObj.AddComponent<InputField>();

            // Input text
            GameObject inputTextObj = CreateUIElement("Text", inputFieldObj.transform);
            RectTransform inputTextRect = inputTextObj.GetComponent<RectTransform>();
            inputTextRect.anchorMin = Vector2.zero;
            inputTextRect.anchorMax = Vector2.one;
            inputTextRect.offsetMin = new Vector2(10, 2);
            inputTextRect.offsetMax = new Vector2(-10, -2);
            Text inputText = CreateTextComponent(inputTextObj, "", 18, Color.white, TextAnchor.MiddleLeft);
            inputField.textComponent = inputText;

            // Placeholder
            GameObject placeholderObj = CreateUIElement("Placeholder", inputFieldObj.transform);
            RectTransform phRect = placeholderObj.GetComponent<RectTransform>();
            phRect.anchorMin = Vector2.zero;
            phRect.anchorMax = Vector2.one;
            phRect.offsetMin = new Vector2(10, 2);
            phRect.offsetMax = new Vector2(-10, -2);
            Text placeholder = CreateTextComponent(placeholderObj, "输入消息... (Enter发送)", 18,
                new Color(0.5f, 0.5f, 0.5f), TextAnchor.MiddleLeft);
            placeholder.fontStyle = FontStyle.Italic;
            inputField.placeholder = placeholder;

            // Send Button
            GameObject sendBtnObj = CreateUIElement("SendButton", inputArea.transform);
            RectTransform sendBtnRect = sendBtnObj.GetComponent<RectTransform>();
            sendBtnRect.anchorMin = new Vector2(0.83f, 0);
            sendBtnRect.anchorMax = new Vector2(1, 1);
            sendBtnRect.offsetMin = Vector2.zero;
            sendBtnRect.offsetMax = Vector2.zero;

            Image btnImage = sendBtnObj.AddComponent<Image>();
            btnImage.color = new Color(0.2f, 0.6f, 1f);
            Button sendBtn = sendBtnObj.AddComponent<Button>();
            sendBtn.targetGraphic = btnImage;

            GameObject btnTextObj = CreateUIElement("BtnText", sendBtnObj.transform);
            RectTransform btnTextRect = btnTextObj.GetComponent<RectTransform>();
            btnTextRect.anchorMin = Vector2.zero;
            btnTextRect.anchorMax = Vector2.one;
            btnTextRect.offsetMin = Vector2.zero;
            btnTextRect.offsetMax = Vector2.zero;
            CreateTextComponent(btnTextObj, "发送", 18, Color.white, TextAnchor.MiddleCenter);

            // Typing indicator
            GameObject typingObj = CreateUIElement("TypingIndicator", panel.transform);
            RectTransform typingRect = typingObj.GetComponent<RectTransform>();
            typingRect.anchorMin = new Vector2(0, 0.88f);
            typingRect.anchorMax = new Vector2(0.5f, 0.92f);
            typingRect.offsetMin = new Vector2(20, 0);
            typingRect.offsetMax = new Vector2(0, 0);
            Text typingText = CreateTextComponent(typingObj, "NPC 正在思考...", 14,
                new Color(0.7f, 0.7f, 0.7f), TextAnchor.MiddleLeft);
            typingText.fontStyle = FontStyle.Italic;

            // Message Prefab (create and disable)
            GameObject msgPrefab = CreateUIElement("MessagePrefab", canvasObj.transform);
            RectTransform msgPrefabRect = msgPrefab.GetComponent<RectTransform>();
            msgPrefabRect.sizeDelta = new Vector2(0, 0);

            LayoutElement le = msgPrefab.AddComponent<LayoutElement>();
            le.minHeight = 30;

            GameObject msgTextObj = CreateUIElement("MsgText", msgPrefab.transform);
            RectTransform msgTextRect = msgTextObj.GetComponent<RectTransform>();
            msgTextRect.anchorMin = Vector2.zero;
            msgTextRect.anchorMax = Vector2.one;
            msgTextRect.offsetMin = new Vector2(5, 2);
            msgTextRect.offsetMax = new Vector2(-5, -2);
            Text msgText = CreateTextComponent(msgTextObj, "", 16, Color.white, TextAnchor.UpperLeft);
            msgText.supportRichText = true;

            ContentSizeFitter msgCsf = msgPrefab.AddComponent<ContentSizeFitter>();
            msgCsf.verticalFit = ContentSizeFitter.FitMode.PreferredSize;

            msgPrefab.SetActive(false);

            // DialogueManager
            DialogueManager dm = canvasObj.AddComponent<DialogueManager>();
            dm.dialoguePanel = panel;
            dm.npcNameText = nameText;
            dm.chatScrollRect = scroll;
            dm.chatContent = contentRect;
            dm.playerInputField = inputField;
            dm.sendButton = sendBtn;
            dm.typingIndicator = typingText;
            dm.messagePrefab = msgPrefab;

            // EventSystem
            GameObject eventSystem = new GameObject("EventSystem");
            eventSystem.AddComponent<UnityEngine.EventSystems.EventSystem>();
            eventSystem.AddComponent<UnityEngine.EventSystems.StandaloneInputModule>();
        }

        // ===================================================================
        // HUD
        // ===================================================================

        private static void CreateHUD()
        {
            GameObject hudCanvas = new GameObject("HUDCanvas");
            Canvas canvas = hudCanvas.AddComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceOverlay;
            canvas.sortingOrder = 50;
            hudCanvas.AddComponent<CanvasScaler>();
            hudCanvas.AddComponent<GraphicRaycaster>();

            GameObject hudText = CreateUIElement("HUDText", hudCanvas.transform);
            RectTransform hudRect = hudText.GetComponent<RectTransform>();
            hudRect.anchorMin = new Vector2(0, 0.9f);
            hudRect.anchorMax = new Vector2(1, 1f);
            hudRect.offsetMin = new Vector2(10, 0);
            hudRect.offsetMax = new Vector2(-10, 0);
            Text text = CreateTextComponent(hudText, "WASD移动 | 鼠标旋转视角 | 靠近NPC自动开始对话 | Tab关闭对话 | Esc切换鼠标锁定",
                16, new Color(1, 1, 1, 0.7f), TextAnchor.UpperLeft);
            text.fontStyle = FontStyle.Bold;

            // NPC status monitor
            GameObject statusText = CreateUIElement("StatusText", hudCanvas.transform);
            RectTransform statusRect = statusText.GetComponent<RectTransform>();
            statusRect.anchorMin = new Vector2(0, 0.85f);
            statusRect.anchorMax = new Vector2(1, 0.9f);
            statusRect.offsetMin = new Vector2(10, 0);
            statusRect.offsetMax = new Vector2(-10, 0);

            Text status = CreateTextComponent(statusText, "NPC初始化中...", 14,
                new Color(1, 0.8f, 0.2f, 0.8f), TextAnchor.UpperLeft);

            statusText.AddComponent<NPCStatusMonitor>();
        }

        // ===================================================================
        // UI Helpers
        // ===================================================================

        private static GameObject CreateUIElement(string name, Transform parent)
        {
            GameObject obj = new GameObject(name, typeof(RectTransform));
            obj.transform.SetParent(parent, false);
            return obj;
        }

        private static Font _cachedFont;

        private static Font GetDefaultFont()
        {
            if (_cachedFont != null)
                return _cachedFont;

            // 1. Try built-in font names across different Unity versions
            string[] builtinFontNames = new string[]
            {
                "LegacyRuntime.ttf",   // Unity 2023+ / Unity 6
                "Arial.ttf",           // Unity 2019-2022
            };
            foreach (string fontName in builtinFontNames)
            {
                _cachedFont = Resources.GetBuiltinResource<Font>(fontName);
                if (_cachedFont != null) return _cachedFont;
            }

            // 2. Try loading from AssetDatabase (editor only)
            string[] editorFontPaths = new string[]
            {
                "Assets/Fonts/Arial.ttf",
                "Assets/Fonts/MSYH.TTC",
            };
            foreach (string path in editorFontPaths)
            {
                _cachedFont = AssetDatabase.LoadAssetAtPath<Font>(path);
                if (_cachedFont != null) return _cachedFont;
            }

            // 3. Search project for any .ttf or .otf font
            string[] fontGuids = AssetDatabase.FindAssets("t:Font");
            foreach (string guid in fontGuids)
            {
                string path = AssetDatabase.GUIDToAssetPath(guid);
                _cachedFont = AssetDatabase.LoadAssetAtPath<Font>(path);
                if (_cachedFont != null) return _cachedFont;
            }

            // 4. Try OS fonts
            string[] osFontNames = new string[] { "Arial", "Microsoft YaHei", "SimHei", "Segoe UI" };
            foreach (string name in osFontNames)
            {
                _cachedFont = Font.CreateDynamicFontFromOSFont(name, 14);
                if (_cachedFont != null) return _cachedFont;
            }

            // 5. Last resort: create from any available OS font
            string[] availableFonts = Font.GetOSInstalledFontNames();
            if (availableFonts != null && availableFonts.Length > 0)
            {
                _cachedFont = Font.CreateDynamicFontFromOSFont(availableFonts[0], 14);
                if (_cachedFont != null) return _cachedFont;
            }

            Debug.LogError("[SmartNPCSceneCreator] Could not find any usable font! UI text will be invisible.");
            return null;
        }

        private static Text CreateTextComponent(GameObject obj, string text, int fontSize, Color color, TextAnchor anchor)
        {
            Text t = obj.AddComponent<Text>();
            t.text = text;
            t.fontSize = fontSize;
            t.color = color;
            t.alignment = anchor;
            t.font = GetDefaultFont();
            return t;
        }
    }
}
