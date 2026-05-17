export function useFormRules() {
  const rules = {
    sectionId: [{ required: true, message: "请选择课节", trigger: "change" }],
    studentId: [{ required: true, message: "请选择学生", trigger: "change" }],
    beginDateTime: [{ required: true, message: "请选择开始时间", trigger: "change" }],
    endDateTime: [{ required: true, message: "请选择结束时间", trigger: "change" }]
  };

  return { rules };
}