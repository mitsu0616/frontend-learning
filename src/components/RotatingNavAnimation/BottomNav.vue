<script setup>
import { useRotatingNavAnimationStore } from "../../store/rotatingNavAnimation";

const store = useRotatingNavAnimationStore();
</script>

<template>
  <nav :class="{show: store.show}">
    <ul>
      <li><i class="home"></i><a href="#"> Home</a></li>
      <li><i class="user-alt"></i><a href="#"> About</a></li>
      <li><i class="envelope"></i><a href="#"> Contact</a></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  bottom: 40px;
  left: 0;
  z-index: 100;

  &.show {
    transform: translateX(0);
    transition-delay: 0.3s;
  }

  ul {
    list-style-type: none;
    padding-left: 30px;

    li {
      text-transform: uppercase;
      color: #fff;
      margin: 40px 0;
      transform: translateX(-100%);
      transition: transform 0.4s ease-in;

      i {
        font-size: 20px;
        margin-left: 10px;
      }

      + li {
        margin-left: 15px;
        transform: translateX(-150%);

        + li {
          margin-left: 30px;
          transform: translateX(-200%);
        }
      }
    }

    a {
      color: #fafafa;
      text-decoration: none;
      transition: all 0.5s;

      &:hover {
        color: #ff7979;
        font-weight: bold;
      }
    }
  }
}
</style>
