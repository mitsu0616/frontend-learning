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

  // stepを進める
  const addStepNumber = () => {
    if (stepNumber.value < 4) {
      stepNumber++;
    }
  };

  // stepを戻す
  const subStepNumber = () => {
    if (stepNumber.value > 1) {
      stepNumber--;
    }
  };

  return { stepNumber, checkDisable, addStepNumber, subStepNumber };
});
