import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProgressStepsStore = defineStore("progressSteps", () => {
  const steps = 4; // step数
  const stepNumber = ref(1); // 現在のstep

  // Buttonのactive判定
  // true = disabled
  const checkDisable = computed(() => {
    return (name) => {
      let result = false;
      if (
        (name === "Prev" && stepNumber.value === 1) ||
        (name === "Next" && stepNumber.value === steps)
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

  // Barの進捗設定
  const setBarWidth = computed(() => {
    return { width: ((stepNumber.value- 1) / (steps-1)) * 100 + "%" };
  });

  // stepを進める
  const addStepNumber = () => {
    if (stepNumber.value < steps) {
      stepNumber.value++;
    }
  };

  // stepを戻す
  const subStepNumber = () => {
    if (stepNumber.value > 1) {
      stepNumber.value--;
    }
  };

  return {
    steps,
    stepNumber,
    checkDisable,
    checkActive,
    setBarWidth,
    addStepNumber,
    subStepNumber,
  };
});
