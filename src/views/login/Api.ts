import { Apis, LoginParams, User } from "./Shared";
import { useRequestor } from "../../utils/requestor/useRequestor";
export async function login(params: LoginParams) {
  return useRequestor.request<HttpResponse<User>>({
    url: Apis.login,
    method: "post",
    data: params,
  });
}
