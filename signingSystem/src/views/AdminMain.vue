<script setup lang="ts">
import DefaultHead from '../layouts/Header.vue'
import DefaultFoot from '../layouts/Footer.vue'
import signInfo from '../components/SignInfoDialog.vue';
import ScanQRcode from '../components/ScanQRcode.vue';
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus'

const isSignDialogOpen=ref<boolean>(false)
const openSignDialog=()=>{
    isSignDialogOpen.value=true
}
const data = reactive({
  qrCode: "",
  isQrCodeShown: false,
  isQrAlert: false,
  qrCOdeData: "",
})
// 点击扫描图标---打开扫码功能
const handleScan = () => {
  const isMobile = checkDevice();
  if (isMobile === true) {
    data.isQrCodeShown = true;
  }
}
// 检查当前登录设备类型
const checkDevice = () => {
  // 获取浏览器navigator对象的userAgent属性（浏览器用于HTTP请求的用户代理头的值）
  const info = navigator.userAgent;
  // 通过正则表达式的test方法判断是否包含“Mobile”字符串
  const isMobile = /mobile/i.test(info);
  // 如果包含“Mobile”（是手机设备）则返回true
  return isMobile;
}
// 扫码成功
const gotQrCode = (params: any) => {
  // 这里params就是二维码的内容，这里可以根据自己项目的需求处理内容
  if (params) {
    data.isQrAlert = true;
    data.qrCOdeData = params;  // 拿到二维码的内容
    data.isQrCodeShown = false;
    ElMessage({
      type: 'success',
      message: '签到成功',
    })
  }
}
const closeScan = () => {
  // 关闭按钮
  data.isQrCodeShown = false;
}
</script>
<template>
   <div class="common-layout">
      <el-container class="common-layout">
      <el-header style="padding: 0;"><default-head /></el-header>
      <el-main>
        <el-button @click="openSignDialog">main</el-button>
        <el-button @click="handleScan"><el-icon><FullScreen /></el-icon></el-button>
      </el-main>
      <el-footer style="position: fixed;bottom: 26px;width: 100%;"><default-foot /></el-footer>
    </el-container>
  </div>
  <signInfo :open="isSignDialogOpen" @close="isSignDialogOpen=false"></signInfo>
  <ScanQRcode v-if="data.isQrCodeShown" @success="gotQrCode" @closeScan="closeScan"/>
</template>
<style scoped></style>