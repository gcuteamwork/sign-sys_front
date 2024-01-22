<script setup lang="ts">
    import DefaultHead from '../layouts/Header.vue'
    import DefaultFoot from '../layouts/Footer.vue'
import SignInItems from '../components/SignInItems.vue';
import SeachBar from '../components/SeachBar.vue';
</script>
<template>
   <div class="common-layout">
      <el-container class="common-layout">
      <el-header style="padding: 0;"><default-head /></el-header>
      <seach-bar/>
      <sign-in-items />
      <el-footer style="position: fixed;bottom: 26px;width: 100%;"><default-foot /></el-footer>
    </el-container>
  </div>
</template>
<style scoped></style>