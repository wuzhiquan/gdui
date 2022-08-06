import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store';
import GdUI from "../packages";
import "./styles/index.less";
import DemoBlock from './components/DemoBlock';

Vue.use(GdUI);
Vue.component('demo-block', DemoBlock);

Vue.config.productionTip = false;

window.$vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
