import { defineFakeRoute } from "vite-plugin-fake-server/client";
import { faker } from "@faker-js/faker/locale/zh_CN";

export default defineFakeRoute([
  // 账户设置-个人信息
  {
<<<<<<< HEAD
    url: "/v1/mine",
    method: "get",
    response: () => {
      return {
        code: 20000,
=======
    url: "/mine",
    method: "get",
    response: () => {
      return {
        code: 0,
>>>>>>> 48e266b4e34226a4569d088cc16c1a27abf08e4e
        message: "操作成功",
        data: {
          avatar: "https://avatars.githubusercontent.com/u/44761321",
          username: "admin",
          nickname: "小铭",
          email: "pureadmin@163.com",
          phone: "15888886789",
          description: "一个热爱开源的前端工程师"
        }
      };
    }
  },
  // 账户设置-个人安全日志
  {
<<<<<<< HEAD
    url: "/v1/mine-logs",
=======
    url: "/mine-logs",
>>>>>>> 48e266b4e34226a4569d088cc16c1a27abf08e4e
    method: "get",
    response: () => {
      const list = [
        {
          id: 1,
          ip: faker.internet.ipv4(),
          address: "中国河南省信阳市",
          system: "macOS",
          browser: "Chrome",
          summary: "账户登录", // 详情
          operatingTime: new Date() // 时间
        },
        {
          id: 2,
          ip: faker.internet.ipv4(),
          address: "中国广东省深圳市",
          system: "Windows",
          browser: "Firefox",
          summary: "绑定了手机号码",
          operatingTime: new Date().setDate(new Date().getDate() - 1)
        }
      ];
      return {
<<<<<<< HEAD
        code: 20000,
=======
        code: 0,
>>>>>>> 48e266b4e34226a4569d088cc16c1a27abf08e4e
        message: "操作成功",
        data: {
          list,
          total: list.length, // 总条目数
          pageSize: 10, // 每页显示条目个数
          currentPage: 1 // 当前页数
        }
      };
    }
  }
]);
