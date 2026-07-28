# Awesome AICue Reader

> 为 [言灵工坊](https://www.aicue.top/) 打造的沉浸式阅读工作区。

在当前页面打开长帖、跳转楼层、查看上下文、回复与收藏，不必离开原站。

[![安装脚本](https://img.shields.io/badge/Install-Userscript-2f7d5c?style=for-the-badge)](https://cdn.jsdelivr.net/gh/Qianshuy99/awesome-aicue-reader@main/dist/awesome-aicue-reader.user.js)
[![用户手册](https://img.shields.io/badge/Read-Documentation-326f9e?style=for-the-badge)](https://qianshuy99.github.io/awesome-aicue-reader/)
[![License: MIT](https://img.shields.io/badge/License-MIT-59636d?style=for-the-badge)](LICENSE)

![Awesome AICue Reader 阅读工作区](assets/screenshots/03-quick-start-workspace.png)

## 一眼看懂

| 阅读 | 导航 | 互动 | 内容 |
| --- | --- | --- | --- |
| 浮窗、全屏、左右嵌入 | 时间轴、只看楼主、阅读历史 | 回复、点赞、收藏、通知 | 图片灯箱、批量下载、音视频、公式与代码 |

它不是另一个论坛客户端，而是为 Flarum 形态的言灵工坊深度适配。账号、权限、帖子与互动结果始终以原站为准。

## 开始使用

**前置条件：** Chromium 或 Firefox 桌面浏览器 + Tampermonkey / Violentmonkey 等支持 `GM_xmlhttpRequest` 的脚本管理器。

1. 安装并启用脚本管理器
2. 点击 [安装 Awesome AICue Reader](https://cdn.jsdelivr.net/gh/Qianshuy99/awesome-aicue-reader@main/dist/awesome-aicue-reader.user.js)，在扩展弹窗中确认安装
3. 打开或刷新 [言灵工坊](https://www.aicue.top/)，从讨论列表中的阅读器入口进入

当前版本：`0.1.14`。脚本已配置自动更新地址，安装后脚本管理器会按自身策略发现并安装后续版本。详见[安装与更新](docs/getting-started/installation.md)。

![讨论列表中的阅读器入口](assets/screenshots/02-reader-entry.png)

## 文档与开发

用户手册：<https://qianshuy99.github.io/awesome-aicue-reader/>

| 命令 | 作用 |
| --- | --- |
| `npm install` | 安装开发依赖，需要 Node.js 20+ |
| `npm run userscript:build` | 从 `work/main.js` 构建可安装的 `dist/` 脚本 |
| `npm run docs:dev` | 本地启动 VitePress 手册 |
| `npm run docs:check` | 校验文档、源码锚点、功能目录和截图 |
| `npm run docs:verify` | 校验并构建手册，适合提交前运行 |

目录保持简单：`work/` 放源码，`dist/` 放发布产物，`docs/` 放 VitePress 手册，`scripts/` 放构建与校验工具。文档以 [work/main.js](work/main.js) 为事实源，并通过自动校验阻止描述与实现漂移。

## 为长帖而设

### 读得下去

- 四种显示形态适配列表页与帖子页；长帖按需加载，并保持有界的 DOM 渲染窗口。
- 五区工作区让目录、正文、上下文与辅助信息各得其所。
- 字体、图片、布局、动效与性能均可调整，设置保存在本地。

### 找得到上下文

- 时间轴跳转、只看楼主、前进后退，减少在长讨论中迷路的成本。
- Flarum 没有原生回复目标字段时，阅读器基于正文提及推断楼中楼关系。
- 请求优先级、缓存、429 退避和资源监控帮助长任务保持可控。

### 仍然是原站

- 回复、点赞、收藏和通知使用言灵工坊自身接口，不接管账号体系。
- 图片灯箱支持浏览、评论与批量下载；正文支持音视频、HLS、KaTeX 和代码块。
- 不支持的 Discourse 专有能力会直接隐藏，不提供看似可用的空壳入口。

![图片灯箱与评论](assets/screenshots/10-lightbox.png)

## 边界与隐私

脚本仅匹配 `aicue.top`、`www.aicue.top` 与 `flarum.aicue.top`。其他网站会在初始化前退出，不注入界面，也不请求数据。

业务请求只面向言灵工坊自身域名。KaTeX、pinyin-pro、hls.js 与样式表作为静态依赖从 jsDelivr 加载；脚本不包含分析、埋点或第三方翻译请求。完整说明见[隐私、权限与边界](docs/manage/privacy-and-permissions.md)和[兼容性](docs/reference/compatibility.md)。

## 致谢

这个项目并不是从空白开始的。它站在已有开源实现、稳定的社区平台与一组可靠工具之上；这里逐一说明这些帮助在项目中留下的具体痕迹。

- [sunbigfly/awesome-linuxdo-reader](https://github.com/sunbigfly/awesome-linuxdo-reader) 是本项目的上游基础。阅读工作区、五区布局、有界渲染窗口、请求优先级调度等关键设计都来自这份完整的 MIT 开源实现。本项目在此基础上完成了从 Discourse 到 Flarum 的宿主适配：重建会话与数据映射、按 Flarum 能力收敛界面，并以原站 JSON:API 替换原有交互路径。
- [言灵工坊](https://www.aicue.top/) 是阅读器服务的社区与真实使用场景。项目只在其三个官方域名启动，登录、权限、内容与互动结果均由原站决定；每一张手册截图和每一项兼容性取舍也都以这里的实际界面为准。
- [Flarum](https://flarum.org/) 提供了清晰的 JSON:API 与前端运行态，使阅读器能在不接管账号体系的前提下读取讨论、提交回复，并把结果回写到原站体验中。
- [VitePress](https://vitepress.dev/) 承载用户手册；文档通过源码锚点、功能目录和截图校验与实现保持同步。图标来自 [Lucide](https://lucide.dev/)，公式、流媒体和中文排序能力分别依赖 [KaTeX](https://katex.org/)、[hls.js](https://github.com/video-dev/hls.js) 与 [pinyin-pro](https://github.com/zh-lx/pinyin-pro)。
- 感谢「[林夕」公益站](https://k40.shengqainbang.cn/keys) 维护面向学习交流的公益技术服务，并提供 API 密钥管理入口。该链接作为资源鸣谢保留在此；Awesome AICue Reader 不会访问该站，也不要求或收集用户的 API 密钥。

## 许可

[MIT License](LICENSE)。非言灵工坊官方项目；内容、权限与互动结果以原站为准。
