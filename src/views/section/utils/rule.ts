export function useFormRules() {
  const rules = {
    name: [{ required: true, message: "请输入课节名称", trigger: "blur" }],
    courseId: [{ required: true, message: "请选择课程", trigger: "change" }],
    beginDateTime: [
      { required: true, message: "请选择开始时间", trigger: "change" }
    ],
    endDateTime: [
      { required: true, message: "请选择结束时间", trigger: "change" }
    ]
  };

  return { rules };
}
