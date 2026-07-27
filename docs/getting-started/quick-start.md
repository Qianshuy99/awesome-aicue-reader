---
title: 五分钟上手
description: 从讨论列表打开阅读器，切换显示形态，浏览楼层与上下文，并完成第一次回复。
feature_ids: ["CORE-002", "CORE-003", "READ-002", "ACTION-001"]
source_anchors: ["ldp-native-reader-trigger", "LIST_READER_MODES", "ldp-topic-timeline-track", "ldp-replybtn"]
since: 0.1.13
version: 0.1.13
status: current
last_verified: 2026-07-27
screenshots: ["/screenshots/03-quick-start-workspace.png", "/screenshots/04-quick-start-reply.png"]
---

# 五分钟上手

## 1. 打开阅读器

在言灵工坊的讨论列表页，每个讨论条目上会出现阅读器入口。点击入口即在当前页面打开阅读工作区，宿主列表保持原样，不会跳转页面。

![首次打开的阅读工作区](/screenshots/03-quick-start-workspace.png)

<p class="image-caption">工作区在当前页面内打开，不离开宿主列表。</p>

直接访问某个讨论详情页（`/d/:id`）时，阅读器同样可用，此时只提供浮窗和全屏两种形态。

## 2. 选择显示形态

列表页支持四种形态：

- 浮窗：可拖动、可缩放，位置与尺寸会保存。
- 全屏：占满视口，适合长帖连续阅读。
- 左嵌入 / 右嵌入：与宿主列表左右分栏，一边挑帖一边读。

工作区顶部可随时切换。详见[阅读模式与工作区](/guide/reading-modes)。

## 3. 在长帖中定位

- 右侧时间轴显示当前楼层位置，拖动或点击可跳到任意楼层。
- 只看楼主按钮会筛出楼主内容，扫描进度在按钮旁提示。
- 楼层间的引用关系以楼中楼形式展开，可查看被回复的原楼层。

言灵工坊使用的 Flarum 没有回复目标字段，楼层关系由正文中的提及推断，因此少量楼层可能无法归入楼中楼。详见[楼层、时间轴与历史](/guide/navigation)。

## 4. 完成一次互动

楼层操作条上的回复、点赞、收藏都直接调用言灵工坊接口，结果与在原站操作一致。

回复框由阅读器发起、由原站提交。由于楼层关系依赖提及，回复某个楼层时保留自动插入的提及标记，回复才能被正确归到该楼层之下。详见[回复与社区操作](/guide/community-actions)。

![在阅读器中回复楼层](/screenshots/04-quick-start-reply.png)

<p class="image-caption">回复框保留自动插入的提及标记，回复才能归入楼中楼。</p>

## 5. 按需调整

设置入口在工作区顶部。13 个面板中最常用的三个：

- 图片设置：控制灯箱行为与帖内图片比例。
- 布局设置：调整五区比例。
- 性能设置：控制预取量与渲染窗口，长帖卡顿时先看这里。

设置随改随存，保存在当前浏览器。详见[设置中心总览](/settings/overview)。
