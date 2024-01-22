<script setup lang="ts">
import { ref, computed, watch} from 'vue'
import { ElMessage } from 'element-plus'
import dayjs from 'dayjs'
interface DialogProps {
    signTime: number
    advanced: string
}
const props = defineProps<DialogProps>()
const signTime = ref<number>()
const advanced = ref<string>()
watch(
    ()=>[props.signTime,props.advanced],
    ([newsignTime,newadvanced])=>{
        signTime.value=newsignTime as number * 60
        advanced.value=newadvanced as string
    },
    {immediate:true}
    )
const emit = defineEmits<{ close: [] }>()
// 倒计时
// 1. 响应式数据 
let timer = ref()
let time = ref(0)
// 格式化时间 为 xx分xx秒
let formatTime: any = computed(() => dayjs.unix(time.value).format('mm分ss秒'),)
// 2. 开启倒计时函数 - 倒计时秒数
const start = (currentTime: any) => {
    // 核心逻辑：每隔1s减一
    time.value = currentTime
    timer.value = setInterval(() => {
        time.value--
        if(time.value!=0&&advanced.value==='提前'){
            clearInterval(timer.value) 
            return
        }
        else if(time.value===0){              
            clearInterval(timer.value)
            ElMessage({
            type: 'error',
            message: '已结束签到',
            })
            // emit('close')
        }
    }, 1000)
}
start(signTime.value)//倒计时开始的秒数

</script>

<template>
    <span>{{ formatTime }}</span>
</template>
