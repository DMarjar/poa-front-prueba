import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "login",
  },
  {
    path: "/poa",
    name: "home",
    component: () =>
      import(
        /* webpackChunkName: "poa" */ "@/modules/profile/adapters/layouts/ProfileLayout.vue"
      ),
    children: [
      {
        path: "/profile",
        name: "profile",
        component: () =>
          import(
            /* webpackChunkName: "profile" */ "@/modules/profile/adapters/views/ProfileUser.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
