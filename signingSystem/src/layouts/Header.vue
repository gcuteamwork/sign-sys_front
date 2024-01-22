<script setup lang="ts">
import { ref, watch} from 'vue';
import { useRouter } from 'vue-router';
import sign from '../components/EditSignDialog.vue'
let router = useRouter()
const path = ref<string>();
const headText = ref<string>();
const IfPlus=ref<boolean>(true);
//监听当前路由以显示不同的标题
watch(
    () => router,
    (newPath) => {
        path.value = newPath.currentRoute.value.fullPath.substring(1)
        if (path.value === "adminMain") {
            headText.value = '签到发起'
        }
        if(path.value==="adminInfo"){
            headText.value='管理员信息'
            IfPlus.value=false
        }
    },
    { immediate: true }
    //在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调：
);



//添加签到信息
const isEditSignDialogOpen=ref<boolean>(false)
const openSignDialog=()=>{
    isEditSignDialogOpen.value=true
}
</script>
<template>
    <div class="head-bg position-relative text-center">
        <span class="color-white font-size-5 line-height-14">{{ headText }}</span>
        <div class="position-absolute right-6 top-3 w-8 color-white" @click="openSignDialog()">
            <Plus v-if="IfPlus"/>
        </div>
    </div>
    <sign :open="isEditSignDialogOpen" @close="isEditSignDialogOpen=false" mode="add"/>
</template>
<style scoped>
.head-bg {
  background-color: #2967cc;
}
</style>
