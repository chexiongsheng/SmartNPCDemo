using System;
using UnityEngine;
using LLMAgent;

namespace SmartNPC
{
    /// <summary>
    /// Manages a single NPC's LLM agent instance.
    /// Each NPC has its own AgentScriptManager with a unique system-prompt resource root.
    /// Attach this to each NPC GameObject.
    /// </summary>
    public class NPCAgent : MonoBehaviour
    {
        [Header("Configuration")]
        public NPCProfile profile;
        public LLMConfig llmConfig;

        private AgentScriptManager agentManager;
        private bool isReady;
        private bool isProcessing;

        /// <summary>Whether this NPC's agent is initialized and ready.</summary>
        public bool IsReady => isReady;

        /// <summary>Whether the agent is currently generating a response.</summary>
        public bool IsProcessing => isProcessing;

        /// <summary>The NPC's display name from profile.</summary>
        public string NPCName => profile != null ? profile.npcName : "NPC";

        /// <summary>Called when the agent finishes initialization.</summary>
        public event Action OnAgentReady;

        /// <summary>Called when a response starts streaming.</summary>
        public event Action<string> OnResponseProgress;

        /// <summary>Called when a full response is received.</summary>
        public event Action<string> OnResponseComplete;

        private void Start()
        {
            if (profile == null || llmConfig == null)
            {
                Debug.LogError($"[NPCAgent] {gameObject.name}: Missing profile or llmConfig!");
                return;
            }

            InitializeAgent();
        }

        private void InitializeAgent()
        {
            agentManager = new AgentScriptManager();

            string resourceRoot = profile.resourceFolder;
            Debug.Log($"[NPCAgent] Initializing {profile.npcName} with resource root: {resourceRoot}");

            agentManager.Initialize(resourceRoot, () =>
            {
                Debug.Log($"[NPCAgent] {profile.npcName} agent initialized successfully.");

                // Configure with LLM API settings
                string result = agentManager.ConfigureAgent(
                    llmConfig.apiKey,
                    llmConfig.baseURL,
                    llmConfig.model,
                    llmConfig.maxSteps
                );
                Debug.Log($"[NPCAgent] {profile.npcName} configure result: {result}");

                isReady = true;
                OnAgentReady?.Invoke();
            });
        }

        /// <summary>
        /// Send a message to this NPC's agent and get a response.
        /// </summary>
        /// <param name="message">The message text</param>
        /// <param name="onComplete">Callback with (response, isError)</param>
        public void SendMessage(string message, Action<string, bool> onComplete = null)
        {
            if (!isReady || agentManager == null)
            {
                string err = $"[NPCAgent] {NPCName} is not ready yet.";
                Debug.LogWarning(err);
                onComplete?.Invoke(err, true);
                return;
            }

            if (isProcessing)
            {
                string err = $"[NPCAgent] {NPCName} is still processing a previous message.";
                Debug.LogWarning(err);
                onComplete?.Invoke(err, true);
                return;
            }

            isProcessing = true;

            agentManager.SendMessageAsync(message, null, (response, isError) =>
            {
                isProcessing = false;
                OnResponseComplete?.Invoke(response);
                onComplete?.Invoke(response, isError);
            }, (progressText) =>
            {
                OnResponseProgress?.Invoke(progressText);
            });
        }

        /// <summary>
        /// Notify this NPC that a player has approached.
        /// Sends the PLAYER_APPROACH event. The model decides whether to greet or stay silent.
        /// </summary>
        public void OnPlayerApproach(Action<string> onGreeting)
        {
            if (!isReady || isProcessing) return;

            SendMessage("[EVENT:PLAYER_APPROACH] A player has walked near you.", (response, isError) =>
            {
                if (!isError && !string.IsNullOrEmpty(response))
                {
                    onGreeting?.Invoke(response);
                }
            });
        }

        /// <summary>
        /// Notify this NPC that the player has left.
        /// </summary>
        public void OnPlayerLeave(Action<string> onFarewell)
        {
            if (!isReady || isProcessing) return;

            SendMessage("[EVENT:PLAYER_LEAVE] The player is walking away.", (response, isError) =>
            {
                if (!isError && !string.IsNullOrEmpty(response))
                {
                    onFarewell?.Invoke(response);
                }
            });
        }

        /// <summary>
        /// Abort current generation if any.
        /// </summary>
        public void AbortGeneration()
        {
            if (agentManager != null && isProcessing)
            {
                agentManager.AbortGeneration();
                isProcessing = false;
            }
        }

        /// <summary>
        /// Clear this NPC's conversation history.
        /// </summary>
        public void ClearHistory()
        {
            agentManager?.ClearHistory();
        }

        private void OnDestroy()
        {
            agentManager?.Dispose();
            agentManager = null;
        }
    }
}
