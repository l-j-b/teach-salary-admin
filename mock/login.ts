// 根据角色动态生成路由
import { defineFakeRoute } from "vite-plugin-fake-server/client";

export default defineFakeRoute([
  {
<<<<<<< HEAD
    url: "/v1/login/in",
    method: "put",
    response: ({ body }) => {
      if (body.username === "admin") {
        return {
          code: 20000,
=======
    url: "/login",
    method: "post",
    response: ({ body }) => {
      if (body.username === "admin") {
        return {
          code: 0,
>>>>>>> 48e266b4e34226a4569d088cc16c1a27abf08e4e
          message: "操作成功",
          data: {
            avatar: "https://avatars.githubusercontent.com/u/44761321",
            username: "admin",
            nickname: "小铭",
            // 一个用户可能有多个角色
            roles: ["admin"],
            // 按钮级别权限
            permissions: ["*:*:*"],
            accessToken: "eyJhbGciOiJIUzUxMiJ9.admin",
            refreshToken: "eyJhbGciOiJIUzUxMiJ9.adminRefresh",
            expires: "2030/10/30 00:00:00"
          }
        };
      } else {
        return {
<<<<<<< HEAD
          code: 20000,
=======
          code: 0,
>>>>>>> 48e266b4e34226a4569d088cc16c1a27abf08e4e
          message: "操作成功",
          data: {
            avatar: "https://avatars.githubusercontent.com/u/52823142",
            username: "common",
            nickname: "小林",
            roles: ["common"],
            permissions: ["permission:btn:add", "permission:btn:edit"],
            accessToken: "eyJhbGciOiJIUzUxMiJ9.common",
            refreshToken: "eyJhbGciOiJIUzUxMiJ9.commonRefresh",
            expires: "2030/10/30 00:00:00"
          }
        };
      }
    }
  }
]);
