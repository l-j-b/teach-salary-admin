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

/** 获取分组列表 */
export const getGroupList = (params?: object) => {
  return http.request<ResultTable>("get", "/group", { params });
};

/** 添加分组 */
export const addGroup = (data?: object) => {
  return http.request<Result>("post", "/group/create", { data });
};

/** 删除分组 */
export const deleteGroup = (id: string) => {
  return http.request<Result>("delete", `/group/delete/${id}`);
};

/** 修改分组 */
export const updateGroup = (id: string, data?: object) => {
  return http.request<Result>("put", `/group/update/${id}`, { data });
};

/** 分组API */
export const groupApi = {
  /** 获取分组列表 */
  getList: (params?: object) => getGroupList(params),
  /** 添加分组 */
  create: (data?: object) => addGroup(data),
  /** 删除分组 */
  delete: (id: string) => deleteGroup(id),
  /** 修改分组 */
  update: (id: string, data?: object) => updateGroup(id, data)
};