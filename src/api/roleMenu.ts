import { http } from "@/utils/http";
export const roleMenuApi = {
  /**
   * 批量创建角色菜单
   * @param data
   * @returns
   */
  batchCreate: (data?: object) => {
    return http.request<any>("post", "/role-menu/batch-create", { data });
  }
};
