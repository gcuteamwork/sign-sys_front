<script setup lang="ts">
import DefaultHead from "../../layouts/Header.vue";
import DefaultFoot from "../../layouts/Footer.vue";
import { ref } from "vue";
const membername = ref("");
const backendResponse = "朱海俊"; //后端返回姓名
if (backendResponse === "朱海俊") {
  membername.value = "朱海俊";
} else {
  membername.value = backendResponse;
}

const identify = ref("");
const backendResponse2 = "普通用户"; //后端返回身份
if (backendResponse2 === "普通用户") {
  identify.value = "普通用户";
} else {
  identify.value = backendResponse2;
}

const appartment = ref("");
const backendResponse3 = "网站运维部"; //后端返回部门
if (backendResponse3 === "网站运维部") {
  appartment.value = "网站运维部";
} else {
  appartment.value = backendResponse3;
}

const account = ref("");
const backendResponse4 = "123456789"; //后端返回账号
if (backendResponse4 === "123456789") {
  account.value = "123456789";
} else {
  account.value = backendResponse4;
}
const about = () => {};
const signout = () => {};
</script>

<template>
  <div class="common-layout">
    <el-container class="common-layout">
      <el-header style="padding: 0"><default-head /></el-header>
      <el-main>
        <!-- 信息 -->
        <div class="block flex h-14dvh w-95% b-rd-3 m-a m-t-4 bg-white">
          <div
            class="ways h-115px w-115px m-3 b-rd-4 text-center font-size-8 text-white flex flex-justify-center flex-col"
          >
            {{ membername }}
          </div>
          <div class="flex flex-col flex-justify-center">
            <div class="class text-size-6 fw-bold m-2">
              姓名: {{ membername }}
            </div>
            <div class="status text-size-4 fw-bold m-2">{{ identify }}</div>
          </div>
        </div>
        <div class="block flex h-10dvh w-95% b-rd-3 m-a m-t-4 bg-white">
          <div
            class="icons h-75px w-75px m-3 b-rd-4 flex flex-justify-center flex-col"
          >
            <img class="w-70% m-a" src="../img/account.svg" alt="account" />
          </div>
          <div class="flex flex-col flex-justify-center">
            <div class="class text-size-6 fw-bold m-2">账号: {{ account }}</div>
          </div>
        </div>
        <div class="block flex h-10dvh w-95% b-rd-3 m-a m-t-4 bg-white">
          <div
            class="icons h-75px w-75px m-3 b-rd-4 flex flex-justify-center flex-col"
          >
            <img
              class="w-70% m-a"
              src="../img/department.svg"
              alt="appartment"
            />
          </div>
          <div class="flex flex-col flex-justify-center">
            <div class="class text-size-6 fw-bold m-2">
              所属部门: {{ appartment }}
            </div>
          </div>
        </div>
        <!-- 底部 关于我们 退出登录 -->
        <div class="foot m-t-250px">
          <div class="about m-t-4">
            <el-button
              type="default"
              @click="about"
              plain
              size="large"
              class="btn"
              >关于我们</el-button
            >
          </div>
          <div class="signout m-t-4">
            <el-button
              type="danger"
              @click="signout"
              plain
              size="large"
              class="btn"
              >退出登录</el-button
            >
          </div>
        </div>
      </el-main>

      <el-footer style="position: fixed; bottom: 26px; width: 100%"
        ><default-foot
      /></el-footer>
    </el-container>
  </div>
</template>
<style scoped>
.btn {
  height: 60px;
  margin: 0 auto;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.block {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.ways {
  background-color: #2967cc;
}
.icons {
  background-color: #2967cc;
}
.date {
  color: rgb(105, 105, 105);
}
</style>
