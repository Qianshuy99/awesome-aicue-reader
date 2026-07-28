---
title: 安装与更新
description: 在浏览器脚本管理器中安装 Awesome AICue Reader，确认匹配站点、权限声明与外部依赖，并了解更新方式。
feature_ids: ["CORE-001", "REF-001", "REF-002"]
source_anchors: ["AICUE_HOSTS", "@match", "@grant", "READER_VERSION"]
since: 0.1.13
version: 0.1.14
status: current
last_verified: 2026-07-27
screenshots: ["/screenshots/01-installation-confirm.png", "/screenshots/02-reader-entry.png"]
---

# 安装与更新

阅读器是一个 userscript，需要先在浏览器里装好脚本管理器，再安装脚本本体。

## 前置条件

| 项目 | 要求 |
| --- | --- |
| 浏览器 | 现代 Chromium 内核浏览器或 Firefox 桌面版 |
| 脚本管理器 | Tampermonkey、Violentmonkey 等支持 `GM_xmlhttpRequest` 的管理器 |
| 站点账号 | 言灵工坊账号，且已在原站登录 |
| 网络 | 能访问 `cdn.jsdelivr.net`，脚本的样式与三个外部库从该 CDN 加载 |

## 安装步骤

1. 在浏览器中安装脚本管理器扩展，并确认扩展已启用。
2. 打开 [安装脚本](https://raw.githubusercontent.com/Qianshuy99/awesome-aicue-reader/main/dist/awesome-aicue-reader.user.js)，脚本管理器会弹出安装确认。
3. 在确认页面核对脚本名称为 `Awesome AICue Reader`、版本为 `0.1.14`，然后确认安装。

![脚本管理器的安装确认页面](/screenshots/01-installation-confirm.png)

<p class="image-caption">确认安装前核对脚本名称与版本号。</p>

4. 打开 `https://www.aicue.top/`，刷新页面。脚本在 `document-start` 阶段注入，讨论列表加载后会出现阅读器入口按钮。

![言灵工坊讨论列表上的阅读器入口按钮](/screenshots/02-reader-entry.png)

<p class="image-caption">安装成功后，讨论列表的每个条目上会出现阅读器入口。</p>

## 匹配站点

脚本声明三个 `@match` 域名：

- `https://www.aicue.top/*`
- `https://aicue.top/*`
- `https://flarum.aicue.top/*`

代码里另有一层运行态判断：宿主 hostname 不在这三个域名内时，脚本立即 `return`，不注入任何 DOM，也不发起请求。这与上游的多站点适配层不同，本项目没有自定义站点入口。

## 权限声明

安装时脚本管理器会提示以下权限，用途如下：

| 声明 | 用途 |
| --- | --- |
| `GM_getValue` / `GM_setValue` | 保存阅读器设置与本地缓存索引 |
| `GM_xmlhttpRequest` | 请求言灵工坊 API 与站点资源 |
| `GM_getResourceText` | 读取 `@resource` 声明的样式表 |
| `unsafeWindow` | 访问宿主页面的前端运行态 |
| `@connect aicue.top` 等三项 | 限定跨域请求目标为言灵工坊自身域名 |

脚本没有声明任何第三方分析或上报域名。详见[隐私、权限与边界](/manage/privacy-and-permissions)。

## 外部依赖

| 依赖 | 版本 | 用途 |
| --- | --- | --- |
| KaTeX | 0.16.22 | 正文公式渲染 |
| pinyin-pro | 3.18.2 | 中文检索与排序辅助 |
| hls.js | 1.6.16 | HLS 视频播放 |

样式表通过 `@resource ldpReaderStyles` 从 jsDelivr 的固定 commit 加载，并带 `sha256` 完整性校验。当前该地址仍指向上游仓库 `awesome-linuxdo-reader` 的 `work/main.css`，文件内容与本项目 `work/main.css` 一致。样式源迁移到本仓库前，CDN 不可达时阅读器会缺少样式。

## 更新

脚本已配置 `@updateURL` 与 `@downloadURL`，指向仓库 `main` 分支的发布产物。安装 `0.1.14` 或更新版本后，脚本管理器会按自身策略检查并安装后续版本。设置保存在脚本管理器的存储中，更新安装不会清空。

关于面板底部显示当前运行的版本号，可用于确认更新是否生效。
