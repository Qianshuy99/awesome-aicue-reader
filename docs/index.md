---
layout: home
title: Awesome AICue Reader 用户手册
description: 言灵工坊（aicue.top，Flarum）专用增强阅读器的用户手册，覆盖长帖阅读、楼层上下文、原站互动、设置与排障。
feature_ids: ["CORE-001", "CORE-003", "READ-001", "ACTION-001", "DATA-001"]
source_anchors: ["AICUE_HOSTS", "ldp-native-reader-trigger", "LIST_READER_MODES", "stableStreamMountRange", "ldp-replybtn"]
since: 0.1.13
version: 0.1.14
status: current
last_verified: 2026-07-27
screenshots: ["/screenshots/03-quick-start-workspace.png"]

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
    details: 图片灯箱与批量下载、音视频与 HLS、KaTeX 公式与代码块。
  - title: 个性化设置
    details: 13 个设置面板覆盖图片、字体、五区布局、浮窗、外观、动效与性能。
  - title: 有界资源治理
    details: DOM 渲染窗口、分层缓存、请求优先级调度与 429 退避，均可在设置中观察。
---

## 手册覆盖范围

![阅读器工作区在言灵工坊讨论页中打开](/screenshots/03-quick-start-workspace.png)

<p class="image-caption">阅读工作区在当前页面内打开，宿主列表保持原样。</p>

这套手册对应 userscript `0.1.14`，以 [work/main.js](https://github.com/Qianshuy99/awesome-aicue-reader/blob/main/work/main.js) 当前源码为事实源。脚本只服务言灵工坊一个站点：`aicue.top`、`www.aicue.top`、`flarum.aicue.top`。宿主不是这三个域名时，脚本在业务初始化前直接退出。

本项目从上游 [sunbigfly / awesome-linuxdo-reader](https://github.com/sunbigfly/awesome-linuxdo-reader) 移植而来，宿主平台由 Discourse 换成 Flarum。上游手册中关于多站点适配、自定义站点校验和正文翻译的章节不适用于本项目，已从本手册移除。

::: tip 推荐路径
第一次使用按“安装与更新 → 五分钟上手”阅读。遇到加载、图片或限流问题，直接进入[故障排查](/manage/troubleshooting)。
:::

## 直达入口

| 入口 | 链接 |
| --- | --- |
| 安装脚本 | [awesome-aicue-reader.user.js](https://cdn.jsdelivr.net/gh/Qianshuy99/awesome-aicue-reader@main/dist/awesome-aicue-reader.user.js) |
| 代码仓库 | [github.com/Qianshuy99/awesome-aicue-reader](https://github.com/Qianshuy99/awesome-aicue-reader) |
| 反馈问题 | [GitHub Issues](https://github.com/Qianshuy99/awesome-aicue-reader/issues) |
| 目标站点 | [言灵工坊](https://www.aicue.top/) |

安装链接是脚本管理器可直接识别的 Raw 地址，点开会弹出安装确认。装好后需要刷新一次言灵工坊页面。

## 先了解四个边界

1. 阅读器不接管账号体系。登录、权限、内容和互动结果都以言灵工坊原站为准。
2. 缓存清理只影响当前浏览器里的阅读器数据，不会删除原站的帖子、私信或收藏。
3. Flarum 没有 Discourse 的 Boost、Reactions、Post Voting、Connect 等插件能力，相关入口一律隐藏，不会出现在界面上。
4. 言灵工坊正文为中文，正文翻译默认关闭，脚本不会向第三方翻译接口发送内容。

## 关于配图

手册配图拍自 aicue.top 实际界面，登记在各页 `screenshots` 字段中，由 `npm run docs:check` 校验存在性与登记一致性。上游的 39 张 Discourse 截图未被沿用。细粒度的单面板设置说明仍在补齐中，详见[文档维护规范](/reference/documentation)。
