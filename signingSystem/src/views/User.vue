<script setup lang="ts">
    import DefaultHead from '../layouts/Header.vue'
    import DefaultFoot from '../layouts/Footer.vue'
</script>
<template>
   <div class="common-layout">
      <el-container class="common-layout">
      <el-header style="padding: 0;"><default-head /></el-header>
      <el-main>user</el-main>
      <el-footer style="position: fixed;bottom: 26px;width: 100%;"><default-foot /></el-footer>
    </el-container>
  </div>
</template>
<style scoped></style>