---
title: 回复与社区操作
description: 在阅读器内回复、点赞、收藏与复制引用，以及 Flarum 上不存在的 Discourse 插件能力如何自动隐藏。
feature_ids: ["ACTION-001", "ACTION-002", "ACTION-003", "ACTION-004", "CORE-007"]
source_anchors: ["ldp-replybtn", "toggleReaderPostLike", "toggleReaderBookmark", "data-selection-action=\"copy\"", "hasDiscourseCapability"]
since: 0.1.13
version: 0.1.14
status: current
last_verified: 2026-07-27
screenshots: ["/screenshots/04-quick-start-reply.png", "/screenshots/09-nested-context.png"]
---

# 回复与社区操作

所有互动都调用言灵工坊自身接口。阅读器不代持凭据，写操作使用宿主启动载荷中的会话与 CSRF token，结果与在原站操作完全一致。

## 回复

![楼层操作条上的回复框与自动插入的提及标记](/screenshots/04-quick-start-reply.png)

<p class="image-caption">回复框由阅读器发起、由原站提交，开头的提及标记决定这条回复归属哪个楼层。</p>

楼层操作条上的回复按钮打开回复框。回复某个楼层时，阅读器会自动插入对该楼层作者的提及标记。

请保留这个标记。Flarum 没有回复目标字段，本项目的楼层关系是从提及反推的，删掉标记后这条回复不会归入任何楼中楼，别人也就看不到它在回复谁。详见[楼层、时间轴与历史](/guide/navigation)。

## 点赞

点赞按钮切换当前账号对该楼层的赞。状态即时反映在按钮上，失败时回滚并提示。点赞记录可在收藏与互动侧栏中回看。

## 收藏

收藏分两个层级：

- 主题收藏：作用于整帖，出现在首楼操作条。
- 楼层收藏：作用于单个楼层。

两者都同步到原站，可在收藏侧栏按类型筛选。详见[消息、历史与收藏](/guide/messages-and-collections)。

## 选中文本操作

选中正文文本后会浮出操作条，提供复制。复制得到的是纯文本，不带阅读器自身的标记。

## Flarum 上不存在的能力

![楼中楼展开后的楼层上下文](/screenshots/09-nested-context.png)

<p class="image-caption">楼层关系由提及标记推断，展开后可就地查看被回复的楼层。</p>

脚本保留了上游的能力检测层，本站点适配器把以下能力全部标记为关闭：

| 能力 | 上游依赖的 Discourse 插件 | 本项目状态 |
| --- | --- | --- |
| Connect | Discourse Connect | 关闭，入口不渲染 |
| Boost | 第三方 Boost 插件 | 关闭 |
| Reactions | Discourse Reactions | 关闭，只保留点赞 |
| Post Voting | Discourse Post Voting | 关闭 |
| Topic Voting | Discourse Voting | 关闭 |
| Category Experts | Category Experts | 关闭 |
| 关注关系 | Discourse 用户关注 | 关闭 |
| 共享问题状态 | Shared Issue | 关闭 |

这些能力对应的按钮、徽标和设置行都不会出现在界面上。代码中相关分支仍然保留，但在言灵工坊运行时始终走关闭路径。举报、指定负责人等依赖 Discourse 特有接口的操作同样不渲染。
