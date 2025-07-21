import { defineConfig } from "vitepress"
import timeline from "vitepress-markdown-timeline"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rubyc's Blog",
  description: "苑畅的博客 采购 易经 真理",
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "采购", link: "/采购" },
      { text: "易经", link: "/易经" },
      { text: "真理", link: "/真理" },
      { text: "网站样式", link: "/网站样式" },
      { text: "我的导航", link: "/nav" },
      { text: "工具", link: "/工具" },
      { text: "关于", link: "/关于" },
    ],

    sidebar: [
      // {
      //   text: "Examples",
      //   items: [
      //     { text: "Markdown Examples", link: "/markdown-examples" },
      //     { text: "Runtime API Examples", link: "/api-examples" },
      //   ],
      // },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright:
        'Copyright © 2025-present Rubyc 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">皖ICP备16003804号</a>',
    },

    socialLinks: [
      // { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    //手机端深浅模式文字修改
    darkModeSwitchLabel: "深浅模式",
    //侧边栏文字更改(移动端)
    sidebarMenuLabel: "目录",
    //返回顶部文字修改
    returnToTopLabel: "返回顶部",
    //编辑本页
    editLink: {
      pattern: "https://github.com/rubyyc/rubyc-blog/blob/main/docs/:path", // 改成自己的仓库
      text: "在GitHub编辑本页",
    },
    //自定义上下页名
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  },

  markdown: {
    //行号显示
    lineNumbers: true,

    //时间线
    config: (md) => {
      md.use(timeline)
    },
  },
  // 站点地图
  sitemap: {
    hostname: "https://www.rubyc.cn",
  },
})
