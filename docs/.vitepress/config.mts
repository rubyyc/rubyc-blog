import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rubyc's Blog",
  description: "苑畅的博客 采购 易经 真理",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "采购", link: "/采购" },
      { text: "易经", link: "/易经" },
      { text: "真理", link: "/真理" },
      { text: "网站样式", link: "/网站样式" },
      { text: "关于", link: "/关于" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
})
