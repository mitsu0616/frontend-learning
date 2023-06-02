<script setup>
import { useRotatingNavAnimationStore } from "../../store/rotatingNavAnimation";

const store = useRotatingNavAnimationStore();

const onClick = () => {
  store.changeShow();
}
</script>

<template>
  <div class="circle-container">
    <div class="circle" :class="{show: store.show}">
      <button class="btn" id="close" @click="onClick">
        <fa icon="times" />
      </button>
      <button class="btn" id="open" @click="onClick">
        <fa icon="bars" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.circle-container {
  position: fixed;
  top: -100px;
  left: -100px;
  .circle {
    background-color: #ff7979;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    position: relative;
    transition: transform 0.5s linear;

    &.show {
      transform: rotate(-70deg);
    }

    .btn {
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: 50%;
      height: 100px;
      background: transparent;
      border: 0;
      font-size: 26px;
      color: #fff;

      &:focus {
        outline: none;
      }

      &#open {
        left: 60%;
      }

      &#close {
        top: 60%;
        transform: rotate(90deg);
        transform-origin: top left;
      }
    }
  }
}
</style>
