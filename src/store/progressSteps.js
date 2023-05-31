import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProgressStepsStore = defineStore("progressSteps", () => {
  const stepNumber = ref(1);

  const addStepNumber = () => {
    if (stepNumber.value < 4) {
      stepNumber++;
    }
  };

  const subStepNumber = () => {
    if (stepNumber.value > 1) {
      stepNumber--;
    }
  };

  return { stepNumber, addStepNumber, subStepNumber };
});
