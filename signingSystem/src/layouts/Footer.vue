<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
let router = useRouter();
const path = ref<string>();
const isActiveSign = ref<boolean>(false);
const isActiveUser = ref<boolean>(false);
//监听当前路由以分别添加class类名
watch(
  () => router,
  (newPath) => {
    path.value = newPath.currentRoute.value.fullPath.substring(1);
    if (path.value === "SignInInitiation") {
      isActiveSign.value = true;
    }
    if (path.value === "adminInfo") {
      isActiveUser.value = true;
    }
  },
  { immediate: true }
  //在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调：
);
//跳转签到发起页面
const toMain = () => {
  router.push({ path: "/SignInInitiation" });
};
//跳转个人页面
const toUser = () => {
  router.push({ path: "/adminInfo" });
};
</script>
<template>
  <div class="footer-bg h-15 border-rd-2 flex justify-around flex-items-center">
    <div class="color-white flex flex-col flex-items-center justify-center h-14 w-14" tabindex="1"
      :class="{ 'icon-bg': isActiveSign }" @click="toMain">
      <div class="w-8">
        <Promotion />
      </div>
      <span class="font-size-2">签到发起</span>
    </div>
    <div class="color-white flex flex-col flex-items-center justify-center h-14 w-14" tabindex="1"
      :class="{ 'icon-bg': isActiveUser }" @click="toUser">
      <div class="w-8">
        <House />
      </div>
      <span class="font-size-2">个人</span>
    </div>
    <!-- <div class="color-white flex flex-col flex-items-center justify-center h-14 w-14" tabindex="1"
      :class="{ 'icon-bg': isActiveUser }" @click="toUser">
      <div class="w-8">
        <House />
      </div>
      <span class="font-size-2">个人</span>
    </div> -->
  </div>
</template>
<style scoped>
.footer-bg {
  background-color: #2967cc;
}

.icon-bg {
  background-color: #fff;
  color: #2967cc;
  border-radius: 30%;
}
</style>
