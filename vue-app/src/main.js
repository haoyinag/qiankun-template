/** @format */

import Vue from "vue";

import {Breadcrumb, Button, Icon } from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";

import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(Icon);
Vue.use(Button);
Vue.use(Breadcrumb);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
