---
title: 兼容性
description: 言灵工坊单站点适配范围、GM 权限、外部依赖，以及 Discourse 专有能力的关闭清单。
feature_ids: ["CORE-001", "CORE-007", "TRANS-001", "REF-001"]
source_anchors: ["AICUE_HOSTS", "SITE_ADAPTER", "hasDiscourseCapability", "siteAllowsBodyTranslation", "@grant", "@run-at"]
since: 0.1.13
version: 0.1.16
status: current
last_verified: 2026-07-27
screenshots: ["/screenshots/21-compatibility.png"]
---

# 兼容性

这个版本只服务言灵工坊一个站点，平台是 Flarum。上游 Awesome LinuxDo Reader 的多站点适配层、内置社区列表和自定义站点校验都已移除。

## 当前支持范围

| 项目 | 当前值 |
| --- | --- |
| 脚本版本 | `0.1.14` |
| 匹配站点 | `aicue.top`、`www.aicue.top`、`flarum.aicue.top` |
| 平台 | Flarum |
| 启动时机 | `document-start` |
| GM 权限 | `GM_getValue`、`GM_setValue`、`GM_xmlhttpRequest`、`GM_getResourceText`、`unsafeWindow` |
| 跨域连接 | 仅 `aicue.top`、`www.aicue.top`、`flarum.aicue.top` |
| 外部依赖 | KaTeX 0.16.22、pinyin-pro 3.18.2、hls.js 1.6.16 |

域名判断在业务初始化之前执行，命中不到就直接退出，不会在其他站点注入任何 DOM 或样式。

![言灵工坊上的楼层操作条，Discourse 插件入口不渲染](/screenshots/21-compatibility.png)

## 已关闭的 Discourse 专有能力

站点适配层把下列能力显式设为关闭，相关按钮和面板不会渲染：

| 能力 | 说明 |
| --- | --- |
| `connect` | Connect 授权相关入口 |
| `boosts` | Boost 气泡与引用计数 |
| `reactions` | 多表情回应，仅保留点赞 |
| `postVoting` | 楼层投票与问答式排序 |
| `topicVoting` | 主题投票 |
| `categoryExperts` | 分类专家标记 |
| `follows` | 关注关系与关注列表 |
| `sharedIssue` | 关联工单状态 |

判定逻辑保留了运行态探测：适配层给出明确开关时以开关为准，否则回退到字段和站点设置检测。这样后续如果言灵工坊装上对应插件，只改适配层开关即可。

## 正文翻译

站点语言标记为 `zh-CN`，正文默认为中文，翻译入口不渲染。上游的第三方翻译接口调用在本版本中不会触发。

## 需要注意的外部依赖

样式表通过 `@resource` 从上游仓库的 jsdelivr 固定 commit 拉取 `main.css`，带 SHA-256 校验。文件内容与上游一致，功能上没有问题，但版本受上游仓库控制。改为本仓库托管需要单独处理，不在文档范围内。

KaTeX、pinyin-pro、hls.js 都从 jsdelivr 按固定版本号加载。脚本管理器首次安装时会一并下载。
