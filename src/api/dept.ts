import { http } from "@/utils/http";
export const deptApi = {
  /**
   * 删除部门
   * @param id
   * @returns
   */
  list: (params?: object) => {
    return http.request<any>("get", "/dept", { params });
  },
  /**
   * 删除部门
   * @param id
   * @returns
   */
  delete: (id: string) => {
    return http.request<any>("delete", "/dept/delete/" + id);
  },
  /**
   * 添加部门
   * @param data
   * @returns
   */
  create: (data?: object) => {
    return http.request<any>("put", "/dept/create", { data });
  },
  /**
   * 更新部门
   * @param id
   * @param data
   * @returns
   */
  update: (id: string, data?: object) => {
    return http.request<any>("post", "/dept/update/" + id, { data });
  }
};
