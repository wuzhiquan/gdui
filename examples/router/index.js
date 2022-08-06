import Vue from "vue";
import VueRouter from "vue-router";
import hljs from 'highlight.js';
import Component from "../views/component";
import componentUI from './componentUI';
import pageUI from './pageUI';
import viewUI from './viewUI';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: "*",
    redirect: "/"
  }, {
    path: "/",
    component: Component,
    redirect: "/home",
    meta: { title: "" },
    children: [
      {
        path: "home",
        component: () => import('../views/home.md'),
        meta: { title: '首页', icon: 'el-icon-s-home', affix: true },
        name: 'Home',
      },
    ]
  }, {
    path: "/componentUI",
    component: Component,
    redirect: "/componentUI/GdHeader",
    meta: { title: "组件UI规范", icon: "el-icon-menu" },
    children: componentUI
  }, {
    path: "/pageUI",
    component: Component,
    redirect: "/pageUI/GdHeader",
    meta: { title: "页面UI规范", icon: "el-icon-document" },
    children: pageUI,
  }, {
    path: "/viewUI",
    component: Component,
    redirect: "/viewUI/GdHeader",
    meta: { title: "视觉UI规范", icon: "el-icon-copy-document" },
    children: viewUI,
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

router.beforeEach((to, from, next) => {
  if(!to.meta.hasTagsView) {
    sessionStorage.removeItem('tagsViewList');
  }
  next();
});

router.afterEach(() => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    // 路由切换有个transform过渡效果0.5s，这里延迟0.6s执行，待优化
    setTimeout(() => {
      const blocks = document.querySelectorAll('pre code:not(.hljs)');
      Array.prototype.forEach.call(blocks, hljs.highlightBlock);
    }, 600);
  });
});

export default router;
