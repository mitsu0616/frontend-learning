<script setup>
import StepBar from "../components/ProgressSteps/StepBar.vue";
import Button from "../components/ProgressSteps/Button.vue";

import { useProgressStepsStore } from "../store/progressSteps";

const store = useProgressStepsStore();

const prevOnClick = () => {
  store.subStepNumber();
};

const nextOnClick = () => {
  store.addStepNumber();
};
</script>

<template>
  <h1>Progress Steps</h1>
  <div class="page">
    <div class="container">
      <StepBar />
      <Button name="Prev" @click="prevOnClick" />
      <Button name="Next" @click="nextOnClick" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  box-sizing: border-box;
  // background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;

  .container {
    text-align: center;
  }
}
</style>
