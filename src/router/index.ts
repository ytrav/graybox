// router import
import { createRouter, createWebHistory } from "vue-router";

// component imports
import AppMenu from "../components/AppMenu.vue";
import AppSettings from "../components/AppSettings.vue";
import GamePos1 from "../components/positions/GamePos1.vue";
import GamePos2 from "../components/positions/GamePos2.vue";
import GamePos3 from "../components/positions/GamePos3.vue";
import GamePos4 from "../components/positions/GamePos4.vue";

interface RouteMeta extends Record<string | number | symbol, unknown> {
  transition?: string;
}

// router declaration
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: AppMenu,
      meta: { transition: "menu" } as RouteMeta,
    },
    {
      path: "/settings",
      component: AppSettings,
      meta: { transition: "settings" } as RouteMeta,
    },
    {
      path: "/pos1",
      component: GamePos1,
      meta: { transition: "fade" } as RouteMeta,
    },
    {
      path: "/pos2",
      component: GamePos2,
      meta: { transition: "fade" } as RouteMeta,
    },
    {
      path: "/pos3",
      component: GamePos3,
      meta: { transition: "fade" } as RouteMeta,
    },
    {
      path: "/pos4",
      component: GamePos4,
      meta: { transition: "fade" } as RouteMeta,
    },
  ],
});

// router export
export default router;
