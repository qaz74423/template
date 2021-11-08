import { LoginParams } from "./Shared";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useXhr } from "../../hooks/useXhr";
import { login } from "./Api";
import { message } from "ant-design-vue";
import { setStorage } from "@utils/auth";
export function loginService() {
  const router = useRouter();
  const formState = ref<LoginParams>({ username: "admin", password: "123456" });
  const adapter = async () => await login(formState.value);
  const [request, response, loading, error] = useXhr(
    adapter,
    { msg: "", code: 200, data: {} },
    false
  );
  const loginBtn = async () => {
    await request();

    if (error.error.value) {
      // 请求报错
      message.error(error.error.value.message);
    } else if (response.value.code !== 200) {
      // 状态码错误
      message.error(response.value.msg);
    } else {
      // 存入userIfo，但是token在其他地方传，以后在改
      setStorage("userInfo", JSON.stringify(response.value.data));
      router.push("/");
    }
  };
  const reset = () => {
    formState.value.username = "";
    formState.value.password = "";
  };

  const noAuthLogin = () => {
    router.push("/");
  };
  return {
    loading,
    formState,
    loginBtn,
    reset,
    noAuthLogin,
  };
}
