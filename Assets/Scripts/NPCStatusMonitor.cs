using UnityEngine;
using UnityEngine.UI;

namespace SmartNPC
{
    /// <summary>
    /// Monitors NPC agent initialization status and updates UI text.
    /// </summary>
    public class NPCStatusMonitor : MonoBehaviour
    {
        private Text statusText;
        private NPCAgent[] agents;
        private bool allReady;

        private void Start()
        {
            statusText = GetComponent<Text>();
        }

        private void Update()
        {
            if (allReady) return;

            if (agents == null || agents.Length == 0)
            {
                agents = FindObjectsOfType<NPCAgent>();
                if (agents.Length == 0)
                {
                    statusText.text = "等待NPC创建...";
                    return;
                }
            }

            int ready = 0;
            string status = "";
            foreach (var agent in agents)
            {
                if (agent.IsReady)
                {
                    ready++;
                    status += $"<color=#4CAF50>✓ {agent.NPCName}</color>  ";
                }
                else
                {
                    status += $"<color=#FFC107>⟳ {agent.NPCName}初始化中...</color>  ";
                }
            }

            statusText.supportRichText = true;
            statusText.text = $"NPC状态 ({ready}/{agents.Length}): {status}";

            if (ready == agents.Length)
            {
                allReady = true;
                // Hide after a few seconds
                Destroy(gameObject, 5f);
            }
        }
    }
}
