<script setup>
import { useProgressStepsStore } from "../../store/progressSteps";

const props = defineProps({
  name: String,
});

const emit = defineEmits(["click"]);

const store = useProgressStepsStore();

</script>

<template>
  <button
    class="btn"
    :disabled="store.checkDisable(props.name)"
    @click="emit('click')"
  >
    {{ props.name }}
  </button>
</template>

<style lang="scss" scoped>
$line-border-fill: #3498db;
$line-border-empty: #e0e0e0;
.btn {
  background-color: $line-border-fill;
  color: #fff;
  border: 0;
  border-radius: 6px;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: 0;
  }

  &:disabled {
    background-color: $line-border-empty;
    cursor: not-allowed;
  }
}
</style>
