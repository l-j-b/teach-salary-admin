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

export enum ScheduleStatus {
  PENDING = 1,
  COMPLETED = 2,
  CANCELLED = 0,
  RESERVED = 3
}

export interface ScheduleItem {
  _id: string;
  sectionId?: string;
  studentId?: string[];
  status: ScheduleStatus;
  beginDateTime: string;
  endDateTime: string;
  hourlyfee?: number;
  totalFee?: number;
  totalHour?: number;
  checkout?: number;
  checkoutId?: string;
  dataStatus?: number;
  userId?: string;
  leaveReason?: string;
  sectionName?: string;
  studentName?: string;
  subject?: string;
  courseId?: string;
  teachMode?: number;
  repeatMode?: number;
}

export interface CreateScheduleParams {
  sectionId: string;
  studentId: string | string[];
  beginDateTime: string;
  endDateTime: string;
  hourlyfee?: number;
}

export interface UpdateScheduleParams {
  sectionId?: string;
  studentId?: string | string[];
  beginDateTime?: string;
  endDateTime?: string;
  hourlyfee?: number;
  status?: number;
}

export interface UpdateStatusParams {
  id: string;
  status: number;
}

/** 获取排课列表 */
export const getScheduleList = (params?: object) => {
  return http.request<ResultTable>("get", "/schedule", { params });
};

/** 获取排课详情 */
export const getScheduleDetail = (id: string) => {
  return http.request<Result>("get", `/schedule/detail/${id}`);
};

/** 获取排课详情（含学生信息） */
export const getScheduleDetailWithStudents = (id: string) => {
  return http.request<Result>("get", `/schedule/getDetail/${id}`);
};

/** 创建排课 */
export const createSchedule = (data?: object) => {
  return http.request<Result>("post", "/schedule/create", { data });
};

/** 更新排课 */
export const updateSchedule = (id: string, data?: object) => {
  return http.request<Result>("post", `/schedule/update/${id}`, { data });
};

/** 删除排课 */
export const deleteSchedule = (id: string) => {
  return http.request<Result>("delete", `/schedule/delete/${id}`);
};

/** 更新排课状态 */
export const updateScheduleStatus = (params: UpdateStatusParams) => {
  return http.request<Result>("post", "/schedule/updateStatus", params);
};

/** 获取最近课程安排列表 */
export const getRecCoursesList = () => {
  return http.request<Result>("get", "/schedule/recCoursesList");
};

/** 获取课程日程（日历视图） */
export const getCourseSchedule = (beginDateTime: string, endDateTime: string) => {
  return http.request<Result>("get", "/schedule/getCourseSchedule", { beginDateTime, endDateTime });
};

/** 获取课程学生列表 */
export const getCourseStudents = (courseId: string) => {
  return http.request<Result>("get", "/schedule/getCourseStudents", { courseId });
};

/** 获取课节学生列表（含评分） */
export const getSectionStudents = (sectionId: string) => {
  return http.request<Result>("get", "/schedule/getSectionStudents", { sectionId });
};

/** 批量更新排课 */
export const batchUpdateSchedule = (params: { ids?: string[]; where?: object; data: object }) => {
  return http.request<Result>("post", "/schedule/batchUpdate", params);
};

/** 批量删除排课 */
export const batchDeleteSchedule = (ids: string[]) => {
  return http.request<Result>("post", "/schedule/batchDelete", { idArr: ids });
};

/** 批量添加排课 */
export const batchAddSchedule = (schedules: Partial<ScheduleItem>[]) => {
  return http.request<Result>("post", "/schedule/batchAdd", { scheduleArr: schedules });
};

/** 查询结算数据 */
export const searchCalcData = (params?: object) => {
  return http.request<Result>("get", "/schedule/searchCalcData", { params });
};

/** 排课API */
export const scheduleApi = {
  /** 获取排课列表 */
  getList: (params?: object) => getScheduleList(params),
  /** 获取排课详情 */
  getDetail: (id: string) => getScheduleDetail(id),
  /** 获取排课详情（含学生） */
  getDetailWithStudents: (id: string) => getScheduleDetailWithStudents(id),
  /** 创建排课 */
  create: (data?: object) => createSchedule(data),
  /** 更新排课 */
  update: (id: string, data?: object) => updateSchedule(id, data),
  /** 删除排课 */
  delete: (id: string) => deleteSchedule(id),
  /** 更新状态 */
  updateStatus: (params: UpdateStatusParams) => updateScheduleStatus(params),
  /** 获取最近课程 */
  getRecCourses: () => getRecCoursesList(),
  /** 获取课程日程 */
  getCourseSchedule: (begin: string, end: string) => getCourseSchedule(begin, end),
  /** 获取课程学生 */
  getCourseStudents: (courseId: string) => getCourseStudents(courseId),
  /** 获取课节学生 */
  getSectionStudents: (sectionId: string) => getSectionStudents(sectionId),
  /** 批量更新 */
  batchUpdate: (params: { ids?: string[]; where?: object; data: object }) => batchUpdateSchedule(params),
  /** 批量删除 */
  batchDelete: (ids: string[]) => batchDeleteSchedule(ids),
  /** 批量添加 */
  batchAdd: (schedules: Partial<ScheduleItem>[]) => batchAddSchedule(schedules),
  /** 查询结算数据 */
  searchCalcData: (params?: object) => searchCalcData(params)
};