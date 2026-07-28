---
title: 隐私、权限与边界
description: 脚本申请的权限、请求去向、本地保存的数据，以及明确不做的事情。
feature_ids: ["REF-001", "CORE-005", "TRANS-001"]
source_anchors: ["@grant", "@run-at", "syncFlarumSession", "siteAllowsBodyTranslation"]
since: 0.1.13
version: 0.1.14
status: current
last_verified: 2026-07-27
screenshots: ["/screenshots/19-privacy-request-flow.png"]
---

# 隐私、权限与边界

## 权限用途

| 声明 | 用途 |
| --- | --- |
| `GM_getValue` / `GM_setValue` | 读写本地设置与缓存索引 |
| `GM_xmlhttpRequest` | 请求言灵工坊 API 与站点资源 |
| `GM_getResourceText` | 读取 `@resource` 声明的样式表 |
| `unsafeWindow` | 访问宿主页面前端运行态，用于识别站点与读取启动载荷 |
| `@run-at document-start` | 在页面脚本前注入，避免样式闪烁与重复渲染 |

## 请求去向

![请求数据面板中的请求去向、优先级与限流状态](/screenshots/19-privacy-request-flow.png)

`@connect` 只声明三个域名：`aicue.top`、`www.aicue.top`、`flarum.aicue.top`。业务请求全部指向言灵工坊自身。

除此之外的网络访问只有两类静态资源，都来自 jsDelivr：`@require` 的 KaTeX、pinyin-pro、hls.js，以及 `@resource` 声明的样式表（带 `sha256` 完整性校验）。这些是纯静态文件请求，不携带站点数据。

脚本没有任何分析、埋点或崩溃上报域名。

## 正文翻译

上游脚本支持调用 Google / Microsoft 翻译接口翻译非中文正文。本项目把站点语言标记为 `zh-CN`，翻译能力整体关闭：入口按钮不渲染，控制器初始化即退出，不会有任何文本离开言灵工坊域名。

## 会话处理

写操作需要的用户 id 与 CSRF token 从宿主页面的启动载荷中读取，仅保存在页面内存里，随标签页关闭消失。脚本不读取、不保存、不传输密码。token 失效时写操作会提示会话未就绪，刷新页面重新获取。

## 本地数据

设置存在脚本管理器存储中，响应缓存存在 IndexedDB 中，都只在当前浏览器。没有跨设备同步，也没有服务端副本。清理方式见[数据、配置与缓存](/manage/data-and-cache)。

## 明确不做的事

- 不代持或转发账号凭据。
- 不把帖子内容、私信或设置发送到第三方服务。
- 不修改原站的权限判断结果；界面上看不到的内容，阅读器也拿不到。
- 不绕过站点限流；遇到 429 时退避重试。

## 监控数据的口径

资源监控和请求数据都只在当前页面内存中保留（分别为最近 10 分钟和 15 分钟），不写盘、不上传。请求日志记录方法、路径、状态与耗时，不记录查询参数、请求正文、Cookie 或响应内容。
