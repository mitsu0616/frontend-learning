import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useRotatingNavAnimationStore = defineStore(
  "rotatingNavAnimation",
  () => {
    const show = ref(false);

    const changeShow = () => {
      show.value = !(show.value)
    }

    return { show, changeShow };
  }
);
