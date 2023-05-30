import { createRouter, createWebHistory } from "vue-router";
import Top from "../views/Top.vue";
import ExpandingCards from "../views/ExpandingCards.vue";

const routes = [
  { path: "/", component: Top },
  { path: "/expanding-cards", component: ExpandingCards },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
