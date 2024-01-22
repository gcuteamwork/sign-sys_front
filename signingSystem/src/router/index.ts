import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/adminMain'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/register.vue')
    },
    {
        path: '/adminMain',
        name: 'admin',
        component: () => import('../views/admin/AdminMain.vue')
    },
    {
        path: '/adminInfo',
        name: 'adminInfo',
        component: () => import('../views/admin/AdminInfo.vue')
    },
]


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  //process.env.BASE_URL是指从从环境进程中根据运行环境获取的api的base_url
  routes,
});

export default router;
