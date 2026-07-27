---
title: 功能覆盖目录
description: 33 项功能的分类、源码锚点与对应文档，由 docs/public/feature-catalog.json 生成校验。
feature_ids: ["SET-001", "REF-002"]
source_anchors: ["SETTINGS_PANEL_META", "READER_VERSION"]
since: 0.1.13
version: 0.1.13
status: current
last_verified: 2026-07-27
screenshots: ["/screenshots/22-feature-catalog.png"]
---

# 功能覆盖目录

完整数据在 [feature-catalog.json](/feature-catalog.json)，每条记录包含功能 ID、分类、源码锚点、起始版本、验证日期和对应文档。`npm run docs:check` 会校验锚点在 [work/main.js](https://github.com/Qianshuy99/awesome-aicue-reader/blob/main/work/main.js) 中真实存在，以及功能与文档的双向映射一致。

当前收录 33 项功能，分 10 个分类。

![关于面板显示当前运行的脚本版本](/screenshots/22-feature-catalog.png)

## 分类构成

| 分类 | 功能 ID |
| --- | --- |
| 站点与启动 | CORE-001 |
| 阅读 | CORE-002、CORE-003、CORE-004、READ-001、READ-002、READ-003、READ-004、READ-005、READ-006 |
| 上下文 | CORE-006 |
| 会话 | CORE-005 |
| 互动 | CORE-007、ACTION-001、ACTION-002、ACTION-003、ACTION-004 |
| 通知与收藏 | NOTIFY-001 |
| 内容与媒体 | MEDIA-001、MEDIA-002、MEDIA-003、MEDIA-004、MEDIA-005 |
| 设置 | SET-001 |
| 性能 | PERF-001、PERF-002、PERF-003 |
| 数据 | DATA-001、DATA-002、DATA-003 |
| 参考 | REF-001、REF-002、TRANS-001 |

## 字段含义

- `source_anchor` 是能在源码中唯一定位该功能的字符串，通常是常量名、函数名或 DOM 类名。锚点失效说明功能被改名或移除，校验会直接失败。
- `since` 记录功能首次进入本移植版的版本号。移植自上游的功能一律记为 `0.1.13`，因为这是移植版的首个版本，上游的历史版本号在这里没有意义。
- `status` 目前全部为 `current`。已关闭的 Discourse 专有能力不进入目录，见[兼容性](/reference/compatibility)。
- `screenshots` 暂为空数组，等实拍图补齐后再登记。

## 与上游目录的差异

上游收录 97 项功能。本版本删掉了多站点适配、内置社区列表、自定义站点校验、正文翻译、Boost、Reactions、Post Voting、关注关系、关联工单等在言灵工坊上不成立或不渲染的条目，其余按 Flarum 实现重新登记。
