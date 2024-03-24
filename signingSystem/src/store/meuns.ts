import { defineStore } from "pinia";
import { ref } from "vue";

const useUserStore = defineStore("app", () => {
    const access_token = ref<string | null>(null);
    const permission = ref<string | null>(null);
    const pathName = ref("");

    const getUserInfo = async () => {
      //  JSON 内容就是用户的权限和模块信息
      const response = await fetch("src/api/user.json");
      const data = await response.json();
      console.log('Response:', data); // 打印响应内容
      permission.value = data.permission;
      return { module: data.module };
  };

    const resetState = () => {
        // 重置状态的逻辑
        access_token.value = null;
        permission.value = null;
        pathName.value = "";
    };

    return { access_token, permission, pathName, getUserInfo, resetState };
});

export default useUserStore;