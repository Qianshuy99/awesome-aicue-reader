---
title: 楼层、时间轴与历史
description: 时间轴跳转、只看楼主、浏览历史前后切换，以及基于提及推断的楼中楼关系。
feature_ids: ["READ-002", "READ-003", "READ-004", "READ-005", "CORE-006"]
source_anchors: ["ldp-topic-timeline-track", "ldp-only-op-toggle", "ldp-history-buttons-always-visible", "expandNestedRepliesByDefault", "flarumPageUrl"]
since: 0.1.13
version: 0.1.16
status: current
last_verified: 2026-07-27
screenshots: ["/screenshots/07-timeline.png", "/screenshots/08-op-only.png", "/screenshots/09-nested-context.png"]
---

# 楼层、时间轴与历史

## 时间轴

![工作区右侧的楼层时间轴](/screenshots/07-timeline.png)

<p class="image-caption">拖动滑块或点击刻度跳转楼层，目标楼层未加载时先取数再定位。</p>

时间轴固定在工作区右侧，显示当前楼层号与总楼层数。拖动滑块或点击刻度即可跳转，目标楼层未加载时会先取数再定位，落位后有一次闪烁提示（可在动效设置中关闭）。

## 只看楼主

![只看楼主开启后的正文流与扫描进度](/screenshots/08-op-only.png)

<p class="image-caption">按钮旁显示扫描进度，包含已处理楼层数、找到的楼主内容数与未取回的楼层数。</p>

只看楼主按钮会把正文流筛为楼主发言。Flarum 的接口不提供“按作者过滤楼层”的现成查询，阅读器需要逐段扫描楼层来判定作者，因此按钮旁会显示扫描进度，包含已处理楼层数、找到的楼主内容数，以及未能取回的楼层数。

扫描期间可以继续阅读。若某些楼层因限流或网络原因未取回，进度提示会明确写出缺失数量，不会静默跳过。

## 楼中楼与上下文

![展开后的楼中楼与被回复楼层](/screenshots/09-nested-context.png)

<p class="image-caption">楼中楼就地展开被回复的楼层，关系由正文中的提及标记推断。</p>

楼层之间的引用关系以楼中楼呈现，可就地展开被回复的楼层，不必跳走。是否默认展开在[其他功能](/settings/other)中设置。

这里有一处与上游的实质差异：Discourse 的每个楼层带有回复目标字段，而 Flarum 没有。本项目的楼层关系是从正文中的提及标记反推出来的。后果是：

- 回复时若删掉自动插入的提及标记，该回复不会被归入任何楼中楼。
- 纯文字引用（手动复制粘贴、不含提及标记）无法被识别为回复关系。
- 一条回复提及多人时，会按提及顺序归到第一个可解析的目标下。

## 浏览历史

阅读器记录本次会话内打开过的帖子，可用左右按钮在其间前后切换。按钮默认在靠近工作区边缘时出现，触发区域宽度可调；也可以设为始终显示。两项都在[其他功能](/settings/other)里。

## 链接与路由

阅读器内部沿用上游的 Discourse 路径形式，再映射到 Flarum 路由。`/t/:id` 与 `/t/:slug/:id/:postNumber` 一类路径会转换成 `/d/:id[/:postNumber]`。因此从阅读器复制出的链接是标准的言灵工坊地址，可以直接分享给没装脚本的人。
