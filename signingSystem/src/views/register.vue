<script setup lang="ts">
import { reactive } from "vue";
const form = reactive({
  apartment: "",
  name: "",
  grade: "",
  id: "",
  password: "",
});
</script>
<template>
  <div class="flex flex-col items-center justify-center w-full" style="height: 100vh">
    <div class="rounded-bl-full w-100px h-100px bg-#2967cc fixed top-0 right-0"></div>
    <img src="../img/arr.png" alt="" class="w-25px h-25px fixed top-35px left-35px" />
    <div :model="form" class="flex flex-col w-80% mx-auto mb-50px z-1">
      <div class="select-wrapper rounded-30px p-15px bg-gray-200  mt-4 mb-4 ">
        <select v-model="form.apartment"
          class="custom-select  border-0 focus:outline-none color-#cacaca tracking-2px text-18px">
          <option disabled value="">所属部门</option>
          <option label="网站运维部" value="网站运维部" />
          <option label="网络运维部" value="网络运维部" />
          <option label="信息化运维部" value="信息化运维部" />
          <option label="行政秘书部" value="行政秘书部" />
        </select>
      </div>
      <input v-model="form.id" placeholder="学号:"
        class="rounded-30px bg-gray-200 p-15px border-0 focus:outline-none mt-4 mb-4 color-#cacaca tracking-2px text-18px" />
      <input v-model="form.password" placeholder="密码:"
        class="rounded-30px bg-gray-200 p-15px border-0 focus:outline-none mt-4 mb-4 color-#cacaca tracking-2px text-18px" />
      <input v-model="form.password" placeholder="再确认一遍密码:"
        class="rounded-30px bg-gray-200 p-15px border-0 focus:outline-none mt-4 mb-4 color-#cacaca tracking-2px text-18px" />
      <button class="w-100% rounded-30px p-3 border-0 bg-#2967cc color-#e5edf9 tracking-10px text-20px mt-40px">
        注册
      </button>
    </div>
    <div class="rounded-tr-full w-100px h-100px bg-#2967cc fixed bottom-0 left-0"></div>
  </div>
</template>
<style scoped>
.select-wrapper {
  position: relative;
  display: inline-block;
}

.select-wrapper::after {
  content: "Ⅴ";
  color: #666;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.custom-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  width: 100%;
}
</style>