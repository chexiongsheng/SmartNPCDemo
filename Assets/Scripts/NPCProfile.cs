using UnityEngine;

namespace SmartNPC
{
    /// <summary>
    /// Scriptable Object that defines an NPC's identity and LLM agent settings.
    /// Create via Assets > Create > SmartNPC > NPC Profile.
    /// </summary>
    [CreateAssetMenu(fileName = "NewNPCProfile", menuName = "SmartNPC/NPC Profile")]
    public class NPCProfile : ScriptableObject
    {
        [Header("Basic Info")]
        public string npcName = "NPC";
        public Color nameColor = Color.white;

        [Header("LLM Agent Settings")]
        [Tooltip("Resource root under Resources/, e.g. 'npc-blacksmith'")]
        public string resourceFolder = "";

        [Header("Personality")]
        [Tooltip("Interaction radius — how close the player needs to be")]
        public float interactionRadius = 3f;
    }
}
