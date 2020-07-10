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
    redirect: '/Home',
    children: [
      {
        path: '/Home',
        component: () => import('@/views/Home'),
        name: 'Home',
        meta: { title: 'Home', icon: 'home', affix: true }
      }
    ]
  },
  {
    path: '/About',
    component: Layout,
    redirect: '/About',
    children: [
      {
        path: '/About',
        component: () => import('@/views/About'),
        name: 'About',
        meta: { title: 'About', affix: true }
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
