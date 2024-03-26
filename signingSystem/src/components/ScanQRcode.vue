<!-- 只能在localhost和https服务下使用 -->
<template>
  <div class="flex flex-col justify-center items-center">
    <div class="canvasBox">
      <div class="box">
        <div class="line"></div>
        <div class="angle"></div>
      </div>
      <canvas id="canvas" ref="canvas" class="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
    </div>
    <!--  开发的 时候为了方便，加了这个关闭按钮，正常项目可以去掉 -->
    <el-button style="
        position: fixed;
        bottom: 180px;
        z-index: 1000;
        width: 300px;
        font-size: 20px;
        padding: 20px;
      " @click="closeScan" type="primary" plain size="large">退出二维码签到</el-button>
  </div>
</template>

<script setup lang="ts">
import jsQR from "jsqr";
import { ref, onMounted, nextTick, onUnmounted } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
let router = useRouter();

const video = ref();
const canvas2d = ref();
const canvasWidth = ref(500);
const canvasHeight = ref(500);
const canvas = ref<HTMLCanvasElement>();

onMounted(() => {
  if (origin.indexOf("https") === -1) {
    ElMessage({
      type: "warning",
      message: "请在 https 环境中使用本插件。",
    });
  }
  const windowWidth = window.screen.availWidth;
  const windowHeight = window.screen.availHeight;
  canvasWidth.value = windowWidth;
  canvasHeight.value = windowHeight;
  nextTick(() => {
    video.value = document.createElement("video");
    openScan();
  });
});

onUnmounted(() => {
  closeCamera();
});

const emit = defineEmits<{ closeScan: []; success: any }>();
const closeScan = () => {
  emit("closeScan");
  router.go(0);
};
const openScan = () => {
  let width = canvasHeight.value;
  let height = canvasWidth.value;
  const videoParam = {
    audio: false,
    preferCurrentTab: false,
    video: {
      //   facingMode: { exact: "environment" },后置摄像头
      width,
      height,
    },
  };
  navigator.mediaDevices
    .getUserMedia(videoParam)
    .then((stream) => {
      video.value.srcObject = stream;
      video.value.setAttribute("playsinline", true);
      video.value.play();
      requestAnimationFrame(tick);
    })
    .catch((err) => {
      ElMessage({
        type: "warning",
        message: "设备不支持,请检查是否允许摄像头权限",
      });
      console.log("获取本地设备（摄像头）---失败-------err");
      console.log(err);
    });
};

const closeCamera = () => {
  if (video.value.srcObject) {
    video.value.srcObject.getTracks().forEach((track: any) => {
      track.stop();
    });
  }
};

const tick = () => {
  if (video.value.HAVE_ENOUGH_DATA === 4) {
    let dom = canvas.value as HTMLCanvasElement;
    dom.height = canvasHeight.value;
    dom.width = canvasWidth.value;
    if (canvas2d.value === undefined) {
      canvas2d.value = dom.getContext("2d", {
        willReadFrequently: true,
      }) as CanvasRenderingContext2D;
    }
    canvas2d.value.drawImage(
      video.value,
      0,
      0,
      canvasWidth.value,
      canvasHeight.value
    );

    const imageData = canvas2d.value.getImageData(
      0,
      0,
      canvasWidth.value,
      canvasHeight.value
    );

    const code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: "dontInvert",
    });

    if (code) {
      drawLine(
        code.location.topLeftCorner,
        code.location.topRightCorner,
        "#FF3B58"
      );
      drawLine(
        code.location.topRightCorner,
        code.location.bottomRightCorner,
        "#FF3B58"
      );
      drawLine(
        code.location.bottomRightCorner,
        code.location.bottomLeftCorner,
        "#FF3B58"
      );
      drawLine(
        code.location.bottomLeftCorner,
        code.location.topLeftCorner,
        "#FF3B58"
      );
      if (code.data) {
        getData(code.data);
      }
    }
  }
  requestAnimationFrame(tick); //执行扫描动画
};
const drawLine = (begin: any, end: any, color: any) => {
  canvas2d.value.beginPath();
  canvas2d.value.moveTo(begin.x, begin.y);
  canvas2d.value.lineTo(end.x, end.y);
  canvas2d.value.lineWidth = 4;
  canvas2d.value.strokeStyle = color;
  canvas2d.value.stroke();
};
const getData = (data: string) => {
  emit("success", data);
  closeCamera();
};
</script>

<style scoped>
page {
  background-color: #333333;
}

.canvasBox {
  width: 100vw;
  /* position: relative; */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.1);

  background-image: linear-gradient(0deg,
      transparent 24%,
      rgba(110, 234, 251, 0.1) 25%,
      rgba(110, 234, 251, 0.1) 26%,
      transparent 27%),
    linear-gradient(90deg,
      transparent 24%,
      rgba(110, 234, 251, 0.1) 25%,
      rgba(110, 234, 251, 0.1) 26%,
      transparent 27%);
  background-size: 3rem 3rem;
  background-position: -1rem -1rem;
  z-index: 10;
}

.box {
  width: 260px;
  height: 260px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 11;
}

.line {
  height: calc(100% - 2px);
  width: 100%;
  background: linear-gradient(180deg,
      rgba(110, 234, 251, 0.1) 43%,
      #2967cc 211%);
  border-bottom: 3px solid #2967cc;
  transform: translateY(-100%);
  animation: radar-beam 2s infinite alternate;
  animation-timing-function: cubic-bezier(0.53, 0, 0.43, 0.99);
  animation-delay: 1.4s;
}

.box:after,
.box:before,
.angle:after,
.angle:before {
  content: "";
  display: block;
  position: absolute;
  width: 3vw;
  height: 3vw;
  z-index: 12;
  border: 0.2rem solid transparent;
}

.box:after,
.box:before {
  top: 0;
  border-top-color: #2967cc;
}

.angle:after,
.angle:before {
  bottom: 0;
  border-bottom-color: #2967cc;
}

.box:before,
.angle:before {
  left: 0;
  border-left-color: #2967cc;
}

.box:after,
.angle:after {
  right: 0;
  border-right-color: #2967cc;
}

@keyframes radar-beam {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
