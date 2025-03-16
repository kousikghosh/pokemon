import { createApp } from "vue";
import { provideStoreToApp } from "@reduxjs/vue-redux";
import { store } from "./store";
import router from "./router";

import App from "./App.vue";

const app = createApp(App);
provideStoreToApp(app, { store });
app.use(router).mount("#app");
