<script setup lang="ts">
import { ref, onMounted, defineEmits } from "vue";

interface Activity {
  signInType: string;
  class: string;
  status: string;
  date: string;
}

// 初始化数据
const activities = ref<Activity[]>([]);

async function fetchData() {
  const response = await fetch("src/api/SignInItems.json");
  const data: Activity[] = await response.json();

  activities.value = data;
}

onMounted(fetchData);

const emits = defineEmits(['click']);
</script>

<template>
  <div v-for="(activity, index) in activities" :key="index" class="block flex h-12dvh w-95% b-rd-3 m-a m-t-4 bg-white"
    @click="$emit('click', activity)">
    <div class="ways h-80% m-3 b-rd-4 text-center font-size-6 text-white flex flex-justify-center flex-col">
      {{ activity.signInType }}<br />签到
    </div>
    <div class="flex flex-col flex-justify-center">
      <div class="class text-size-5 fw-bold m-1">{{ activity.class }}</div>
      <div class="status text-size-4 fw-bold m-1" :class="{
    'text-green-500': activity.status === '正在进行',
    'text-red-500': activity.status === '已完成',
  }">
        {{ activity.status }}
      </div>
    </div>
    <div class="date text-size-4 m-t-6 m-l-a m-r-3">
      {{ activity.date }}
    </div>
  </div>
</template>

<style scoped>
.block {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.ways {
  background-color: #2967cc;
  aspect-ratio: 1 / 1;
}

.date {
  color: rgb(105, 105, 105);
}
</style>
