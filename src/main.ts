import {createApp} from "vue";
import router from "./router";
import App from "./App.vue";
import {createPinia} from "pinia";
import {MotionPlugin} from "@vueuse/motion";
const app = createApp(App);
const pinia = createPinia();
app.use(router).use(pinia).use(MotionPlugin).mount("#app");

