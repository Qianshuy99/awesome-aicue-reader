---
title: 数据管理
description: 导出与导入阅读器设置，查看并按类型清理当前浏览器中的本地缓存。
feature_ids: ["DATA-001", "DATA-002"]
source_anchors: ["readerConfigExportPayload", "ldp-config-export", "CACHE_TYPES", "ldp-cache-clear"]
since: 0.1.13
version: 0.1.16
status: current
last_verified: 2026-07-27
screenshots: ["/screenshots/16-data-management.png", "/screenshots/18-cache-cleanup.png"]
---

# 数据管理

## 导出设置

![数据管理面板](/screenshots/16-data-management.png)

导出会把当前所有阅读器设置写成一个 JSON 文件并下载到本地。文件内容是偏好项，不含账号凭据、私信内容或帖子正文。

用途：换浏览器、重装脚本、或在调整性能参数前留一份可回退的基线。

## 导入设置

导入接受此前导出的 JSON 文件。导入会覆盖当前设置，因此建议先导出一份再导入。文件格式不符时导入中止，原设置保持不变。

跨版本导入时，未识别的字段会被忽略，缺失的字段回落到默认值。

## 恢复默认

重置会把所有设置恢复到默认值。这个操作不可撤销，执行前建议先导出。重置只影响设置，不清理缓存。

## 清理缓存

![按类型清理缓存](/screenshots/18-cache-cleanup.png)

缓存按类型列出，每类显示占用体积。勾选需要清理的类型后执行清理，未勾选的类型不受影响。

清理只作用于当前浏览器中的阅读器数据。原站的帖子、私信、收藏、点赞记录都不会受影响，清理后重新打开帖子会重新取数。

常见场景：

- 内容显示成旧版本：清理响应缓存。
- 头像或用户卡片信息过期：清理用户相关缓存。
- 占用体积异常增长：全选清理一次，观察是否复现。

详见[数据、配置与缓存](/manage/data-and-cache)。
