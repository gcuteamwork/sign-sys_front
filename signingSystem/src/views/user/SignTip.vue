<script setup lang="ts">
import DefaultHead from "../../layouts/Header.vue";
import { ref } from "vue";
// 后端签到反馈
const SignText = ref<string>("签到成功");
const TextColor = ref<string>("rgb(31, 153, 41)");
//签到成功 rgb(31, 153, 41)
//超过规定时间签到失效（申请补签）rgb(179, 36, 36)
//位置超出范围签到失败（请在指定地点重新签到）rgb(41, 103, 204)
const Recheck = ref<boolean>(true); //重新签到按钮显示
</script>
<template>
  <div class="common-layout">
    <el-container class="common-layout">
      <el-header style="padding: 0"><default-head /></el-header>
      <el-main
        ><div class="w-full flex justify-center items-center h-500px flex-col">
          <p
            class="text-25px font-medium tracking-1"
            :style="{ color: TextColor }"
          >
            {{ SignText }}
          </p>
          <button
            v-if="Recheck"
            class="mt-250px w-70% p-10px border-none shadow-md bg-white rounded-10px"
          >
            <p class="text-20px color-blue font-medium">重新签到</p>
          </button>
        </div></el-main
      >
    </el-container>
  </div>
</template>
<style scoped></style>
