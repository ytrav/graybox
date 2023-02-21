// router import
import { createRouter, createWebHistory } from "vue-router";

// component imports
import AppMenu from '../components/AppMenu.vue'
import GamePos1 from '../components/positions/GamePos1.vue'
import GamePos2 from '../components/positions/GamePos2.vue'
import GamePos3 from '../components/positions/GamePos3.vue'
import GamePos4 from '../components/positions/GamePos4.vue'

// router declaration
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AppMenu },
        { path: '/game/pos1', component: GamePos1 },
        { path: '/game/pos2', component: GamePos2 },
        { path: '/game/pos3', component: GamePos3 },
        { path: '/game/pos4', component: GamePos4 },
    ]
})

// router export
export default router