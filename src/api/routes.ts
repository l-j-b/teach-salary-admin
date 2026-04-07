import { http } from "@/utils/http";

type Result = {
  code: number;
  message: string;
  data: Array<any>;
};

export const getAsyncRoutes = () => {
<<<<<<< HEAD
  return http.request<Result>("get", "/menu/get-async-routes");
=======
  return http.request<Result>("get", "/get-async-routes");
>>>>>>> 48e266b4e34226a4569d088cc16c1a27abf08e4e
};
