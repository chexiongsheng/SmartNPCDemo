using UnityEngine;

namespace SmartNPC
{
    /// <summary>
    /// Handles NPC interaction detection and triggers dialogue when player approaches.
    /// Attach this to each NPC GameObject alongside NPCAgent.
    /// Requires a SphereCollider set as trigger for proximity detection.
    /// </summary>
    [RequireComponent(typeof(NPCAgent))]
    public class NPCInteraction : MonoBehaviour
    {
        private NPCAgent npcAgent;
        private bool playerInRange;
        private bool hasGreeted;

        /// <summary>Whether the player is currently in interaction range.</summary>
        public bool PlayerInRange => playerInRange;

        private void Awake()
        {
            npcAgent = GetComponent<NPCAgent>();

            // Ensure we have a trigger collider for proximity detection
            SphereCollider trigger = GetComponent<SphereCollider>();
            if (trigger == null)
            {
                trigger = gameObject.AddComponent<SphereCollider>();
                trigger.isTrigger = true;
                trigger.radius = npcAgent.profile != null ? npcAgent.profile.interactionRadius : 3f;
            }
        }

        private void OnTriggerEnter(Collider other)
        {
            if (!other.CompareTag("Player")) return;
            if (playerInRange) return;

            playerInRange = true;
            hasGreeted = false;

            Debug.Log($"[NPCInteraction] Player entered {npcAgent.NPCName}'s range.");

            // All NPCs receive PLAYER_APPROACH event. The model decides whether
            // to greet (speak) or stay silent based on the NPC's personality.
            DialogueManager.Instance?.ShowWaitingIndicator(this);

            npcAgent.OnPlayerApproach((greeting) =>
            {
                hasGreeted = true;
                // Open dialogue; if the model replied [SILENCE], no message is shown.
                DialogueManager.Instance?.OnPlayerApproachNPCWithGreeting(this, greeting);
            });
        }

        private void OnTriggerExit(Collider other)
        {
            if (!other.CompareTag("Player")) return;

            playerInRange = false;
            Debug.Log($"[NPCInteraction] Player left {npcAgent.NPCName}'s range.");

            // Notify the NPC that the player left
            npcAgent.OnPlayerLeave((farewell) =>
            {
                // Only show farewell if NPC chose to speak (not [SILENCE])
                if (!string.IsNullOrEmpty(farewell) && !farewell.Trim().StartsWith("[SILENCE]"))
                {
                    DialogueManager.Instance?.ShowNPCMessage(npcAgent, farewell);
                }
            });

            // Close dialogue if this NPC was being talked to
            DialogueManager.Instance?.OnPlayerLeaveNPC(this);
            hasGreeted = false;
        }

        /// <summary>Get the NPCAgent component.</summary>
        public NPCAgent GetAgent() => npcAgent;
    }
}
