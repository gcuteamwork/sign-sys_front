<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
let router = useRouter();
const path = ref<string>();
const headText = ref<string>();
const IfBack = ref<boolean>(false);
const IfPlus = ref<boolean>(true);
//监听当前路由以显示不同的标题
watch(
  () => router,
  (newPath) => {
    path.value = newPath.currentRoute.value.fullPath.substring(1);
    if (path.value === "adminMain") {
      headText.value = "签到发起";
    }
    if (path.value === "check") {
      headText.value = "签到情况";
      IfBack.value = true;
      IfPlus.value = false;
    }
    if (path.value === "addSign") {
      headText.value = "编辑签到";
      IfBack.value = true;
      IfPlus.value = false;
    }
    if (path.value === "adminInfo") {
      headText.value = "管理员信息";
      IfPlus.value = false;
    }
    if (path.value === "adminInfo") {
      headText.value = "位置签到";
      IfBack.value = true;
      IfPlus.value = false;
    }
    if (path.value === "adminInfo") {
      headText.value = "二维码签到";
      IfBack.value = true;
      IfPlus.value = false;
    }
  },
  { immediate: true }
  //在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调：
);

//返回首页
const back = () => {
  router.push({ path: "/main" });
};

//添加签到信息
const addSign = () => {
  router.push({ path: "/addsign" });
};
</script>
<template>
  <div class="head-bg position-relative text-center">
    <div
      class="position-absolute left-6 top-3 w-8 color-white"
      @click="back"
      v-if="IfBack"
    >
      <ArrowLeft />
    </div>
    <span class="color-white font-size-5 line-height-14">{{ headText }}</span>
    <div
      class="position-absolute right-6 top-3 w-8 color-white"
      @click="addSign"
      v-if="IfPlus"
    >
      <Plus />
    </div>
  </div>
</template>
<style scoped>
.head-bg {
  background-color: #2967cc;
}
</style>
