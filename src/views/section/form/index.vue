<script setup lang="ts">
import { reactive, ref } from "vue";
import { useFormRules } from "../utils/rule";

interface Props {
  formInline?: {
    _id?: string;
    name?: string;
    courseId?: string;
    courseName?: string;
    studentId?: string[];
    studentName?: string;
    beginDateTime?: string;
    endDateTime?: string;
    hourlyfee?: number;
    totalHours?: number;
    totalFee?: number;
    status?: number;
    remark?: string;
    notes?: string;
  };
}

const props = withDefaults(defineProps<Props>(), {
  formInline: () => ({
    _id: "",
    name: "",
    courseId: "",
    courseName: "",
    studentId: [],
    studentName: "",
    beginDateTime: "",
    endDateTime: "",
    hourlyfee: 0,
    totalHours: 0,
    totalFee: 0,
    status: 2,
    remark: "",
    notes: ""
  })
});

const ruleFormRef = ref();
const newFormInline = reactive({ ...props.formInline });

const { rules } = useFormRules();

function getRef() {
  return ruleFormRef.value;
}

defineExpose({ getRef, newFormInline });
</script>

<template>
  <el-form
    ref="ruleFormRef"
    :model="newFormInline"
    :rules="rules"
    label-width="100px"
  >
    <el-form-item label="课节名称" prop="name">
      <el-input v-model="newFormInline.name" placeholder="请输入课节名称" />
    </el-form-item>

    <el-form-item label="课程ID" prop="courseId">
      <el-input v-model="newFormInline.courseId" placeholder="请输入课程ID" />
    </el-form-item>

    <el-form-item label="开始时间" prop="beginDateTime">
      <el-date-picker
        v-model="newFormInline.beginDateTime"
        type="datetime"
        placeholder="选择开始时间"
        value-format="YYYY-MM-DD HH:mm:ss"
      />
    </el-form-item>

    <el-form-item label="结束时间" prop="endDateTime">
      <el-date-picker
        v-model="newFormInline.endDateTime"
        type="datetime"
        placeholder="选择结束时间"
        value-format="YYYY-MM-DD HH:mm:ss"
      />
    </el-form-item>

    <el-form-item label="课时费" prop="hourlyfee">
      <el-input-number
        v-model="newFormInline.hourlyfee"
        :min="0"
        :precision="2"
        :step="10"
        controls-position="right"
      />
      <span class="ml-2 text-gray-500">元/小时</span>
    </el-form-item>

    <el-form-item label="备注" prop="remark">
      <el-input
        v-model="newFormInline.remark"
        type="textarea"
        :rows="2"
        placeholder="请输入备注"
      />
    </el-form-item>
  </el-form>
</template>

<style scoped>
:deep(.el-input-number) {
  width: 200px;
}
</style>
