<script setup>
import Panel from "../components/ExpandingCards/Panel.vue";
import { imgList } from "../components/ExpandingCards/imgList";
</script>

<template>
  <div class="page">
    <div class="container">
      <Panel v-for="img in imgList" :title="img.title" :imagePath="img.path" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* vh: ウィンドウサイズの高基準 */
  overflow: hidden; /* overflow: 要素がはみ出た時の動作、hidden: はみ出た要素は非表示 */
  margin: 0;
}
.container {
  display: flex;
  width: 90vw;
}

@media (max-width: 480px) {
  .container {
    width: 100vw;
  }
}
</style>
