<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
interface DialogProps {
    open: boolean
    mode: 'add' | 'change'
}
const props = defineProps<DialogProps>()
const open = ref<boolean>(false)
watch(
    () => props.open,
    (newOpenValue: boolean) => {
        open.value = newOpenValue
    }
)
const radio = ref('位置签到')

const options = [
    {
        value: "网站运维部",
        label: "网站运维部"
    },
    {
        value: "网络运维部",
        label: "网络运维部"
    },
    {
        value: "信息化运维部",
        label: "信息化运维部"
    },
    {
        value: "行政秘书部",
        label: "行政秘书部"
    }
]
const times=[
    {
      value: "10",
      label: "10分钟"
    },
    {
      value: "30",
      label: "30分钟"
    },
    {
      value: "60",
      label: "60分钟"
    },
    {
      value: "90",
      label: "90分钟"
    }
]
const form = reactive({
    title: '',
    department_title: [],
    radio:radio,
    time:[]
})
const formRef = ref()

const emit = defineEmits<{ close: [], complete: [] }>()

const handleClose = () => {
    ElMessageBox.confirm('确定取消签到吗?',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        })
        .then(() => {
            ElMessage({
                type: 'warning',
                message: '重新编辑签到',
            })
            formRef.value?.resetFields()
            emit('close')
        })
        .catch(() => {
            //catch error
        })
}
const submitForm = () => {
    formRef?.value?.validate((valid: any, _fields: any) => {
        if (valid) {
            if (props.mode === 'add') {
                ElMessage({
                    type: 'success',
                    message: '开始签到',
                })
                emit('close')
                formRef.value?.resetFields()
            }
        }
    })
}
</script>
<template>
    <el-dialog v-model="open" :before-close="handleClose" style="background-color: #f0f1f2;width: 285px;" custom-class="dialog-title">
        <template #header>
            <span class="el-dialog__title">
                <p>编辑签到</p>
            </span>
        </template>
        <el-form ref="formRef" :model="form">
            <el-form-item prop="title">
                <el-input placeholder="请输入活动标题" v-model="form.title" class="w-50 b-none b-rd-3 overflow-hidden" />
            </el-form-item>
            <el-form-item prop="radio">
                <div class="w-full h-17 bg-white b-rd-3 flex flex-justify-center items-center">
                    <el-radio-group v-model="form.radio">
                        <div>
                            <el-radio-button label="位置签到" class="mr-5"/>
                        </div>
                        <div>
                            <el-radio-button label="二维码签到" />
                        </div>
                    </el-radio-group>
                </div>
            </el-form-item>
            <el-form-item prop="time">
                <el-select v-model="form.time" placeholder="活动时长" class="w-full">
                    <el-option v-for="item in times" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item prop="department_title">
                <el-select v-model="form.department_title" multiple placeholder="参与签到的部门" class="w-full">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="submitForm()" style="width: 100%;">
                    开始签到
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
<style lang="css">
.dialog-title .el-dialog__header {
    background-color: #2967cc;
    margin-right: 0px;

    .el-dialog__title,
    .el-dialog__close {
        color: #ffffff;
    }
}

.el-input .el-input__wrapper {
    box-shadow: none;
}
.el-radio-button__inner{
    color: #2967cc;
    border:2px solid #2967cc !important;
    border-radius: 5px !important;
    width: 96px;
}
.el-radio-button__original-radio:checked+.el-radio-button__inner{
    box-shadow: none;
    background-color: #2967cc;
}
.el-form-item{
    margin-bottom: 10px;
}
.el-radio-group{
    justify-content: center;
}
</style>