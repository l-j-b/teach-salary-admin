import type { FormRules } from "element-plus";

/** 分组表单验证规则 */
export const formRules = {
  name: [
    {
      required: true,
      message: "请输入分组名称",
      trigger: "blur"
    },
    {
      min: 2,
      max: 50,
      message: "分组名称长度应在 2-50 个字符之间",
      trigger: "blur"
    }
  ],
  sort: [
    {
      required: false,
      type: "number",
      min: 0,
      message: "排序值必须是非负数",
      trigger: "blur"
    }
  ],
  remark: [
    {
      required: false,
      max: 200,
      message: "备注长度不能超过 200 个字符",
      trigger: "blur"
    }
  ]
} as FormRules;
