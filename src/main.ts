// vue import
import { createApp } from "vue";
import App from "./App.vue";

// router import
import router from "./router";

// store import
import store from "./store";

// md icons import
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";

// View360 import
import View360 from "@egjs/vue3-view360";
// import "@egjs/vue-view360/css/view360.min.css";

// SCSS imports
import "./style.scss";
import "./components/DialogueBox.scss";
import "./components/positions/GamePos1.scss";
import "./components/positions/GamePos2.scss";
import "./components/positions/GamePos3.scss";
import "./components/positions/GamePos4.scss";

console.log("router", router);

const app = createApp(App);

app.use(mdiVue, {
  icons: mdijs,
});

app.use(router);
app.provide("$store", store);
app.config.globalProperties.$store = store;
app.use(store);
app.use(View360);
app.mount("#app");

// createApp(App)
//     .use(mdiVue, {
//         icons: mdijs
//     })
//     .use(router)
//     .provide("$store", store)

//     .use(store)
//     .use(View360)
//     .mount('#app')
