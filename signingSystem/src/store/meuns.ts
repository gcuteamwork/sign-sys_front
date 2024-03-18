import { defineStore } from "pinia";
import { ref } from "vue";

const useUserStore = defineStore("app", () => {
    const access_token = ref<string | null>(null);
    const permission = ref<string | null>(null);
    const pathName = ref("");

    const getUserInfo = async () => {
        // 这里可以添加获取用户信息的逻辑，例如从 API 获取数据
        // 以下是一个示例
        const response = await fetch("/api/user", {
            headers: {
                "Authorization": `Bearer ${access_token.value}`
            }
        });
        const data = await response.json();
        permission.value = data.permission;
        return { module: data.module }; // 返回一个包含 module 属性的对象
    };

    const resetState = () => {
        // 这里可以添加重置状态的逻辑
        access_token.value = null;
        permission.value = null;
        pathName.value = "";
    };

    return { access_token, permission, pathName, getUserInfo, resetState };
});

export default useUserStore;