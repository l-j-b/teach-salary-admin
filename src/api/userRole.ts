import { http } from "@/utils/http";
export const userRoleApi = {
  /**
   * 用户管理-批量创建用户角色关系
   * @param data
   * @returns
   */
  batchCreate: (data?: object) => {
    return http.request<any>("post", "/user-role/batch-create", { data });
  }
};
