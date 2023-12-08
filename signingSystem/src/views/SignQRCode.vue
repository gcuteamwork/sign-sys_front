<script setup lang="ts">
import QRCode from '../components/QRCode.vue';
import DefaultHead from '../layouts/Header.vue'
</script>
<template>
     <el-container class="common-layout">
      <el-header style="padding: 0;"><default-head /></el-header>
      <el-main><QRCode></QRCode></el-main>
    </el-container>
</template>
<style scoped></style>