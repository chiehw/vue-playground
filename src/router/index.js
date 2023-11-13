import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/reactive',
        name: 'reactive',
        component: () => import('@/views/Reactive.vue')
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes

})

export default router