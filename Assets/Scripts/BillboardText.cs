using UnityEngine;

namespace SmartNPC
{
    /// <summary>
    /// Simple billboard component that makes text always face the camera.
    /// </summary>
    public class BillboardText : MonoBehaviour
    {
        private void LateUpdate()
        {
            Camera cam = Camera.main;
            if (cam != null)
            {
                transform.LookAt(transform.position + cam.transform.forward);
            }
        }
    }
}
