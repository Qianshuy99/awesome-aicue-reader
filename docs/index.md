---
layout: home
title: Awesome AICue Reader 用户手册
description: 言灵工坊（aicue.top，Flarum）专用增强阅读器的用户手册，覆盖长帖阅读、楼层上下文、原站互动、设置与排障。
feature_ids: ["CORE-001", "CORE-003", "READ-001", "ACTION-001", "DATA-001"]
source_anchors: ["AICUE_HOSTS", "ldp-native-reader-trigger", "LIST_READER_MODES", "stableStreamMountRange", "ldp-replybtn"]
since: 0.1.13
version: 0.1.13
status: current
last_verified: 2026-07-27
screenshots: []

hero:
  name: Awesome AICue Reader
  text: 用户手册
  tagline: 言灵工坊专用的沉浸式阅读工作区，长帖、楼层关系与原站互动都在一个界面里完成。
  actions:
    - theme: brand
      text: 开始使用
      link: /getting-started/installation
    - theme: alt
      text: 五分钟上手
      link: /getting-started/quick-start
    - theme: alt
      text: 排查问题
      link: /manage/troubleshooting

features:
  - title: 连续阅读
    details: 浮窗、全屏、左右嵌入四种显示形态，长帖按需加载并维持稳定的渲染窗口。
  - title: 上下文导航
    details: 时间轴跳转、只看楼主、浏览历史前后切换，以及基于提及推断的楼中楼关系。
  - title: 原站互动
    details: 回复、点赞、收藏、通知沿用言灵工坊自身接口，结果与原站一致。
  - title: 富内容呈现
    details: 图片灯箱与批量下载、音视频与 HLS、KaTeX 公式、投票和代码块。
  - title: 个性化设置
    details: 13 个设置面板覆盖图片、字体、五区布局、浮窗、外观、动效与性能。
  - title: 有界资源治理
    details: DOM 渲染窗口、分层缓存、请求优先级调度与 429 退避，均可在设置中观察。
---

## 手册覆盖范围

这套手册对应 userscript `0.1.13`，以 [work/main.js](https://github.com/Qianshuy99/awesome-aicue-reader/blob/main/work/main.js) 当前源码为事实源。脚本只服务言灵工坊一个站点：`aicue.top`、`www.aicue.top`、`flarum.aicue.top`。宿主不是这三个域名时，脚本在业务初始化前直接退出。

本项目从上游 [sunbigfly / awesome-linuxdo-reader](https://github.com/sunbigfly/awesome-linuxdo-reader) 移植而来，宿主平台由 Discourse 换成 Flarum。上游手册中关于多站点适配、自定义站点校验和正文翻译的章节不适用于本项目，已从本手册移除。

::: tip 推荐路径
第一次使用按“安装与更新 → 五分钟上手”阅读。遇到加载、图片或限流问题，直接进入[故障排查](/manage/troubleshooting)。
:::

## 先了解四个边界

1. 阅读器不接管账号体系。登录、权限、内容和互动结果都以言灵工坊原站为准。
2. 缓存清理只影响当前浏览器里的阅读器数据，不会删除原站的帖子、私信或收藏。
3. Flarum 没有 Discourse 的 Boost、Reactions、Post Voting、Connect 等插件能力，相关入口一律隐藏，不会出现在界面上。
4. 言灵工坊正文为中文，正文翻译默认关闭，脚本不会向第三方翻译接口发送内容。

## 尚未补齐的部分

本手册目前不含界面截图。上游的 39 张截图都是 LINUX DO 的 Discourse 界面，与言灵工坊不符，需要在 aicue.top 上重新拍摄后补入。详见[文档维护规范](/reference/documentation)。
