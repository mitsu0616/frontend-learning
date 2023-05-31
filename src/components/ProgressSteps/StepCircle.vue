<script setup>
const props = defineProps({
  number: Number,
  active: Boolean,
});

</script>

<template>
  <div class="circle" :class="{ active: props.active }">{{ props.number }}</div>
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
