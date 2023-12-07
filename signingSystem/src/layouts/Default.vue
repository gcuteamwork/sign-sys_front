<template>
    <div class="common-layout">
    <el-container>
      <el-header><default-head /></el-header>
      <el-container>
        <el-aside><default-bar /></el-aside>
        <el-container>
          <el-main><default-view /></el-main>
          <el-footer><default-foot /></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
  </template>
  
  <script lang="ts" setup>
    import DefaultHead from './Header.vue'
    import DefaultView from './View.vue'
    import DefaultBar from './NavBar.vue'
    import DefaultFoot from './Footer.vue'
  </script>