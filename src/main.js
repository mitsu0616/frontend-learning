import { createApp } from "vue";
import { createPinia } from "pinia";

import "./reset.css";
import App from "./App.vue";
import router from "./route";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.component("fa", FontAwesomeIcon);
app.mount("#app");
