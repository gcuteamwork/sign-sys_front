import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/main',
        component: () => import('../layouts/Default.vue'),
        children:[
            {
                path: '/main',
                name:'main',
                component: ()=>import('../views/Main.vue')
            },
            {
                path: '/qrcode',
                name:'qrcode',
                component: ()=>import('../views/SignQRCode.vue')
            }
        ],
    }
]


const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    //process.env.BASE_URL是指从从环境进程中根据运行环境获取的api的base_url
    routes,
})

export default router