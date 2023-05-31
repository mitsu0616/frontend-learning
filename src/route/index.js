import { createRouter, createWebHistory } from "vue-router";
import Top from "../views/Top.vue";
import ExpandingCards from "../views/ExpandingCards.vue";
import ProgressSteps from "../views/ProgressSteps.vue";
import RotatingNavAnimation from "../views/RotatingNavAnimation.vue";

const routes = [
  { path: "/", component: Top },
  { path: "/expanding-cards", component: ExpandingCards },
  { path: "/progress-steps", component: ProgressSteps },
  { path: "/rotating-nav-animation", component: RotatingNavAnimation },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
