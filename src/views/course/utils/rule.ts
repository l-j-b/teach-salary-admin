import { type FormRules } from "element-plus";

/** 课程表单验证规则 */
export const formRules = {
  name: [
    {
      required: true,
      message: "请输入课程名称",
      trigger: "blur"
    },
    {
      min: 2,
      max: 100,
      message: "课程名称长度应在 2-100 个字符之间",
      trigger: "blur"
    }
  ],
  content: [
    {
      required: false,
      max: 1000,
      message: "课程内容长度不能超过 1000 个字符",
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
  ],
  status: [
    {
      required: false,
      type: "string",
      enum: ["1", "2", "3"],
      message: "课程状态只能是 1(待开始)、2(进行中)或 3(已完成)",
      trigger: "change"
    }
  ],
  dataStatus: [
    {
      required: false,
      type: "string",
      enum: ["0", "1"],
      message: "数据状态只能是 0(禁用)或 1(启用)",
      trigger: "change"
    }
  ]
} as FormRules;