---
title: 消息、历史与收藏
description: 通知分组、私信入口、浏览历史与收藏列表在阅读器侧栏中的组织方式。
feature_ids: ["NOTIFY-001", "ACTION-003", "READ-004", "CORE-005"]
source_anchors: ["NOTIFICATION_GROUPS", "toggleReaderBookmark", "ldp-history-buttons-always-visible", "syncFlarumSession"]
since: 0.1.13
version: 0.1.15
status: current
last_verified: 2026-07-27
screenshots: ["/screenshots/12-notifications.png", "/screenshots/13-messages.png"]
---

# 消息、历史与收藏

侧栏集中放置与账号相关的列表，打开侧栏不会丢失当前阅读位置。

## 通知分组

![通知侧栏的分组视图](/screenshots/12-notifications.png)

<p class="image-caption">通知按回复、点赞、私信等类型分组，点击直接在阅读器中打开对应楼层。</p>

通知按类型分组展示：

| 分组 | 内容 |
| --- | --- |
| 全部 | 不过滤 |
| 回复 | 提及、被回复、被引用 |
| 点赞 | 收到的赞 |
| 私信 | 私信与私信邀请 |
| 其他 | 编辑、徽章、提醒等剩余类型 |

分组定义沿用上游，其中依赖 Discourse 插件的类型（Boost、关注等）在言灵工坊不会有数据，对应分组为空或不显示。点击通知直接在阅读器中打开对应楼层。

## 私信

![私信会话列表](/screenshots/13-messages.png)

<p class="image-caption">私信列表显示会话与未读状态，清理缓存不影响原站记录。</p>

私信入口列出会话与未读状态，内容与原站一致。阅读器不缓存私信正文明文以外的额外副本，清理缓存不会影响原站的私信记录。

## 浏览历史

历史列表记录本次会话打开过的帖子，配合工作区边缘的左右按钮可快速前后切换。排序方式与按钮显示行为在[其他功能](/settings/other)中调整。

历史只保存在当前浏览器，不上传，也不与其他设备同步。

## 收藏与互动记录

收藏侧栏按主题收藏、楼层收藏分列，并可查看给出过的赞。列表分页加载，滚动到底自动取下一页。

## 账号信息来源

侧栏显示的账号身份来自宿主页面启动载荷里的会话信息（用户 id、用户名、显示名、头像）。未登录或会话尚未就绪时，写操作会提示会话未就绪，此时刷新页面即可。阅读器不读取也不保存密码或长期凭据。
