export function useFormRules() {
  const validatePhone = (rule: any, value: any, callback: any) => {
    if (value && !/^1[3-9]\d{9}$/.test(value)) {
      callback(new Error("请输入正确的手机号"));
    } else {
      callback();
    }
  };

  const validateEmail = (rule: any, value: any, callback: any) => {
    if (value && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      callback(new Error("请输入正确的邮箱"));
    } else {
      callback();
    }
  };

  const rules = {
    name: [{ required: true, message: "请输入学生姓名", trigger: "blur" }],
    gender: [{ required: true, message: "请选择性别", trigger: "change" }],
    grades: [{ required: true, message: "请选择年级", trigger: "change" }],
    hourlyfee: [{ required: true, message: "请输入课时费", trigger: "blur" }],
    phone: [{ validator: validatePhone, trigger: "blur" }],
    email: [{ validator: validateEmail, trigger: "blur" }]
  };

  return { rules };
}