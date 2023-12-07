<template>
    <canvas id="canvas" ref="canvas" class="canvas" :width="width" :height="height"></canvas>
</template>
  
<script setup lang="ts">
import QRCode from "qrcode";
import { onMounted, ref } from "vue";


//二维码存储内容
const qrUrl = 'hello';
// canvas width
const width = 400
// canvas height
const height = 400
// 二维码尺寸（正方形 长宽相同）
const qrSize = 360
// 二维码底部文字
// const qrText = ref<string>('Hello World')
//底部说明文字字号
// const qrTextSize = 24

const canvas = ref<HTMLCanvasElement>();
/**
 * @argument qrUrl        二维码内容
 * @argument qrSize       二维码大小
 * @argument qrText       二维码中间显示文字
 * @argument qrTextSize   二维码中间显示文字大小(默认16px)
 */
const handleQrcode = () => {
    let dom = canvas.value as HTMLCanvasElement;
    QRCode.toDataURL(qrUrl
    ,{
        errorCorrectionLevel: "H",
        width: qrSize,
        version: 7
    }).then((url: string) => {
        // 画二维码里的logo// 在canvas里进行拼接
        const ctx = dom.getContext("2d") as CanvasRenderingContext2D;
        const image = new Image();
        image.src = url;
        new Promise<HTMLImageElement>((resolve) => {
            image.onload = () => {
                resolve(image);
            };
        }).then((img: HTMLImageElement) => {
            // console.log(img, ctx)
            ctx.drawImage(img, (width - qrSize) / 2, 0, qrSize, qrSize);
            // if (qrText) {
            //     //设置字体
            //     ctx.font = "bold " + qrTextSize + "px Arial";
            //     let tw = ctx.measureText(qrText.value).width; // 文字真实宽度
            //     let ftop = qrSize - qrTextSize; // 根据字体大小计算文字top
            //     let fleft = (width - tw) / 2; // 根据字体大小计算文字left
            //     ctx.fillStyle = "#fff";
            //     ctx.textBaseline = "top"; //设置绘制文本时的文本基线。
            //     ctx.fillStyle = "#333";
            //     ctx.fillText(qrText.value, fleft, ftop);
            // }
        });
    }).catch((err: Error) => {
        console.error(err);
    });
};


onMounted(() => {
    handleQrcode();
});
</script>
  
<style lang="scss" scoped></style>
  
  
  