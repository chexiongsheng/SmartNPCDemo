using UnityEngine;
#if UNITY_EDITOR
using UnityEditor;
#endif

namespace SmartNPC
{
    /// <summary>
    /// Scriptable Object that stores shared LLM API configuration.
    /// Create via Assets > Create > SmartNPC > LLM Config.
    /// Place it at Assets/Resources/LLMConfig.asset for auto-discovery.
    /// </summary>
    [CreateAssetMenu(fileName = "LLMConfig", menuName = "SmartNPC/LLM Config")]
    public class LLMConfig : ScriptableObject
    {
        [Header("API Settings")]
        [Tooltip("Your LLM API key (e.g., OpenAI API key)")]
        public string apiKey = "";

        [Tooltip("API base URL. For OpenAI: https://api.openai.com/v1")]
        public string baseURL = "https://api.openai.com/v1";

        [Tooltip("Model name, e.g. gpt-4o-mini, gpt-4o, deepseek-chat, etc.")]
        public string model = "gpt-4o-mini";

        [Header("Agent Settings")]
        [Tooltip("Max tool-call steps per generation. 0 = unlimited. For NPC dialogue, 5 is plenty.")]
        public int maxSteps = 5;
    }
}
