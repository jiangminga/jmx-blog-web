import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Layout from "@/layout";

const routes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '/',
        component: () => import('@/views/Home'),
        name: '首页',
        meta: { title: '首页', icon: 'home', affix: true }
      }
    ]
  },
  {
    path: '/article',
    component: Layout,
    children: [
      {
        path: 'info',
        component: () => import('@/views/article/info'),
        name: '文章详情',
        meta: { title: '文章详情', icon: 'info', affix: true }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router;
