import { createRouter, createWebHistory } from 'vue-router';

import Index from "@/components/Index.vue";
import NF404 from "@/components/404.vue";

const routes = [
    {
        path: '/:p',
        component: Index,
    },
    {  path: '/:pathMatch(.*)*', name: '404', component: NF404},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router