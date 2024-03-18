import { defineStore } from 'pinia'
import { staticRoutes, dynamicRoutes } from '../router'
import { RouteRecordRaw } from  "vue-router";

interface RouteMeta {
    title?: string;
}

interface Route {
    meta?: RouteMeta;
    children?: Route[];
}

function hasPermission(module: string[], route: Route): boolean {
    const title = route.meta?.title
    return title ? module.includes(title) : true
}

export function filterDynamicRoutes(routes: Route[], module: string[]): Route[] {
    const res: Route[] = []
    routes.forEach(route => {
        const tmp = { ...route }
        if (hasPermission(module, tmp)) {
            if (tmp.children) {
                tmp.children = filterDynamicRoutes(tmp.children, module)
            }
            res.push(tmp)
        }
    })
    return res
}

export const usePermissionStore = defineStore('permission', {
    state: () => ({
        isGetUserInfo: false, // get userInfo
        routes: [] as RouteRecordRaw[], //将过滤后的动态路由和静态路由集合
        dynamicRoutes: [] as RouteRecordRaw[], //过滤后的动态路由
    }),

    actions: {
        M_ROUTES(routes: RouteRecordRaw[]) {
            this.$patch(state => {
                state.dynamicRoutes = routes
                state.routes = staticRoutes.concat(routes)
            })
        },
        M_IS_GET_USER_INFO(data: boolean) {
            this.isGetUserInfo = data
        },
        generateRoutes(module: string[]) {
            return filterDynamicRoutes(dynamicRoutes, module)
        },
    },
})