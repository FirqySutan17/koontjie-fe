import { createRouter, createWebHistory, VueRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import WorkView from "../views/WorkView.vue";
import WorkDetailView from "../views/WorkDetailView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/portfolio",
    name: "work",
    component: WorkView,
  },
  {
    path: "/portfolio/:slug",
    name: "work-detail",
    component: WorkDetailView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
