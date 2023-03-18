import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorPage from '../views/ErrorPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/counter",
      name: "counter",
      component: () => import("../views/CounterView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "ErrorPage",
      component: ErrorPage,
    },
  ],
});

export default router
