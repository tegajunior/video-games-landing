import Vue from "vue";
import VueRouter from "vue-router";
import videoRoutes from "@/modules/video/video-routes"

Vue.use(VueRouter);

const routes = [...videoRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  duplicateNavigationPolicy: "reload",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { selector: to.hash };
    else if (savedPosition) return savedPosition;
    else
      return {
        x: 0,
        y: 0,
      };
  },
});

export default router;
