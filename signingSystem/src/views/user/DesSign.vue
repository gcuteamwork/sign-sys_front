//用户位置签到
<script setup lang="ts">
import DefaultHead from "../../layouts/Header.vue";
</script>
<template>
  <div class="common-layout">
    <el-container class="common-layout">
      <el-header style="padding: 0"><default-head /></el-header>
      <el-main
        ><div class="flex flex-col justify-center items-center h-full">
          <div class="w-250px h-250px bg-blue">位置签到</div>
          <button
            class="mt-80px w-70% p-10px border-none shadow-md bg-white rounded-10px"
          >
            <p class="text-20px color-blue font-medium">确认签到</p>
          </button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<style scoped></style>
