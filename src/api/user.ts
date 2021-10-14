import instance from "../utils/request";
import { AxiosResponse } from "axios";
enum Api {
  Login = "/login",
}
interface LoginParam {
  username: string;
  password: string;
}
export interface UserType {
  id?: number;
  username?: string;
  avatar?: string;
  lastLogin?: null;
}

export function loginApi(param: LoginParam): Promise<AxiosResponse<any>> {
  return instance.post(Api.Login, param);
}
