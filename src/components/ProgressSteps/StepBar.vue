<script setup>
import StepCircle from "./StepCircle.vue";
import { useProgressStepsStore } from "../../store/progressSteps";

const store = useProgressStepsStore();
</script>

<template>
  <div class="container">
    <div class="progress" :style="store.setBarWidth"></div>
    <!-- 数値型でpropsを渡すときは":プロパティ名"のようにコロンをつける必要がある -->
    <StepCircle v-for="n in store.steps" :key="n" :number="n" />
  </div>
</template>

<style lang="scss" scoped>
$line-border-fill: #3498db;
$line-border-empty: #e0e0e0;
.container {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;

  &::before {
    content: "";
    background-color: $line-border-empty;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
    z-index: -1;
  }

  .progress {
    background-color: $line-border-fill;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 0%;
    z-index: -1;
    transition: 0.4s ease;
  }
}
</style>
