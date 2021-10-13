import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8082",
  timeout: 5000,
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    //   处理
    return config;
  },
  () => {}
);

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  () => {}
);

export default instance;
