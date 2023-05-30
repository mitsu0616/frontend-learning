<script setup>
import { onMounted, ref,watch } from "vue";
import { useExpandingCardsStore } from "@/store/expandingCards";

const store = useExpandingCardsStore();

const active = ref(false);

const props = defineProps({
  title: String,
  imagePath: String,
});

// activeの切り替え処理
const checkActive = () => {
  active.value = store.activeImage === props.title ? true : false
}

onMounted(() => {
  checkActive()
})

// store.activeImageの更新を監視
watch(
  () => store.activeImage,
  () => {
    checkActive()
  }
);
</script>

<template>
  <div
    class="panel"
    :class="{ active }"
    :style="`background-image: url(${props.imagePath})`"
    @click="store.changeActiveImage(props.title)"
  >
    <h3>{{ props.title }}</h3>
  </div>
</template>

<style lang="scss" scoped>
.panel {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;
  transition: all 700ms ease-in;

  h3 {
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0px;
    opacity: 0; // 不透明度 0:透明 <--> 1:不透明
  }

  &.active {
    flex: 5;

    h3 {
      opacity: 1;
      transition: opacity 0.3s ease-in 0.4s;
    }
  }
}

@media (max-width: 480px) {
  .panel:nth-of-type(4),  
  .panel:nth-of-type(5) {
    display: none;
  }
}

</style>
