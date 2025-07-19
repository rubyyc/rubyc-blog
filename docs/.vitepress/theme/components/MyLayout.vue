<!-- .vitepress/theme/MyLayout.vue -->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
// 组件
import bsz from "./bsz.vue";
</script>

<template>
  <DefaultTheme.Layout v-bind="$attrs">

    <!-- layout-bottom插槽 -->
    <template #layout-bottom>
      <bsz />
    </template>

  </DefaultTheme.Layout>
</template>

<style scoped>
</style>