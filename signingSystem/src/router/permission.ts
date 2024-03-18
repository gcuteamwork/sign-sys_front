import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { usePermissionStore } from '../store/permission.ts'
import  useUserStore  from '../store/meuns.ts';
import { getToken } from '../utils/auth.ts'; 

interface Route {
  path: string;
  meta: {
    title: string;
  };
}

// whiteList 无需登录即可访问的页面
const whiteList: string[] = ["/login", "/register", "/userMain"];

export function setBeforeEach(router: any) {
    router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
        document.title = to.meta.title as string;

        //获取token
        const hasToken: string | null = getToken();
        const useStore = useUserStore();
        const permissionStore = usePermissionStore();

        //如果有token,则直接跳转
        if(hasToken){

            //如果用户存在令牌的情况请求登录页面，就让用户直接跳转到首页，避免存在重复登录的情况
            if(to.path === "/login"){
                next("/");
            }else{
                //如果已经有令牌的用户请求的不是登录页，是其他页面
                //就从store里拿到用户的信息，这里也证明用户不是第一次登录了
                const isGetUserInfo: boolean = permissionStore.isGetUserInfo;

                //如果用户信息存在，就直接跳转
                if(isGetUserInfo){
                    next();
                }else{
                    try{
                        // 如果有令牌，但是没有用户信息，证明用户是第一次登录，需要先设置用户信息
                        let accessRoutes: any[] = []
                        // 获取用户拥有的权限模块数组，从接口获取
                        const {module} = await useStore.getUserInfo();

                        accessRoutes = permissionStore.generateRoutes(module)
                        // 动态添加路由
                        accessRoutes.forEach((route: any) => {
                            router.addRoute(route);
                        });
                        // 把动态路由和静态路由结合后放到store里面，方便首页或者sidebar做菜单的显示隐藏
                        permissionStore.M_ROUTES(accessRoutes)
                        //成功拿到用户信息
                        permissionStore.M_IS_GET_USER_INFO(true)
                        
                        //hack方法 确保addRoutes完成
                        //设置replace: true，这样导航就不会留下历史记录
                        next({ ...to, replace: true })
                    }catch(error){
                        console.log("error: ",error);
                        //如果出错，就删除token，重新登录
                        await useStore.resetState();
                        next(`/login?redirect=${to.path}`);
                    }
                }
            }
        }else{
            //如果没有token
            if(whiteList.indexOf(to.path) !== -1){
                //如果在白名单里，就直接跳转
                next();
            }else{
                //如果不在白名单里，就跳转到登录页
                next(`/login?redirect=${to.path}`);
            }
        }
    })
}