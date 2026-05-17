<script setup lang="ts">
import { reactive, ref } from "vue";
import { useFormRules } from "../utils/rule";

interface Props {
  formInline?: {
    _id?: string;
    name?: string;
    avatar?: string;
    grades?: string;
    subjects?: string[];
    hourlyfee?: number;
    parentsName?: string;
    gender?: string;
    birthday?: string;
    age?: number;
    phone?: string;
    tags?: string[];
    remarks?: string;
    email?: string;
    wechart?: string;
    address?: string;
  };
}

const props = withDefaults(defineProps<Props>(), {
  formInline: () => ({
    _id: "",
    name: "",
    avatar: "",
    grades: "",
    subjects: [],
    hourlyfee: 0,
    parentsName: "",
    gender: "male",
    birthday: "",
    age: undefined,
    phone: "",
    tags: [],
    remarks: "",
    email: "",
    wechart: "",
    address: ""
  })
});

const ruleFormRef = ref();
const newFormInline = reactive({ ...props.formInline });

const { rules } = useFormRules();

const gradeOptions = [
  { label: "一年级", value: "一年级" },
  { label: "二年级", value: "二年级" },
  { label: "三年级", value: "三年级" },
  { label: "四年级", value: "四年级" },
  { label: "五年级", value: "五年级" },
  { label: "六年级", value: "六年级" },
  { label: "七年级", value: "七年级" },
  { label: "八年级", value: "八年级" },
  { label: "九年级", value: "九年级" },
  { label: "高一", value: "高一" },
  { label: "高二", value: "高二" },
  { label: "高三", value: "高三" }
];

const genderOptions = [
  { label: "男", value: "male" },
  { label: "女", value: "female" }
];

const subjectOptions = [
  { label: "语文", value: "语文" },
  { label: "数学", value: "数学" },
  { label: "英语", value: "英语" },
  { label: "物理", value: "物理" },
  { label: "化学", value: "化学" },
  { label: "生物", value: "生物" },
  { label: "历史", value: "历史" },
  { label: "地理", value: "地理" },
  { label: "政治", value: "政治" }
];

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
    <el-form-item label="学生姓名" prop="name">
      <el-input v-model="newFormInline.name" placeholder="请输入学生姓名" />
    </el-form-item>

    <el-form-item label="性别" prop="gender">
      <el-select v-model="newFormInline.gender" placeholder="请选择性别">
        <el-option
          v-for="item in genderOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="年级" prop="grades">
      <el-select v-model="newFormInline.grades" placeholder="请选择年级">
        <el-option
          v-for="item in gradeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="辅导科目" prop="subjects">
      <el-select
        v-model="newFormInline.subjects"
        multiple
        placeholder="请选择辅导科目"
      >
        <el-option
          v-for="item in subjectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
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

    <el-form-item label="家长姓名" prop="parentsName">
      <el-input v-model="newFormInline.parentsName" placeholder="请输入家长姓名" />
    </el-form-item>

    <el-form-item label="手机号" prop="phone">
      <el-input v-model="newFormInline.phone" placeholder="请输入手机号" />
    </el-form-item>

    <el-form-item label="生日" prop="birthday">
      <el-date-picker
        v-model="newFormInline.birthday"
        type="date"
        placeholder="选择日期"
        value-format="YYYY-MM-DD"
      />
    </el-form-item>

    <el-form-item label="微信号" prop="wechart">
      <el-input v-model="newFormInline.wechart" placeholder="请输入微信号" />
    </el-form-item>

    <el-form-item label="邮箱" prop="email">
      <el-input v-model="newFormInline.email" placeholder="请输入邮箱" />
    </el-form-item>

    <el-form-item label="地址" prop="address">
      <el-input
        v-model="newFormInline.address"
        type="textarea"
        :rows="2"
        placeholder="请输入地址"
      />
    </el-form-item>

    <el-form-item label="备注" prop="remarks">
      <el-input
        v-model="newFormInline.remarks"
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