<script setup lang="ts">
import { reactive, ref } from "vue";
const form = reactive({
  id: "",
  password: "",
});
const error = ref(false);
</script>
<template>
  <div class="w-full">
    <img src="../img/login.png" alt="" class="w-full" />
    <div :model="form" class="flex flex-col w-80% mx-auto mt-30px">
      <input
        v-model="form.id"
        placeholder="学号:"
        class="rounded-30px bg-gray-200 p-15px border-0 focus:outline-none mt-4 mb-4 color-#1f1f1f tracking-2px text-18px"
      />
      <input
        v-model="form.password"
        placeholder="密码:"
        class="rounded-30px bg-gray-200 p-15px border-0 focus:outline-none mt-4 mb-4 color-#1f1f1f tracking-2px text-18px"
      />
      <div class="flex color-#c6c6c6 justify-between p-15px">
        <span>新用户注册</span>
        <span>忘记密码？</span>
      </div>
      <div>
        <button
          class="w-100% rounded-30px p-3 border-0 bg-#2967cc color-#e5edf9 tracking-10px text-20px"
          @click="
            {
              error = true;
            }
          "
        >
          登陆
        </button>
      </div>
    </div>
  </div>
  <el-dialog
    v-model="error"
    width="80%"
    :show-close="false"
    :class="error"
    height="100%"
  >
    <template #header class="w-full">
      <div class="flex justify-between w-full">
        <h2 class="color-#2967cc">输入错误</h2>
        <img
          src="../img/close-l.png"
          alt=""
          class="w-30px h-30px"
          @click="
            {
              error = false;
            }
          "
        />
      </div>
    </template>
    <span class="text-18px color-#0f0f0f">您可能输入了错误的用户名或密码</span
    ><br />
    <span class="text-18px color-#0f0f0f">如未注册，</span
    ><span class="text-18px color-#2967cc">点击注册</span>
  </el-dialog>
</template>
<style scoped></style>
