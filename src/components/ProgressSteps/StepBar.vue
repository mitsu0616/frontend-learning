<script setup>
import StepCircle from "./StepCircle.vue"
</script>

<template>
  <div class="container">
    <div class="progress"></div>
    <StepCircle number="1" active="true"/>
    <StepCircle number="2"/>
    <StepCircle number="3"/>
    <StepCircle number="4"/>
  </div>
</template>

<style lang="scss" scoped></style>