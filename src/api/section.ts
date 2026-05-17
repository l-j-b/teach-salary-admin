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

export enum SectionStatus {
  PENDING = 2,
  COMPLETED = 3,
  LEAVE = 5
}

export interface SectionItem {
  _id?: string;
  id?: string;
  name?: string;
  courseId?: string;
  courseName?: string;
  studentId?: string[];
  studentName?: string;
  beginDateTime?: string;
  endDateTime?: string;
  hourlyfee?: number;
  totalHours?: number;
  totalFee?: number;
  status?: SectionStatus | number;
  remark?: string;
  notes?: string;
  scores?: { studentId: string; score: number }[];
  evaluations?: { studentId: string; content: string }[];
  createDate?: string;
  updateDate?: string;
  userId?: string;
}

export interface CreateSectionParams {
  name: string;
  courseId: string;
  studentId?: string | string[];
  beginDateTime: string;
  endDateTime: string;
  hourlyfee?: number;
  remark?: string;
}

export interface UpdateSectionParams {
  name?: string;
  courseId?: string;
  studentId?: string | string[];
  beginDateTime?: string;
  endDateTime?: string;
  hourlyfee?: number;
  remark?: string;
}

export interface UpdateSectionStatusParams {
  id: string;
  status: SectionStatus | number;
  leaveReason?: string;
}

/** 获取课节列表 */
export const getSectionList = (params?: object) => {
  return http.request<ResultTable>("get", "/section", { params });
};

/** 获取课节详情 */
export const getSectionDetail = (id: string, param?: object) => {
  return http.request<Result>("get", `/section/detail/${id}`, param);
};

/** 获取课节详情（含课程+收入） */
export const getSectionWithDetail = (id: string) => {
  return http.request<Result>("get", `/section/getDetail/${id}`);
};

/** 创建课节 */
export const createSection = (data?: object) => {
  return http.request<Result>("post", "/section/create", data);
};

/** 更新课节 */
export const updateSection = (id: string, data?: object) => {
  return http.request<Result>("put", `/section/update/${id}`, data);
};

/** 删除课节 */
export const deleteSection = (id: string) => {
  return http.request<Result>("delete", `/section/delete/${id}`);
};

/** 获取需要取消的课节数量 */
export const getCancelSectionCount = () => {
  return http.request<Result>("get", "/section/getCancelSectionCount");
};

/** 获取最近课节列表 */
export const recSectionList = () => {
  return http.request<Result>("get", "/section/recSectionList");
};

/** 获取日程安排 */
export const getSectionSchedule = (beginDateTime: string, endDateTime: string) => {
  return http.request<Result>("get", "/section/getSectionSchedule", { beginDateTime, endDateTime });
};

/** 获取课节学生列表 */
export const getSectionStudents = (sectionId: string) => {
  return http.request<Result>("get", "/section/getSectionStudents", { sectionId });
};

/** 批量删除课节 */
export const batchDeleteSection = (ids: string[]) => {
  return http.request<Result>("post", "/section/batchDelete", { idArr: ids });
};

/** 批量添加课节 */
export const batchAddSection = (courseId: string, sections: Partial<SectionItem>[]) => {
  return http.request<Result>("put", "/section/batchAdd", { courseId, sections });
};

/** 添加课堂笔记 */
export const addSectionNotes = (sectionId: string, notes: string) => {
  return http.request<Result>("post", "/section/addNotes", { sectionId, notes });
};

/** 更新课节状态 */
export const updateSectionStatus = (params: UpdateSectionStatusParams) => {
  return http.request<Result>("post", "/section/updateStatus", params);
};

/** 课节API */
export const sectionApi = {
  /** 获取课节列表 */
  getList: (params?: object) => getSectionList(params),
  /** 获取课节详情 */
  getDetail: (id: string, param?: object) => getSectionDetail(id, param),
  /** 获取课节详情（含课程收入） */
  getWithDetail: (id: string) => getSectionWithDetail(id),
  /** 创建课节 */
  create: (data?: object) => createSection(data),
  /** 更新课节 */
  update: (id: string, data?: object) => updateSection(id, data),
  /** 删除课节 */
  delete: (id: string) => deleteSection(id),
  /** 获取取消课节数量 */
  getCancelCount: () => getCancelSectionCount(),
  /** 获取最近课节 */
  getRecList: () => recSectionList(),
  /** 获取日程安排 */
  getSchedule: (begin: string, end: string) => getSectionSchedule(begin, end),
  /** 获取课节学生 */
  getStudents: (sectionId: string) => getSectionStudents(sectionId),
  /** 批量删除 */
  batchDelete: (ids: string[]) => batchDeleteSection(ids),
  /** 批量添加 */
  batchAdd: (courseId: string, sections: Partial<SectionItem>[]) => batchAddSection(courseId, sections),
  /** 添加笔记 */
  addNotes: (sectionId: string, notes: string) => addSectionNotes(sectionId, notes),
  /** 更新状态 */
  updateStatus: (params: UpdateSectionStatusParams) => updateSectionStatus(params)
};