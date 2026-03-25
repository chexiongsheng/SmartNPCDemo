# SmartNPCDemo

基于 [PuerTS](https://github.com/Tencent/puerts) Agent 框架实现的智能 NPC 对话 Demo。每个 NPC 拥有独立的 LLM Agent 实例和人设 system-prompt，玩家靠近 NPC 时可触发互动对话，NPC 根据自身性格决定是否主动搭讪。

Demo 中包含三个风格迥异的 NPC：

| NPC | 名字 | 性格 | 说明 |
|-----|------|------|------|
| 🔨 铁匠老王 | 老王 (Old Wang) | 热情、豪爽、话多 | 主动招呼路过的冒险者，爱聊武器和村中八卦 |
| 🍺 酒馆老板娘 | 红姐 (Sister Hong) | 八卦、热心、活泼 | 热情迎客，什么都想聊，尤其爱打听别人的事 |
| 🌿 药师月灵 | 月灵 (Yue Ling) | 冷淡、神秘、话少 | 很少主动开口，只对有礼且坚持的访客稍有回应 |

## 准备工作

### 克隆仓库

本项目包含 Git submodule，克隆时请使用 `--recursive` 参数以同时拉取所有子模块：

```bash
git clone --recursive <REPO_URL>
```

如果已经克隆但忘记加 `--recursive`，可以补充初始化子模块：

```bash
git submodule update --init --recursive
```

### 获取 PuerTS 插件二进制

项目依赖的 [PuerTS](https://github.com/Tencent/puerts) submodule 中**不包含**编译好的二进制插件，需要手动从 PuerTS 的 GitHub Releases 页面下载并解压。

以 `Unity_v3.0.1` 为例，下载地址：
> https://github.com/Tencent/puerts/releases/tag/Unity_v3.0.1

需要下载以下三个插件包，并将各自的 `Plugins` 目录内容放置到对应的 UPM 包路径下：

| 插件包 | 说明 | 放置路径 |
|--------|------|----------|
| **PuerTS-Core** | PuerTS 核心插件 | `puerts/unity/upms/core/Plugins/` |
| **PuerTS-V8** | V8 引擎后端插件 | `puerts/unity/upms/v8/Plugins/` |
| **PuerTS-Nodejs** | Node.js 后端插件 | `puerts/unity/upms/nodejs/Plugins/` |

> ⚠️ **注意**：不要放到 `Assets/Plugins/`，应放到各 UPM 包自身的 `Plugins` 目录下。

### 构建 TypeScript

Agent 的 TypeScript 工程位于 `puerts/unity/agent_proj/`，需要先构建：

```bash
cd puerts/unity/agent_proj
npm install
npm run build
```

## 运行 Demo

### 1. 生成 Demo 场景

菜单栏 **SmartNPC → Create Demo Scene**，将自动生成一个完整的 Demo 场景，包含：

- 简易 3D 环境（地面 + 光照）
- WASD 控制的玩家角色
- 三个 NPC（铁匠、酒馆老板娘、药师），各自拥有独立 LLM Agent
- 对话 UI 系统
- NPC 初始化状态 HUD

场景保存在 `Assets/Scenes/SmartNPCDemo.unity`。

### 2. 配置 API Key

生成场景后，Inspector 面板会自动选中 **LLMConfig** 资源，在其中配置以下字段：

| 字段 | 说明 | 示例 |
|------|------|------|
| **Api Key** | LLM 服务的 API Key（必填） | `sk-xxxxxxxx` |
| **Base URL** | API 端点地址（兼容 OpenAI 格式） | `https://api.openai.com/v1` |
| **Model** | 模型名称 | `gpt-4o-mini` |
| **Max Steps** | 最大工具调用步数，0 = 无限制 | `5` |

> LLMConfig 位于 `Assets/Resources/LLMConfig.asset`，也可随时在 Project 窗口中找到并修改。

### 3. 运行

1. 打开 `Assets/Scenes/SmartNPCDemo.unity` 场景
2. 确认 LLMConfig 上已配置好 API Key
3. 点击 Unity 的 **Play** 按钮进入运行模式
4. 等待右上角 HUD 显示所有 NPC 初始化完成（✓ 标记）
5. 使用 **WASD** 移动玩家，靠近 NPC 触发互动
6. NPC 会根据自身性格决定是否主动搭讪；进入对话后可通过输入框聊天

## 项目结构

```
SmartNPCDemo/
├── Assets/
│   ├── Editor/
│   │   └── SceneBootstrap.cs          # 编辑器工具：一键生成 Demo 场景
│   ├── Scripts/
│   │   ├── NPCAgent.cs                # NPC Agent 核心：管理 LLM 实例和消息收发
│   │   ├── NPCProfile.cs              # NPC 配置 ScriptableObject
│   │   ├── NPCInteraction.cs          # NPC 交互检测（靠近/离开事件）
│   │   ├── DialogueManager.cs         # 对话 UI 管理
│   │   ├── PlayerController.cs        # 玩家移动控制
│   │   ├── LLMConfig.cs               # LLM API 配置 ScriptableObject
│   │   ├── BillboardText.cs           # 文字面向摄像机组件
│   │   └── NPCStatusMonitor.cs        # NPC 初始化状态 HUD
│   └── Resources/
│       ├── npc-blacksmith/             # 铁匠老王的 Agent 资源
│       │   └── system-prompt.md.txt
│       ├── npc-tavern/                 # 酒馆红姐的 Agent 资源
│       │   └── system-prompt.md.txt
│       └── npc-herbalist/              # 药师月灵的 Agent 资源
│           └── system-prompt.md.txt
└── puerts/unity/agent_proj/            # Agent TypeScript 工程
    └── src/
        ├── main.mts                    # 入口
        ├── agent/                      # Agent 核心逻辑
        ├── polyfills/                  # Fetch/Streams polyfill
        └── tools/                      # Agent 工具
```

## 自定义 NPC

1. 在 `Assets/Resources/` 下创建新的 `npc-<name>/` 文件夹，添加 `system-prompt.md.txt` 定义人设
2. 通过菜单 **Assets → Create → SmartNPC → NPC Profile** 创建配置，设置名字、颜色、互动半径和 `resourceFolder`
3. 在场景中的 NPC GameObject 上挂载 `NPCAgent` 组件，关联 Profile 和 LLMConfig 即可