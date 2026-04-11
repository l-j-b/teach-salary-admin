import { type FormRules } from "element-plus";

/** 学生表单验证规则 */
export const formRules = {
  name: [
    {
      required: true,
      message: "请输入学生姓名",
      trigger: "blur"
    },
    {
      min: 2,
      max: 20,
      message: "姓名长度应在 2-20 个字符之间",
      trigger: "blur"
    }
  ],
  gender: [
    {
      required: false,
      message: "请选择性别",
      trigger: "change"
    }
  ],
  phone: [
    {
      required: false,
      pattern: /^1[3-9]\d{9}$/,
      message: "请输入正确的手机号码",
      trigger: "blur"
    }
  ],
  email: [
    {
      required: false,
      type: "email",
      message: "请输入正确的邮箱地址",
      trigger: "blur"
    }
  ],
  age: [
    {
      required: false,
      type: "number",
      min: 0,
      max: 100,
      message: "年龄应在 0-100 之间",
      trigger: "blur"
    }
  ],
  status: [
    {
      required: false,
      type: "number",
      enum: [1, 0],
      message: "状态只能是 1(启用) 或 0(禁用)",
      trigger: "change"
    }
  ]
} as FormRules;