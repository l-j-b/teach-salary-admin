import { http } from "@/utils/http";

type Result = {
  code: number;
  message: string;
  data?: any;
};

type ResultTable = {
  code: number;
  message: string;
  data?: {
    list: Array<any>;
    total?: number;
    pageSize?: number;
    currentPage?: number;
  };
};

/** 获取学生列表 */
export const getStudentList = (params?: object) => {
  return http.request<ResultTable>("get", "/student", { params });
};

/** 添加学生 */
export const addStudent = (data?: object) => {
  return http.request<Result>("put", "/student/create", { data });
};

/** 删除学生 */
export const deleteStudent = (id: string) => {
  return http.request<Result>("delete", `/student/delete/${id}`);
};

/** 修改学生 */
export const updateStudent = (id: string, data?: object) => {
  return http.request<Result>("post", `/student/update/${id}`, { data });
};

/** 学生API */
export const studentApi = {
  /** 获取学生列表 */
  getList: (params?: object) => getStudentList(params),
  /** 添加学生 */
  create: (data?: object) => addStudent(data),
  /** 删除学生 */
  delete: (id: string) => deleteStudent(id),
  /** 修改学生 */
  update: (id: string, data?: object) => updateStudent(id, data)
};