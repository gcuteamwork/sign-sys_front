<template>
    <div class="common-layout">
      <el-container class="common-layout">
      <el-header style="padding: 0;"><default-head /></el-header>
      <el-main><default-view /></el-main>
      <el-footer style="position: fixed;bottom: 26px;width: 100%;"><default-foot /></el-footer>
    </el-container>
  </div>
  </template>
  
  <script lang="ts" setup>
    import DefaultHead from './Header.vue'
    import DefaultView from './View.vue'
    import DefaultFoot from './Footer.vue'
  </script>