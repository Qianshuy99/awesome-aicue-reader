import { defineConfig } from 'vitepress'

const repository = 'awesome-aicue-reader'
const base = process.env.DOCS_BASE || `/${repository}/`
const repositoryUrl = `https://github.com/Qianshuy99/${repository}`

export default defineConfig({
  lang: 'zh-CN',
  title: 'Awesome AICue Reader',
  titleTemplate: ':title · 用户手册',
  description: 'Awesome AICue Reader 用户手册：言灵工坊（Flarum）单站点适配的增强阅读器，覆盖长帖阅读、楼层上下文、原站互动与设置说明。',
  base,
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['README.md'],
  head: [
    ['meta', { name: 'theme-color', content: '#315f47' }],
  ],
  markdown: {
    headers: {
      level: [2, 3],
    },
  },
  themeConfig: {
    siteTitle: 'Awesome AICue Reader',
    nav: [
      { text: '开始使用', link: '/getting-started/installation' },
      { text: '使用指南', link: '/guide/reading-modes' },
      { text: '设置', link: '/settings/overview' },
      { text: '维护与排障', link: '/manage/data-and-cache' },
      {
        text: 'v0.1.13',
        items: [
          { text: '兼容性', link: '/reference/compatibility' },
          { text: '文档维护规范', link: '/reference/documentation' },
        ],
      },
    ],
    sidebar: {
      '/getting-started/': [
        {
          text: '开始使用',
          items: [
            { text: '安装与更新', link: '/getting-started/installation' },
            { text: '五分钟上手', link: '/getting-started/quick-start' },
          ],
        },
      ],
      '/guide/': [
        {
          text: '阅读',
          items: [
            { text: '阅读模式与工作区', link: '/guide/reading-modes' },
            { text: '楼层、时间轴与历史', link: '/guide/navigation' },
            { text: '图片、媒体与富内容', link: '/guide/content-and-media' },
          ],
        },
        {
          text: '互动',
          items: [
            { text: '回复与社区操作', link: '/guide/community-actions' },
            { text: '消息、历史与收藏', link: '/guide/messages-and-collections' },
          ],
        },
      ],
      '/settings/': [
        {
          text: '设置中心',
          items: [
            { text: '设置中心总览', link: '/settings/overview' },
            { text: '数据管理', link: '/settings/data-management' },
            { text: '其他功能', link: '/settings/other' },
          ],
        },
      ],
      '/manage/': [
        {
          text: '维护与排障',
          items: [
            { text: '数据、配置与缓存', link: '/manage/data-and-cache' },
            { text: '隐私、权限与边界', link: '/manage/privacy-and-permissions' },
            { text: '故障排查', link: '/manage/troubleshooting' },
          ],
        },
      ],
      '/reference/': [
        {
          text: '参考',
          items: [
            { text: '兼容性', link: '/reference/compatibility' },
            { text: '功能覆盖目录', link: '/reference/feature-catalog' },
            { text: '文档维护规范', link: '/reference/documentation' },
          ],
        },
      ],
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除查询',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    outline: {
      level: [2, 3],
      label: '本页目录',
    },
    socialLinks: [
      { icon: 'github', link: repositoryUrl },
    ],
    editLink: {
      pattern: `${repositoryUrl}/edit/main/docs/:path`,
      text: '在 GitHub 上编辑此页',
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
      },
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到明亮模式',
    darkModeSwitchTitle: '切换到暗色模式',
    footer: {
      message: '非言灵工坊官方项目。站点数据与互动结果以原站为准。',
      copyright: 'Released under the MIT License.',
    },
  },
})
