import { http } from "@/utils/http";
export const menuApi = {
  /**
   * 获取菜单管理列表
   * @param params
   * @returns
   */
  list: (params?: object) => {
    return http.request<any>("get", "/menu", { params });
  },
  /**
   * 删除菜单
   * @param id
   * @returns
   */
  delete: (id: string) => {
    return http.request<any>("delete", "/menu/delete/" + id);
  },
  /**
   * 添加菜单
   * @param data
   * @returns
   */
  create: (data?: object) => {
    return http.request<any>("put", "/menu/create", { data });
  },
  /**
   * 更新菜单
   * @param id
   * @param data
   * @returns
   */
  update: (id: string, data?: object) => {
    return http.request<any>("post", "/menu/update/" + id, { data });
  }
};
