using System;
using System.Collections.Generic;
using System.Reflection;
using Puerts;
using Puerts.TypeMapping;

[Configure]
public class PuertsCfg
{
    // Filter out members of System.Diagnostics.Debug that are not available
    // in Unity's compilation environment (facade assembly).
    private static readonly HashSet<string> SystemDiagnosticsDebugUnsupportedMembers = new HashSet<string>
    {
        "Listeners", "AutoFlush", "IndentLevel", "IndentSize",
        "Flush", "Close", "Indent", "Unindent",
        "Write", "WriteIf", "WriteLine", "WriteLineIf", "Print"
    };

    [Filter]
    static BindingMode MemberFilter(MemberInfo memberInfo)
    {
        if (memberInfo.DeclaringType == typeof(System.Diagnostics.Debug))
        {
            string name = memberInfo.Name;
            // Also handle property getter/setter (e.g. get_Listeners, set_AutoFlush)
            if (name.StartsWith("get_") || name.StartsWith("set_"))
                name = name.Substring(4);

            if (SystemDiagnosticsDebugUnsupportedMembers.Contains(name))
                return BindingMode.DontBinding;
        }
        return BindingMode.FastBinding;
    }

    /// <summary>
    /// Common Unity types to generate static wrapper bindings for.
    /// This improves JS→C# call performance and prevents IL2CPP stripping.
    /// </summary>
    [Binding]
    static IEnumerable<Type> Bindings
    {
        get
        {
            return new List<Type>()
            {
                // --- Core ---
                typeof(UnityEngine.Object),
                typeof(UnityEngine.Debug),
                typeof(UnityEngine.Time),
                typeof(UnityEngine.Application),
                typeof(UnityEngine.Resources),

                // --- GameObject / Component / Transform ---
                typeof(UnityEngine.GameObject),
                typeof(UnityEngine.Component),
                typeof(UnityEngine.Transform),
                typeof(UnityEngine.RectTransform),
                typeof(UnityEngine.MonoBehaviour),
                typeof(UnityEngine.Behaviour),

                // --- Math ---
                typeof(UnityEngine.Vector2),
                typeof(UnityEngine.Vector3),
                typeof(UnityEngine.Vector4),
                typeof(UnityEngine.Quaternion),
                typeof(UnityEngine.Color),
                typeof(UnityEngine.Color32),
                typeof(UnityEngine.Mathf),
                typeof(UnityEngine.Matrix4x4),
                typeof(UnityEngine.Rect),
                typeof(UnityEngine.Bounds),
                typeof(UnityEngine.Ray),

                // --- Rendering ---
                typeof(UnityEngine.Camera),
                typeof(UnityEngine.Material),
                typeof(UnityEngine.Shader),
                typeof(UnityEngine.Renderer),
                typeof(UnityEngine.MeshRenderer),
                typeof(UnityEngine.SkinnedMeshRenderer),
                typeof(UnityEngine.Texture),
                typeof(UnityEngine.Texture2D),
                typeof(UnityEngine.Sprite),
                typeof(UnityEngine.Light),
                typeof(UnityEngine.Screen),

                // --- Physics ---
                typeof(UnityEngine.Physics),
                typeof(UnityEngine.Rigidbody),
                typeof(UnityEngine.Collider),
                typeof(UnityEngine.BoxCollider),
                typeof(UnityEngine.SphereCollider),
                typeof(UnityEngine.CapsuleCollider),
                typeof(UnityEngine.MeshCollider),
                typeof(UnityEngine.RaycastHit),
                typeof(UnityEngine.LayerMask),

                // --- Animation ---
                typeof(UnityEngine.Animator),
                typeof(UnityEngine.Animation),
                typeof(UnityEngine.AnimationClip),

                // --- Audio ---
                typeof(UnityEngine.AudioSource),
                typeof(UnityEngine.AudioClip),

                // --- Input ---
                typeof(UnityEngine.Input),
                typeof(UnityEngine.KeyCode),

                // --- UI ---
                typeof(UnityEngine.Canvas),
                typeof(UnityEngine.UI.Text),
                typeof(UnityEngine.UI.Image),
                typeof(UnityEngine.UI.Button),
                typeof(UnityEngine.UI.Slider),
                typeof(UnityEngine.UI.Toggle),
                typeof(UnityEngine.UI.InputField),
                typeof(UnityEngine.UI.ScrollRect),
                typeof(UnityEngine.UI.Dropdown),
                typeof(UnityEngine.EventSystems.EventSystem),

                // --- Scene ---
                typeof(UnityEngine.SceneManagement.SceneManager),
                typeof(UnityEngine.SceneManagement.Scene),

                // --- Misc ---
                typeof(UnityEngine.PlayerPrefs),
                typeof(UnityEngine.Coroutine),
                typeof(UnityEngine.WaitForSeconds),
                typeof(UnityEngine.WaitForEndOfFrame),
                typeof(UnityEngine.TextAsset),
                typeof(UnityEngine.ParticleSystem),

                typeof(System.Diagnostics.Debug),
            };
        }
    }
}