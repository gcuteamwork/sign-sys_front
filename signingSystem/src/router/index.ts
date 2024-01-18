import { createRouter, createWebHashHistory,RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: "/", 
        redirect: "/adminMain"
    },
    {   
        path: '/adminMain',
        name:'admin',
        component: () => import('../views/AdminMain.vue')
    },
    {
        path: '/adminInfo',
        name:'adminInfo',
        component: ()=>import('../views/AdminInfo.vue')
    },
    {
        path: '/check',
        name:'check',
        component: ()=>import('../views/CheckSign.vue'),
    },
    {
        path: '/addSign',
        name:'add',
        component: ()=>import('../views/AddSign.vue'),
    },
]


const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    //process.env.BASE_URL是指从从环境进程中根据运行环境获取的api的base_url
    routes,
})

export default router