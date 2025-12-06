// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme"
import bsz from "./components/bsz.vue"

import { inBrowser } from "vitepress"
import busuanzi from "busuanzi.pure.js"
// 只需添加以下一行代码，引入时间线样式
import "vitepress-markdown-timeline/dist/theme/index.css"
// 导入自定义CSS，解决页面晃动问题
import "./style/custom.css"

import { h } from "vue"
import { useData } from "vitepress"

import MNavLinks from "./components/MNavLinks.vue"

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props)
  },
  enhanceApp({ app, router }) {
    // 注册组件
    app.component("MNavLinks", MNavLinks)
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
  },
}
