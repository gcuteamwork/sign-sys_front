<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import CountDownVue from "./CountDown.vue";
import QRCode from "./QRCode.vue";
interface DialogProps {
  open: boolean;
}
const props = defineProps<DialogProps>();
const open = ref<boolean>(false);
watch(
  () => props.open,
  (newOpenValue) => {
    open.value = newOpenValue;
  }
);

const form = reactive({
  title: "",
});
const formRef = ref();

const emit = defineEmits<{ close: []; complete: [] }>();

const signType = ref<string>("二维码签到"); //获取签到类型
//是否显示二维码签到
const isShowQRcode = ref<boolean>(false);
if (signType.value === "二维码签到") {
  isShowQRcode.value = true;
}
//获取未签到人员信息
const unAttended = reactive([
  {
    department_id: "网站运维部",
    name: "某某某",
  },
  {
    department_id: "信息化运维部",
    name: "某某某",
  },
]);
const isCountDown = ref<number>(0.1); //获取签到时间

const advanced = ref<string>("");
const handleClose = () => {
  ElMessageBox.confirm("确定结束签到吗?", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "error",
  })
    .then(() => {
      ElMessage({
        type: "error",
        message: "已结束签到",
      });
      advanced.value = "提前";
      isShowQRcode.value = false;
      emit("close");
    })
    .catch(() => {
      //catch error
    });
};
const closeDialog = () => {
  isShowQRcode.value = false;
  emit("close");
};
</script>
<template>
  <el-dialog v-model="open" :before-close="closeDialog"
    style="background-color: #f0f1f2; width: 90%; height: 70%;border-radius: 10px;" class="dialog-title">
    <template #header>
      <span class="el-dialog__title">
        <p>签到情况</p>
      </span>
    </template>
    <el-form ref="formRef" :model="form">
      <el-form-item prop="title">
        <div class="w-full bg-white font-700 color-black h-10 b-rd-t-3 p-t-3">
          <span class="ml-2">签到类型</span>&nbsp:&nbsp&nbsp<span>{{
    signType
  }}</span>
        </div>
      </el-form-item>
      <el-form-item prop="title">
        <div class="w-full bg-white font-700 color-black h-11 p-t-2">
          <span class="ml-2">签到人数&nbsp:
            <span>&nbsp{{ 11 }}</span>
            <br />
            <span class="ml-2">未签到人数&nbsp:</span>
            <span class="color-red">&nbsp{{ 1 }}</span>
            <el-dropdown trigger="click" class="ml-5">
              <el-button class="w-30" style="height: 20px">
                <span class="font-size-3">查看未签到人员</span><el-icon class="el-icon--right"><arrow-down /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item v-for="items in unAttended" class="w-32" style="height: 15px; font-size: 10px">
                    {{ items.department_id }}&nbsp:&nbsp{{ items.name }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </span>
        </div>
      </el-form-item>
      <el-form-item prop="title">
        <div class="w-full bg-white font-700 color-black h-10 p-t-3">
          <span class="ml-2">剩余时间</span>&nbsp:&nbsp&nbsp<span>
            <CountDownVue :advanced="advanced" :signTime="isCountDown" @close="closeDialog" />
          </span>
        </div>
      </el-form-item>
      <el-form-item prop="title">
        <div class="w-full bg-white font-700 b-rd-b-3 color-black h-35">
          <span class="ml-2">
            <!-- <QRCode v-if="isShowQRcode" /> -->
            <QRCode />
          </span>
          <span class="flex justify-center">{{ signType }}</span>
        </div>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="danger" @click="handleClose()" style="width: 100%">
          提前结束签到
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<style lang="css">
.el-form-item__content {
  line-height: 16px;
}

.el-dialog__header {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
./UseCountDown.js
