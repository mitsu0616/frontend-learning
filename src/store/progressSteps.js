import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProgressStepsStore = defineStore("progressSteps", () => {
  // 現在のstep
  const stepNumber = ref(1);

  // Buttonのactive判定
  // true = disabled
  const checkDisable = computed(() => {
    return (name) => {
      let result = false;
      if (
        (name === "Prev" && stepNumber.value === 1) ||
        (name === "Next" && stepNumber.value === 4)
      ) {
        result = true;
      }

      return result;
    };
  });

  // Stepのactive判定
  const checkActive = computed(() => {
    return (number) => {
      return number <= stepNumber.value ? true : false;
    };
  });

  // stepを進める
  const addStepNumber = () => {
    if (stepNumber.value < 4) {
      stepNumber.value++;
    }
  };

  // stepを戻す
  const subStepNumber = () => {
    if (stepNumber.value > 1) {
      stepNumber.value--;
    }
  };

  return { stepNumber, checkDisable, checkActive, addStepNumber, subStepNumber };
});
