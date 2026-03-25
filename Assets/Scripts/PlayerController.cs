using UnityEngine;

namespace SmartNPC
{
    /// <summary>
    /// Simple third-person player controller.
    /// WASD to move, mouse to look around.
    /// Must have the "Player" tag set on the GameObject.
    /// </summary>
    [RequireComponent(typeof(CharacterController))]
    public class PlayerController : MonoBehaviour
    {
        [Header("Movement")]
        public float moveSpeed = 5f;
        public float gravity = -9.81f;

        [Header("Camera")]
        public float mouseSensitivity = 2f;
        public Transform cameraTransform;

        private CharacterController controller;
        private float verticalVelocity;
        private float cameraPitch;

        /// <summary>
        /// When true, player input is disabled (e.g. during dialogue).
        /// Camera look is also disabled.
        /// </summary>
        public bool InputLocked { get; set; }

        private void Awake()
        {
            controller = GetComponent<CharacterController>();

            if (cameraTransform == null)
            {
                Camera cam = GetComponentInChildren<Camera>();
                if (cam != null)
                    cameraTransform = cam.transform;
            }
        }

        private void Start()
        {
            Cursor.lockState = CursorLockMode.Locked;
            Cursor.visible = false;
        }

        private void Update()
        {
            // Toggle cursor lock with Escape
            if (Input.GetKeyDown(KeyCode.Escape))
            {
                if (Cursor.lockState == CursorLockMode.Locked)
                {
                    Cursor.lockState = CursorLockMode.None;
                    Cursor.visible = true;
                }
                else
                {
                    Cursor.lockState = CursorLockMode.Locked;
                    Cursor.visible = false;
                }
            }

            if (InputLocked) return;

            HandleMouseLook();
            HandleMovement();
        }

        private void HandleMouseLook()
        {
            if (Cursor.lockState != CursorLockMode.Locked) return;

            float mouseX = Input.GetAxis("Mouse X") * mouseSensitivity;
            float mouseY = Input.GetAxis("Mouse Y") * mouseSensitivity;

            // Horizontal rotation — rotate the player body
            transform.Rotate(Vector3.up * mouseX);

            // Vertical rotation — rotate the camera
            cameraPitch -= mouseY;
            cameraPitch = Mathf.Clamp(cameraPitch, -80f, 80f);

            if (cameraTransform != null)
            {
                cameraTransform.localEulerAngles = new Vector3(cameraPitch, 0f, 0f);
            }
        }

        private void HandleMovement()
        {
            float horizontal = Input.GetAxis("Horizontal");
            float vertical = Input.GetAxis("Vertical");

            Vector3 move = transform.right * horizontal + transform.forward * vertical;

            if (controller.isGrounded)
            {
                verticalVelocity = -2f;
            }
            else
            {
                verticalVelocity += gravity * Time.deltaTime;
            }

            move.y = verticalVelocity;
            controller.Move(move * moveSpeed * Time.deltaTime);
        }
    }
}
