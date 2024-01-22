<template>
<div class="flex justify-center">
    <canvas id="canvas" ref="canvas" class="canvas" :width="width" :height="height"></canvas>
</div>
</template>

<script setup lang="ts">
import QRCode from "qrcode";
import { onMounted, ref, watch } from "vue";

//二维码存储内容
const qrUrl =ref('hello') ;
// canvas width
const width = 100
// canvas height
const height = 100
// 二维码尺寸（正方形 长宽相同）
const qrSize = 100
/**
 * @argument qrUrl        二维码内容
 * @argument qrSize       二维码大小
 */

const canvas = ref<HTMLCanvasElement>();
const handleQrcode = () => {
    let dom = canvas.value as HTMLCanvasElement;
    QRCode.toDataURL(qrUrl.value
    ,{
        errorCorrectionLevel: "H",
        width: qrSize,
        version: 7
    }).then((url: string) => {
        // 画二维码里的logo 在canvas里进行拼接
        const ctx = dom.getContext("2d") as CanvasRenderingContext2D;
        const image = new Image();
        image.src = url;
        new Promise<HTMLImageElement>((resolve) => {
            image.onload = () => {
                resolve(image);
            };
        }).then((img: HTMLImageElement) => {
            // console.log(img, ctx)
            ctx?.drawImage(img, (width - qrSize) / 2, 0, qrSize, qrSize);
        });
    }).catch((err: Error) => {
        console.error(err);
    });
};

onMounted(() => {
    handleQrcode();
});

watch(
    ()=>qrUrl.value,
    (newValue)=>{
        qrUrl.value=newValue
        console.log(qrUrl.value);
    }
)
let timer=ref()
const start=()=>{
    if(timer.value){
       clearInterval(timer.value)
    }else{
       timer.value=setInterval(()=>{
        //获取返回的数据,每次间隔10s刷新二维码
        qrUrl.value='world'
        handleQrcode()
        },10000) 
    }
    
}
start()
</script>
  
<style lang="scss" scoped>
</style>
  
  
  