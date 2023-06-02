<script setup>
import HeadNav from "../components/RotatingNavAnimation/HeadNav.vue";
import Content from "../components/RotatingNavAnimation/Content.vue";
import BottomNav from "../components/RotatingNavAnimation/BottomNav.vue";

import { useRotatingNavAnimationStore } from "../store/rotatingNavAnimation";

const store = useRotatingNavAnimationStore();
</script>

<template>
  <div class="page">
    <div class="container" :class="{show: store.show}">
      <HeadNav />
      <Content />
      <BottomNav />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  box-sizing: border-box;
  background-color: #333;
  color: #222;
  overflow-x: hidden;
  margin: 0;
  .container {
    background-color: #fafafa;
    // transform-origin: 変形させる中心点の位置、下記だと「左上」が中心点になる
    transform-origin: top left;
    transition: transform 0.5s linear;
    width: 100vw;
    min-height: 100vh;
    padding: 50px;

    &.show {
      transform: rotate(-20deg);
    }
  }
}
</style>
