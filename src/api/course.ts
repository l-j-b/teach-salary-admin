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

/** 获取课程列表 */
export const getCourseList = (params?: object) => {
  return http.request<ResultTable>("get", "/course", { params });
};

/** 添加课程 */
export const addCourse = (data?: object) => {
  return http.request<Result>("post", "/course/create", { data });
};

/** 删除课程 */
export const deleteCourse = (id: string) => {
  return http.request<Result>("delete", `/course/delete/${id}`);
};

/** 修改课程 */
export const updateCourse = (id: string, data?: object) => {
  return http.request<Result>("put", `/course/update/${id}`, { data });
};

/** 课程API */
export const courseApi = {
  /** 获取课程列表 */
  getList: (params?: object) => getCourseList(params),
  /** 添加课程 */
  create: (data?: object) => addCourse(data),
  /** 删除课程 */
  delete: (id: string) => deleteCourse(id),
  /** 修改课程 */
  update: (id: string, data?: object) => updateCourse(id, data)
};