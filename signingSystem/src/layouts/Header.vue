<script setup lang="ts">
import { ref, watch} from 'vue';
import { useRouter } from 'vue-router';
let router = useRouter()
const path = ref<string>();
const headText = ref<string>('首页');
const Ifback=ref<boolean>(false);
//监听当前路由以显示不同的标题
watch(
    () => router,
    (newPath) => {
        path.value = newPath.currentRoute.value.fullPath.substring(1)
        if (path.value === "qrcode") {
            headText.value = '二维码签到'
            Ifback.value=true
        }
    },
    { immediate: true }
    //在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调：
);

//返回首页
const back = () => {
    router.go(-1)
} 


//弹出对话框添加签到信息
const addSign=()=>{
    alert('添加签到')
}
</script>
<template>
    <div class="text-center head-bg">
        <div class="position-fixed left-10 top-5 w-8 color-white" @click="back" v-if="Ifback">
            <ArrowLeft />
        </div>
        <span class="color-white font-size-5 line-height-14">{{ headText }}</span>
        <div class="position-fixed right-10 top-5 w-8 color-white" @click="addSign">
            <Plus />
        </div>
    </div>
</template>
<style scoped>
.head-bg {
    background-color: #429fff;
}
</style>