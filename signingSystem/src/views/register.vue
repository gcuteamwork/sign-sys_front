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
  <div
    class="flex flex-col items-center justify-center w-full"
    style="height: 100vh"
  >
    <div
      class="rounded-bl-full w-100px h-100px bg-#2967cc fixed top-0 right-0"
    ></div>
    <img
      src="../img/arr.png"
      alt=""
      class="w-25px h-25px fixed top-35px left-35px"
    />
    <div :model="form" class="flex flex-col w-80% mx-auto mb-50px z-1">
      <select
        v-model="form.apartment"
        placeholder="所属部门"
        class="rounded-30px bg-gray-200 p-15px border-0 focus:outline-none mt-4 mb-4 color-#c3c3c3 tracking-2px text-18px pr-20px mt-30px"
      >
        <option label="网站运维部" value="网站运维部" />
        <option label="网络运维部" value="网络运维部" />
        <option label="信息化运维部" value="信息化运维部" />
        <option label="行政秘书部" value="行政秘书部" />
      </select>
      <input
        v-model="form.id"
        placeholder="学号:"
        class="rounded-30px bg-gray-200 p-15px border-0 focus:outline-none mt-4 mb-4 color-#cacaca tracking-2px text-18px"
      />
      <input
        v-model="form.password"
        placeholder="密码:"
        class="rounded-30px bg-gray-200 p-15px border-0 focus:outline-none mt-4 mb-4 color-#cacaca tracking-2px text-18px"
      />
      <input
        v-model="form.id"
        placeholder="学号:"
        class="rounded-30px bg-gray-200 p-15px border-0 focus:outline-none mt-4 mb-4 color-#cacaca tracking-2px text-18px"
      />
      <input
        v-model="form.password"
        placeholder="密码:"
        class="rounded-30px bg-gray-200 p-15px border-0 focus:outline-none mt-4 mb-4 color-#cacaca tracking-2px text-18px"
      />
      <button
        class="w-100% rounded-30px p-3 border-0 bg-#2967cc color-#e5edf9 tracking-10px text-20px mt-40px"
      >
        注册
      </button>
    </div>
    <div
      class="rounded-tr-full w-100px h-100px bg-#2967cc fixed bottom-0 left-0"
    ></div>
  </div>
</template>
<style scoped>
select::-ms-expand,
select::-webkit-select-arrow {
  color: #333; /* 下拉箭头颜色 */
  margin-right: 30px; /* 调整箭头与选项之间的距离 */
}
</style>
