import { http } from "@/utils/http";
export const roleApi = {
  /**
   * 删除角色
   * @param id
   * @returns
   */
  list: (params?: object) => {
    return http.request<any>("get", "/role", { params });
  },
  /**
   * 删除角色
   * @param id
   * @returns
   */
  delete: (id: string) => {
    return http.request<any>("delete", "/role/delete/" + id);
  },
  /**
   * 添加角色
   * @param data
   * @returns
   */
  create: (data?: object) => {
    return http.request<any>("put", "/role/create", { data });
  },
  /**
   * 更新角色
   * @param id
   * @param data
   * @returns
   */
  update: (id: string, data?: object) => {
    return http.request<any>("post", "/role/update/" + id, { data });
  }
};
