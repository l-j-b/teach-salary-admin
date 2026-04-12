<script setup lang="ts">
import { ref } from "vue";
import ReCol from "@/components/ReCol";
import { formRules } from "../utils/rule";
import { FormItemProps } from "../utils/types";

const props = withDefaults(
  defineProps<{
    formInline?: FormItemProps;
  }>(),
  {
    formInline: () => ({
      id: "",
      name: "",
      content: "",
      studentId: [],
      remark: "",
      status: "1",
      dataStatus: "1"
    })
  }
);

const ruleFormRef = ref();
const newFormInline = ref(props.formInline);

function getRef() {
  return ruleFormRef.value;
}

defineExpose({ getRef });
</script>

<template>
  <el-form
    ref="ruleFormRef"
    :model="newFormInline"
    :rules="formRules"
    label-width="82px"
  >
    <el-row :gutter="30">
      <re-col :value="24" :xs="24" :sm="24">
        <el-form-item label="课程名称" prop="name">
          <el-input
            v-model="newFormInline.name"
            clearable
            placeholder="请输入课程名称"
          />
        </el-form-item>
      </re-col>

      <re-col :value="24" :xs="24" :sm="24">
        <el-form-item label="课程内容" prop="content">
          <el-input
            v-model="newFormInline.content"
            clearable
            placeholder="请输入课程内容"
            type="textarea"
            :rows="4"
          />
        </el-form-item>
      </re-col>

      <re-col :value="24" :xs="24" :sm="24">
        <el-form-item label="学生标识集合" prop="studentId">
          <el-input
            v-model="newFormInline.studentId"
            clearable
            placeholder="请输入学生ID，多个ID用逗号分隔"
          />
          <div class="text-xs text-gray-400 mt-1">
            多个学生ID请用逗号分隔，例如：1,2,3
          </div>
        </el-form-item>
      </re-col>

      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="课程状态" prop="status">
          <el-radio-group v-model="newFormInline.status">
            <el-radio :label="1">待开始</el-radio>
            <el-radio :label="2">进行中</el-radio>
            <el-radio :label="3">已完成</el-radio>
          </el-radio-group>
        </el-form-item>
      </re-col>

      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="数据状态" prop="dataStatus">
          <el-radio-group v-model="newFormInline.dataStatus">
            <el-radio :label="1">启用</el-radio>
            <el-radio :label="0">禁用</el-radio>
          </el-radio-group>
        </el-form-item>
      </re-col>

      <re-col :value="24" :xs="24" :sm="24">
        <el-form-item label="备注" prop="remark">
          <el-input
            v-model="newFormInline.remark"
            clearable
            placeholder="请输入备注"
            type="textarea"
            :rows="3"
          />
        </el-form-item>
      </re-col>
    </el-row>
  </el-form>
</template>
