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

export enum Gender {
  MALE = "male",
  FEMALE = "female"
}

export enum StudentGrade {
  GRADE_1 = "一年级",
  GRADE_2 = "二年级",
  GRADE_3 = "三年级",
  GRADE_4 = "四年级",
  GRADE_5 = "五年级",
  GRADE_6 = "六年级",
  GRADE_7 = "七年级",
  GRADE_8 = "八年级",
  GRADE_9 = "九年级",
  GRADE_10 = "高一",
  GRADE_11 = "高二",
  GRADE_12 = "高三"
}

export interface StudentItem {
  _id?: string;
  name?: string;
  avatar?: string;
  grades?: string;
  subjects?: string[];
  hourlyfee?: number;
  parentsName?: string;
  gender?: Gender | string;
  birthday?: string;
  age?: number;
  phone?: string;
  tags?: string[];
  remarks?: string;
  email?: string;
  wechart?: string;
  address?: string;
  userId?: string;
}

export interface StudentStatusItem {
  grade: string;
  gradeName: string;
  count: number;
}

/** 获取学生列表 */
export const getStudentList = (params?: object) => {
  return http.request<ResultTable>("get", "/student", { params });
};

/** 获取学生详情 */
export const getStudentDetail = (id: string) => {
  return http.request<Result>("get", `/student/detail/${id}`);
};

/** 创建学生 */
export const createStudent = (data?: object) => {
  return http.request<Result>("put", "/student/create", { data });
};

/** 更新学生 */
export const updateStudent = (id: string, data?: object) => {
  return http.request<Result>("post", `/student/update/${id}`, { data });
};

/** 删除学生 */
export const deleteStudent = (id: string) => {
  return http.request<Result>("delete", `/student/delete/${id}`);
};

/** 批量获取学生 */
export const getStudentsByIds = (ids: string[]) => {
  return http.request<Result>("post", "/student/getByIds", { ids });
};

/** 获取学生状态统计 */
export const getStudentStatusList = () => {
  return http.request<Result>("get", "/student/getStatusList");
};

/** 学生API */
export const studentApi = {
  /** 获取学生列表 */
  getList: (params?: object) => getStudentList(params),
  /** 获取学生详情 */
  getDetail: (id: string) => getStudentDetail(id),
  /** 创建学生 */
  create: (data?: object) => createStudent(data),
  /** 更新学生 */
  update: (id: string, data?: object) => updateStudent(id, data),
  /** 删除学生 */
  delete: (id: string) => deleteStudent(id),
  /** 批量获取学生 */
  getByIds: (ids: string[]) => getStudentsByIds(ids),
  /** 获取学生状态统计 */
  getStatusList: () => getStudentStatusList()
};