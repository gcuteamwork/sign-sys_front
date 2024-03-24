import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { setBeforeEach } from "./permission";

export const staticRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/SignInInitiation",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
    meta:{
      title:"登录"
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register.vue"),
    meta:{
      title:"注册"
    }
  },
  // {
  //   path: "/SignInInitiation",
  //   name: "SignInInitiation",
  //   component: () => import("../views/admin/SignInInitiation.vue"),
  //   meta:{
  //     title:"签到发起"
  //   }
  // },
  {
    path: "/adminInfo",
    name: "adminInfo",
    component: () => import("../views/admin/AdminInfo.vue"),
    meta:{
      title:"管理员主页"
    }
  },
  // {
  //   path: "/CheckIn",
  //   name: "CheckIn",
  //   component: () => import("../views/user/CheckIn.vue"),
  //   meta:{
  //     title:"签到"
  //   }
  // },
  {
    path: "/codesign",
    name: "codesign",
    component: () => import("../views/user/CodeSign.vue"),
    meta:{
      title:"二维码签到"
    }
  },
  {
    path:"/redirect",
    name:"redirect",  
    component: () => import("../views/admin/SignInInitiation.vue"),
  }
];


// dynamicRouter
export const dynamicRoutes  = [
  {
    path: "/CheckIn",
    name: "CheckIn",
    component: () => import("../views/user/CheckIn.vue"),
    hidden: true,
    meta:{
      title:"CheckIn"
    }
  },
  {
    path: "/SignInInitiation",
    name: "SignInInitiation",
    component: () => import("../views/admin/SignInInitiation.vue"),
    meta:{
      title:"SignInInitiation"
    }
  },

]


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: staticRoutes,
});

setBeforeEach(router);

export default router;
