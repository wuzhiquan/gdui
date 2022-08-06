import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Layout from "./Layout";
import GdHeader from './componentUI/GdHeader'
import GdFooter from './componentUI/GdFooter'
import GdChoose from './componentUI/GdChoose'

const componentUI = [
  GdHeader,
  GdFooter,
  GdChoose,
]

const components = [
  Layout,
  ...componentUI,
];
console.log('components', components)
const install = Vue => {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
  Vue.use(ElementUI);
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export {
  install,
  Layout,
  GdHeader,
  GdFooter,
  GdChoose,
};

export default {
  install,
  ...components,
};
