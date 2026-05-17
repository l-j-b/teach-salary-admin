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

export enum CheckoutStatus {
  PENDING = 0,
  COMPLETED = 1,
  CANCELLED = 2
}

export interface CheckoutItem {
  _id?: string;
  title?: string;
  type?: string;
  totalFee?: number;
  totalHour?: number;
  beginDateTime?: string;
  endDateTime?: string;
  createDateTime?: string;
  status?: CheckoutStatus;
}

export interface StudentCheckoutItem {
  studentId: string;
  studentName: string;
  groupId?: string;
  sectionCount: number;
  totalFee: number;
  totalHour: number;
  hourlyfee: number;
}

export interface CourseCheckoutItem {
  courseId: string;
  courseName: string;
  sectionCount: number;
  studentCount: number;
  totalFee: number;
  totalHour: number;
  hourlyfee: number;
}

export interface SectionCheckoutItem {
  sectionId: string;
  sectionName: string;
  content?: string;
  beginDateTime?: string;
  endDateTime?: string;
  studentCount: number;
  studentNames?: string;
  totalFee: number;
  totalHour: number;
  hourlyfee: number;
}

export interface CourseDetailItem {
  sectionId: string;
  sectionName: string;
  studentCount: number;
  studentIdList?: string;
  totalFee: number;
  totalHour: number;
  hourlyfee: number;
}

/** 获取结算列表 */
export const getCheckoutList = (params?: object) => {
  return http.request<ResultTable>("get", "/busCheckout/list", { params });
};

/** 获取结算详情 */
export const getCheckoutDetail = (id: string) => {
  return http.request<Result>("get", `/busCheckout/detail/${id}`);
};

/** 创建结算 */
export const createCheckout = (data?: object) => {
  return http.request<Result>("post", "/busCheckout/create", data);
};

/** 更新结算 */
export const updateCheckout = (id: string, data?: object) => {
  return http.request<Result>("post", `/busCheckout/update/${id}`, data);
};

/** 删除结算 */
export const deleteCheckout = (id: string) => {
  return http.request<Result>("delete", `/busCheckout/delete/${id}`);
};

/** 执行结算 */
export const executeCheckout = (params: { beginDateTime: string; endDateTime: string; title?: string }) => {
  return http.request<Result>("post", "/busCheckout/checkout", params);
};

/** 获取学生结算列表 */
export const getStudentCheckoutList = (params: object) => {
  return http.request<Result>("get", "/busCheckout/studentList", params);
};

/** 获取课程结算列表 */
export const getCourseCheckoutList = (params: object) => {
  return http.request<Result>("get", "/busCheckout/courseList", params);
};

/** 获取课节结算列表 */
export const getSectionCheckoutList = (params: object) => {
  return http.request<Result>("get", "/busCheckout/sectionList", params);
};

/** 获取课程结算详情 */
export const getCourseCheckoutDetail = (params: object) => {
  return http.request<Result>("get", "/busCheckout/courseDetail", params);
};

/** 结算API */
export const checkoutApi = {
  /** 获取结算列表 */
  getList: (params?: object) => getCheckoutList(params),
  /** 获取结算详情 */
  getDetail: (id: string) => getCheckoutDetail(id),
  /** 创建结算 */
  create: (data?: object) => createCheckout(data),
  /** 更新结算 */
  update: (id: string, data?: object) => updateCheckout(id, data),
  /** 删除结算 */
  delete: (id: string) => deleteCheckout(id),
  /** 执行结算 */
  execute: (params: { beginDateTime: string; endDateTime: string; title?: string }) => executeCheckout(params),
  /** 获取学生结算 */
  getStudentList: (params: object) => getStudentCheckoutList(params),
  /** 获取课程结算 */
  getCourseList: (params: object) => getCourseCheckoutList(params),
  /** 获取课节结算 */
  getSectionList: (params: object) => getSectionCheckoutList(params),
  /** 获取课程结算详情 */
  getCourseDetail: (params: object) => getCourseCheckoutDetail(params)
};