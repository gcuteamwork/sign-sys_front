<template>
    <div class="common-layout">
      <el-container>
      <el-header><default-head /></el-header>
      <el-main><default-view /></el-main>
      <el-footer><default-foot /></el-footer>
    </el-container>
  </div>
  </template>
  
  <script lang="ts" setup>
    import DefaultHead from './Header.vue'
    import DefaultView from './View.vue'
    import DefaultFoot from './Footer.vue'
  </script>