import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import AddItems from "../views/AddItems.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/",
    name: "Add Items",
    component: AddItems,
  },
  // {
  //   path: "/additems",
  //   name: "Add Items",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AddItems.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
