# Awesome AICue Reader

言灵工坊（[aicue.top](https://www.aicue.top/)，Flarum）专用的增强阅读器 userscript。把长帖阅读、楼层上下文、原站互动和设置集中到一个沉浸式工作区里完成。

当前版本 `0.1.13`。

| 入口 | 链接 |
| --- | --- |
| 用户手册 | <https://qianshuy99.github.io/awesome-aicue-reader/> |
| 安装脚本 | [dist/awesome-aicue-reader.user.js](https://github.com/Qianshuy99/awesome-aicue-reader/raw/main/dist/awesome-aicue-reader.user.js) |
| 目标站点 | <https://www.aicue.top/> |

## 这是什么

在言灵工坊的讨论列表或详情页打开一个阅读工作区，提供：

- 四种显示形态：浮窗、全屏、左嵌入、右嵌入。
- 长帖按需加载，维护有界的 DOM 渲染窗口。
- 时间轴跳转、只看楼主、浏览历史前后切换。
- 楼中楼上下文（基于正文提及推断，Flarum 没有回复目标字段）。
- 回复、点赞、收藏、通知，全部走言灵工坊自身接口。
- 图片灯箱与批量下载、音视频与 HLS、KaTeX 公式与代码块。
- 13 个设置面板，覆盖图片、字体、五区布局、浮窗、外观、动效与性能。
- 资源监控与请求账本，可观察长任务、请求优先级与 429 退避。

![阅读器工作区全貌](assets/screenshots/03-quick-start-workspace.png)

## 安装

需要现代 Chromium 内核浏览器或 Firefox 桌面版，以及支持 `GM_xmlhttpRequest` 的脚本管理器（Tampermonkey、Violentmonkey）。

1. 安装脚本管理器扩展并确认已启用。
2. 打开 [安装链接](https://github.com/Qianshuy99/awesome-aicue-reader/raw/main/dist/awesome-aicue-reader.user.js)，脚本管理器会弹出安装确认。
3. 核对名称为 `Awesome AICue Reader`、版本为 `0.1.13`，确认安装。
4. 打开 `https://www.aicue.top/` 并刷新，讨论列表加载后会出现阅读器入口。

脚本未配置 `@updateURL` / `@downloadURL`，不会自动更新。需要更新时重新覆盖安装一次，设置不会丢失。

完整说明见[安装与更新](docs/getting-started/installation.md)。

## 适用范围

只服务言灵工坊一个站点，声明三个 `@match` 域名：`aicue.top`、`www.aicue.top`、`flarum.aicue.top`。代码里另有一层运行态判断，宿主 hostname 不在这三个域名内时脚本在业务初始化前直接退出，不注入任何 DOM，也不发起请求。

Flarum 没有 Discourse 的 Boost、Reactions、Post Voting、Connect 等插件能力，相关入口一律隐藏。详见[兼容性](docs/reference/compatibility.md)。

## 隐私

`@connect` 只声明言灵工坊自身的三个域名，业务请求不出站。另有两类静态资源来自 jsDelivr：`@require` 的 KaTeX 0.16.22、pinyin-pro 3.18.2、hls.js 1.6.16，以及 `@resource` 声明的样式表（带 `sha256` 校验）。

脚本没有任何分析、埋点或上报域名，不代持账号凭据，正文翻译整体关闭。详见[隐私、权限与边界](docs/manage/privacy-and-permissions.md)。

## 文档

用户手册用 VitePress 构建，共 17 页，在线阅读：**<https://qianshuy99.github.io/awesome-aicue-reader/>**。源码在 [docs/](docs/)，每次推送 main 由 [GitHub Actions](.github/workflows/docs.yml) 自动校验并部署。

| 命令 | 用途 |
| --- | --- |
| `npm install` | 安装依赖，需要 Node 20 以上 |
| `npm run docs:dev` | 本地预览，监听 127.0.0.1 |
| `npm run docs:check` | 校验元数据、源码锚点、功能映射与配图 |
| `npm run docs:build` | 构建静态站点 |
| `npm run docs:verify` | 先校验再构建，提交前跑这个 |
| `npm run userscript:build` | 从 `work/` 构建 `dist/` 里的 userscript |

手册以 [work/main.js](work/main.js) 为唯一事实源，`docs:check` 负责挡住文档与源码不一致。每页必须声明九个元数据字段，`source_anchors` 里的字符串必须能在源码中找到，功能目录与页面之间需要双向声明同一个功能 ID。规范见[文档维护规范](docs/reference/documentation.md)。

## 目录结构

| 路径 | 内容 |
| --- | --- |
| `work/` | 源码，`main.js` 与 `main.css` |
| `dist/` | 构建产物，安装用的 userscript |
| `docs/` | VitePress 用户手册 |
| `scripts/` | 构建与校验脚本 |
| `assets/screenshots/` | 手册配图 |

## 致谢

这个项目站在 [sunbigfly / awesome-linuxdo-reader](https://github.com/sunbigfly/awesome-linuxdo-reader) 的肩膀上。阅读工作区的整体形态、五区布局、有界渲染窗口、请求优先级调度这些真正难的设计都来自上游，本项目做的是把宿主平台从 Discourse 换成 Flarum。衷心感谢 sunbigfly 以 MIT 许可开源了一份可以拿来重塑的完整实现。

移植不是逐行翻译。Flarum 没有回复目标字段，楼中楼要从正文提及重建；没有 `actions_summary`，点赞状态得从 `likes` 关系推断；没有 composer 服务，回复改用阅读器自带的表单。上游围绕多站点适配、自定义站点校验和正文翻译建立的能力在单站点、纯中文的言灵工坊上不成立，已整体移除而非勉强改写。这些取舍记录在[兼容性](docs/reference/compatibility.md)里。

同样感谢：

- [言灵工坊](https://www.aicue.top/) 社区，以及愿意让阅读器读写自己主页的每一位成员。
- [Flarum](https://flarum.org/) 提供了干净、可预测的 JSON:API，让适配层能只靠公开接口完成。
- [VitePress](https://vitepress.dev/) 支撑这份手册，[Lucide](https://lucide.dev/) 提供全部图标（许可见 [lucide.txt](docs/public/third-party-licenses/lucide.txt)）。
- [KaTeX](https://katex.org/)、[hls.js](https://github.com/video-dev/hls.js)、[pinyin-pro](https://github.com/zh-lx/pinyin-pro) 承担公式、流媒体与拼音排序。

样式表目前仍通过 `@resource` 从上游仓库的 jsDelivr 固定 commit 加载，文件内容与本仓库 `work/main.css` 一致。

## 许可

本项目以 MIT 许可发布，见 [LICENSE](LICENSE)，与上游保持一致。

非言灵工坊官方项目。站点数据与互动结果以原站为准。
