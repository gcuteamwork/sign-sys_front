<script setup lang="ts">
import { ref } from 'vue';
//左侧签到类型
const signInText = ref('');
const backendResponse = '位置'; //后端返回类型

if (backendResponse === '位置') {
    signInText.value = '位置';
} else if (backendResponse === '扫码') {
    signInText.value = '扫码';
}

//课程
const classChoose = ref('');
const backendResponse2 = '形势与政策'; //后端返回课程

if (backendResponse2 === '形势与政策') {
    classChoose.value = '形势与政策';
} else{
    classChoose.value = backendResponse2;
}

//状态
const status = ref('');
const backendResponse3 = '正在进行'; //后端返回状态

if (backendResponse3 === '正在进行') {
    status.value = '正在进行';
} else if (backendResponse3 === '已完成') {
    status.value = '已完成';
}

//日期
const date = ref('');
const backendResponse4 = '10-10 10:10'; //后端返回日期

if (backendResponse4 === '10-10 10:10') {
    date.value = '10-10 10:10';
} else{
    date.value = backendResponse4;
}
</script>

<template>
        <div class="block 
        flex h-12dvh w-95% b-rd-3 m-a m-t-4 
        bg-white">
            <div class="ways 
                h-85% m-3 
                b-rd-4 
                text-center font-size-6 text-white 
                flex flex-justify-center flex-col">{{ signInText }}<br>签到</div>
                <div class="flex flex-col flex-justify-center">
                    <div class="class
                        text-size-5 fw-bold m-1
                        ">{{ classChoose }}</div>
                    <div class="status
                        text-size-4 fw-bold m-1
                        "
                        :class="{
                            'text-green-500': status === '正在进行',
                            'text-red-500': status === '已完成'
                        }">{{ status }}</div>
                </div>
                <div class="date
                text-size-4 m-t-6 m-l-a m-r-3
                ">
                    {{date}}
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
.date{
    color: rgb(105, 105, 105);
}
</style>
