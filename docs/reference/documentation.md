---
title: 文档维护规范
description: 手册的元数据要求、校验规则，以及截图补齐后需要恢复的强制项。
feature_ids: ["REF-002"]
source_anchors: ["READER_VERSION", "@version"]
since: 0.1.13
version: 0.1.13
status: current
last_verified: 2026-07-27
screenshots: ["/screenshots/14-settings-overview.png"]
---

# 文档维护规范

手册以 [work/main.js](https://github.com/Qianshuy99/awesome-aicue-reader/blob/main/work/main.js) 为唯一事实源。改了脚本行为就要同步改文档，`npm run docs:check` 负责挡住不一致。

## 命令

| 命令 | 用途 |
| --- | --- |
| `npm run docs:dev` | 本地预览，监听 127.0.0.1 |
| `npm run docs:check` | 校验元数据、锚点与功能映射 |
| `npm run docs:build` | 构建静态站点 |
| `npm run docs:verify` | 先校验再构建，提交前跑这个 |

![设置中心总览，手册按面板结构组织章节](/screenshots/14-settings-overview.png)

## 每页必须声明的元数据

`title`、`description`、`feature_ids`、`source_anchors`、`since`、`version`、`status`、`last_verified`、`screenshots` 九个字段缺一不可。其中：

- `version` 必须等于脚本 `@version`，当前是 `0.1.13`。改版本号时所有页面和功能目录都要跟着改，否则校验全红。
- `source_anchors` 里的每个字符串必须能在源码中找到。这是防止文档描述已删除功能的主要手段。
- `last_verified` 用 `YYYY-MM-DD`，表示这页最后一次对着源码或实际界面核对的日期。
- `status` 只能是 `current`、`experimental`、`deprecated`。

功能目录 `docs/public/feature-catalog.json` 的每条记录还要求 `docs` 至少映射一篇手册，且被映射的页面必须在 `feature_ids` 里反向声明同一个 ID。双向不一致会报错。

## 禁止 Emoji

页面、VitePress 配置、主题文件和功能目录都不允许出现 Emoji，校验会拦。需要图标时用带 `aria-hidden="true"` 的 Lucide SVG，许可信息见 `docs/public/third-party-licenses/lucide.txt`。

## 截图规则当前是暂缓状态

上游校验强制每页至少一张正文配图、指南页按章节数配图、图片必须紧跟 `<p class="image-caption">` 说明。这些规则在本仓库仍然写在 [scripts/validate-docs.mjs](https://github.com/Qianshuy99/awesome-aicue-reader/blob/main/scripts/validate-docs.mjs) 里，但用 `hasScreenshotAssets` 开关暂时旁路了，因为上游 39 张截图全部拍自 LINUX DO 的 Discourse 界面，放进言灵工坊的手册会误导读者。

补齐流程：在 aicue.top 实拍截图，放入仓库根目录的 `assets/screenshots/`，在页面 `screenshots` 数组和功能目录里登记，正文用图片语法引用（`![描述]` 紧接 `(/screenshots/文件名.png)`）并在下一行写图注。`assets/screenshots/` 目录一旦存在，四条强制规则自动恢复，无需改代码。

已登记的图片引用现在就会校验存在性，所以不要提前写入还没拍的文件名。

## 与上游文档的关系

本手册从 [sunbigfly/awesome-linuxdo-reader](https://github.com/sunbigfly/awesome-linuxdo-reader) 的 40 页手册裁剪而来。上游围绕多站点 Discourse 适配组织的内容（内置社区列表、自定义站点校验、正文翻译、插件能力降级）在这里不成立，已删除而非改写。目前 17 页覆盖安装、阅读、互动、设置、维护与参考，细粒度的单面板设置说明尚未补齐。
