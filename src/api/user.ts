import instance from "../utils/request";
import { AxiosResponse } from "axios";
enum Api {
  Login = "/login",
}
interface loginParam {
  username: string;
  password: string;
}
export function loginApi(param: loginParam): Promise<AxiosResponse<any>> {
  return instance.post(Api.Login, param);
}
