import { createWebHashHistory, createRouter, type RouteRecordRaw } from 'vue-router'

import Login from '../layout/Login/Login.vue'
import HomePage from '../layout/Home/HomePage.vue'

const routes: RouteRecordRaw[] = [
    { path: '/login', component: Login, name: "login" },
    {
        path: '/',
        component: HomePage,
        name: "home",
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})