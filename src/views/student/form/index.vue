<script setup lang="ts">
import { ref, onMounted } from "vue";
import ReCol from "@/components/ReCol";
import { formRules } from "../utils/rule";
import { FormItemProps } from "../utils/types";
import { groupApi } from "@/api/group";

const props = withDefaults(
  defineProps<{
    formInline?: FormItemProps;
  }>(),
  {
    formInline: () => ({
      id: "",
      name: "",
      gender: "",
      avatar: "",
      birthday: "",
      age: 0,
      tags: "",
      grades: "",
      phone: "",
      remarks: "",
      wechart: "",
      address: "",
      email: "",
      status: 1,
      groupId: ""
    })
  }
);

const ruleFormRef = ref();
const newFormInline = ref(props.formInline);
const groupList = ref([]);
const loading = ref(false);

// 获取分组列表
async function getGroupList() {
  loading.value = true;
  try {
    const res = await groupApi.getAllList();
    if (res.code === 20000) {
      groupList.value = res.data || [];
    }
  } catch (error) {
    console.error("获取分组列表失败:", error);
  } finally {
    loading.value = false;
  }
}

// 组件挂载时获取分组列表
onMounted(() => {
  getGroupList();
});

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
      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="学生姓名" prop="name">
          <el-input
            v-model="newFormInline.name"
            clearable
            placeholder="请输入学生姓名"
          />
        </el-form-item>
      </re-col>

      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="性别" prop="gender">
          <el-select
            v-model="newFormInline.gender"
            placeholder="请选择性别"
            clearable
          >
            <el-option label="男" value="1" />
            <el-option label="女" value="2" />
            <el-option label="未知" value="0" />
          </el-select>
        </el-form-item>
      </re-col>

      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="年龄" prop="age">
          <el-input-number
            v-model="newFormInline.age"
            class="w-full!"
            :min="0"
            :max="100"
            controls-position="right"
          />
        </el-form-item>
      </re-col>

      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="年级" prop="grades">
          <el-input
            v-model="newFormInline.grades"
            clearable
            placeholder="请输入年级"
          />
        </el-form-item>
      </re-col>

      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="手机号码" prop="phone">
          <el-input
            v-model="newFormInline.phone"
            clearable
            placeholder="请输入手机号码"
          />
        </el-form-item>
      </re-col>

      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="邮箱" prop="email">
          <el-input
            v-model="newFormInline.email"
            clearable
            placeholder="请输入邮箱"
          />
        </el-form-item>
      </re-col>

      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="微信" prop="wechart">
          <el-input
            v-model="newFormInline.wechart"
            clearable
            placeholder="请输入微信"
          />
        </el-form-item>
      </re-col>

      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="生日" prop="birthday">
          <el-date-picker
            v-model="newFormInline.birthday"
            type="date"
            placeholder="选择生日"
            value-format="YYYY-MM-DD"
          />
        </el-form-item>
      </re-col>

      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="标签" prop="tags">
          <el-input
            v-model="newFormInline.tags"
            clearable
            placeholder="请输入标签"
          />
        </el-form-item>
      </re-col>

      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="分组" prop="groupId">
          <el-select
            v-model="newFormInline.groupId"
            clearable
            placeholder="请选择分组"
            :loading="loading"
          >
            <el-option
              v-for="group in groupList"
              :key="group._id"
              :label="group.name"
              :value="group._id"
            />
          </el-select>
        </el-form-item>
      </re-col>

      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="状态" prop="status">
          <el-switch
            v-model="newFormInline.status"
            :active-value="1"
            :inactive-value="0"
            active-text="启用"
            inactive-text="禁用"
            inline-prompt
          />
        </el-form-item>
      </re-col>

      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="头像" prop="avatar">
          <el-input
            v-model="newFormInline.avatar"
            clearable
            placeholder="请输入头像URL"
          />
        </el-form-item>
      </re-col>

      <re-col :value="24" :xs="24" :sm="24">
        <el-form-item label="地址" prop="address">
          <el-input
            v-model="newFormInline.address"
            clearable
            placeholder="请输入地址"
            type="textarea"
            :rows="2"
          />
        </el-form-item>
      </re-col>

      <re-col :value="24" :xs="24" :sm="24">
        <el-form-item label="备注" prop="remarks">
          <el-input
            v-model="newFormInline.remarks"
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
