<script setup>
import { ref, onMounted } from "vue";
import { useProgressStepsStore } from "../../store/progressSteps";

const props = defineProps({
  number: Number,
});

const store = useProgressStepsStore();

const active = ref(false);

// 初回表示時にactiveを更新
onMounted(() => {
  if (store.stepNumber >= props.number) {
    active.value = true;
  }
});
</script>

<template>
  <div class="circle" :class="{ active }">{{ props.number }}</div>
</template>

<style lang="scss" scoped>
$line-border-fill: #3498db;
$line-border-empty: #e0e0e0;
.circle {
  background-color: #fff;
  color: #999;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid $line-border-empty;
  transition: 0.4s ease;

  &.active {
    border-color: $line-border-fill;
  }
}
</style>
