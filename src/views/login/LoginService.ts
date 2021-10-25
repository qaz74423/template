import { LoginParams } from "./Shared";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useXhr } from "../../hooks/useXhr";
import { login } from "./Api";
export function loginService() {
  const router = useRouter();
  const formState = ref<LoginParams>({ username: "admin", password: "123456" });
  const adapter = async () => (await login(formState.value)).data;
  const loginBtn = () => {
    // adapter().then((res) => console.log(res));
    // const [request, response, loading] = useXhr(adapter, null);
  };
  const reset = () => {
    formState.value.username = "";
    formState.value.password = "";
  };

  const noAUthLogin = () => {
    router.push("/");
  };
  return {
    formState,
    loginBtn,
    reset,
    noAUthLogin,
  };
}
