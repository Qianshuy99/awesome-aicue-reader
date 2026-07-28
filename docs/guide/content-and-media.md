---
title: 图片、媒体与富内容
description: 图片灯箱与批量下载、音视频与 HLS 播放、KaTeX 公式、投票与代码块在阅读器中的呈现方式。
feature_ids: ["MEDIA-001", "MEDIA-002", "MEDIA-003", "MEDIA-004", "MEDIA-005"]
source_anchors: ["ldp-lb-stage", "ldp-lb-batch-dialog", "katex", "Hls", "renderReaderPoll"]
since: 0.1.13
version: 0.1.15
status: current
last_verified: 2026-07-27
screenshots: ["/screenshots/10-lightbox.png", "/screenshots/11-batch-download.png"]
---

# 图片、媒体与富内容

## 图片灯箱

![打开状态的图片灯箱与工具条](/screenshots/10-lightbox.png)

<p class="image-caption">灯箱支持缩放、平移与切换，工具条提供跳到楼层、批量下载与原图。</p>

点击正文图片进入灯箱，可缩放、平移、切换上一张下一张。灯箱工具条还提供：

- 跳到楼层：从图片直接回到它所在的楼层位置。
- 批量下载：打开下载对话框。
- 原图：加载未经压缩的原始文件。

帖内图片的显示比例、是否统一裁切等行为在图片设置中调整，作用范围是整个阅读器。

## 批量下载

![批量下载对话框的范围选择与进度](/screenshots/11-batch-download.png)

<p class="image-caption">选择下载范围后逐张下载，进度条显示已完成数量。</p>

批量下载对话框可选择范围（当前楼层、当前帖等），逐张下载并显示进度条。下载走浏览器自身的下载通道，文件不经过任何第三方服务。图片较多时受站点限流影响，进度可能变慢，对话框会保留已完成的数量。

## 公式

正文中的行内与块级公式由 KaTeX 0.16.22 渲染。KaTeX 通过 `@require` 从 jsDelivr 加载，CDN 不可达时公式会退化为原始文本，不影响其余正文。

## 音视频与 HLS

原生 `<audio>` / `<video>` 直接在正文中播放。`.m3u8` 一类 HLS 源由 hls.js 1.6.16 接管；浏览器原生支持 HLS 时优先使用原生播放。

## 代码块

代码块保留原站的高亮结果，长代码块可横向滚动，不会撑破正文宽度。

## 不在本项目范围内的内容能力

投票不可用。阅读器保留了投票的渲染与提交代码，但它依赖宿主在楼层数据里给出投票结构。言灵工坊没有对应扩展，Flarum 适配层也不产出这份数据，因此投票区块永远不显示，投票接口会被适配层直接拒绝。

上游的正文翻译在本项目中默认关闭：言灵工坊站点语言标记为 `zh-CN`，翻译入口不渲染，脚本不会向 Google 或 Microsoft 翻译接口发送任何文本。详见[兼容性](/reference/compatibility)。
