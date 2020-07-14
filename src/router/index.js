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
        name: '/',
        meta: { title: 'Home', icon: 'home', affix: true }
      },
      // {
      //   path: 'article/info/:id',
      //   component: () => import('@/views/article/info'),
      //   name: 'articleInfo',
      //   meta: { title: 'info', icon: 'info', affix: true }
      // }
    ]
  },
  {
    path: '/article/info',
    component: Layout,
    redirect: '/article/info',
    children: [
      {
        path: '/article/info/:id',
        component: () => import('@/views/article/info'),
        name: 'articleInfo',
        meta: { title: 'info', icon: 'info', affix: true }
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
