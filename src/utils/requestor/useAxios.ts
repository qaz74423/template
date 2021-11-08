import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { AxiosCanceler } from "./useAxiosCanceler";
import { setStorage } from "@utils/auth";
import type {
  CreateAxiosOptions,
  HttpResponseResult,
  RequestOptions,
} from "./useAxiosInterfaces";
import { cloneDeep } from "lodash";
import { isFunction } from "../is";
import { ErrorResult } from "./useAxiosConstants";
export class CustomAxios {
  private axiosInstance: AxiosInstance;
  private readonly options: CreateAxiosOptions;

  constructor(options: CreateAxiosOptions) {
    this.options = options;
    this.axiosInstance = axios.create(this.options);
    this.setupInterceptors();
  }

  //   拦截器
  private setupInterceptors() {
    const transform = this.getTransform();
    if (!transform) return;

    const {
      requestInerceptor,
      requestInterceptorErrorHandler,
      responseInterceptor,
      responseInterceptorErrorHandler,
    } = transform;

    const axiosCanceler = new AxiosCanceler();

    // 请求拦截器

    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const {
          headers: { ignoreCancelToken } = { ignoreCancelToken: false },
        } = config;

        !ignoreCancelToken && axiosCanceler.addRequest(config);

        if (requestInerceptor && isFunction(requestInerceptor)) {
          config = requestInerceptor(config);
        }

        return config;
      },
      undefined
    );

    // 请求错误拦截器
    if (
      requestInterceptorErrorHandler &&
      isFunction(requestInterceptorErrorHandler)
    ) {
      this.axiosInstance.interceptors.request.use(
        undefined,
        requestInterceptorErrorHandler
      );
    }

    // 响应拦截器
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse<any>) => {
        response && axiosCanceler.removeRequest(response.config);

        if (responseInterceptor && isFunction(responseInterceptor)) {
          response = responseInterceptor(response);
        }

        // 设token
        // 这个后端有问题，应该统一大写开头的

        response.headers?.authorization
          ? setStorage("token", response.headers.authorization)
          : null;
        return response;
      },
      undefined
    );

    // 响应错误拦截器
    if (
      responseInterceptorErrorHandler &&
      isFunction(responseInterceptorErrorHandler)
    ) {
      this.axiosInstance.interceptors.response.use(
        undefined,
        responseInterceptorErrorHandler
      );
    }
  }

  //获取数据处理对象
  private getTransform() {
    return this.options.transform;
  }

  // 创建Axios实例
  private createAxios(config: CreateAxiosOptions) {
    this.axiosInstance = axios.create(config);
  }
  getAxios(): AxiosInstance {
    return this.axiosInstance;
  }

  // 重新配置并生成Aioxs实例
  reConfigAxios(config: CreateAxiosOptions) {}

  //设置请求头
  setHeader(headers: any) {
    if (!this.axiosInstance) return;
    Object.assign(this.axiosInstance.defaults.headers, headers);
  }

  // 请求方法
  request<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions
  ): Promise<T> {
    let newConfig: AxiosRequestConfig = cloneDeep(config);

    const newOptions: RequestOptions = Object.assign(
      {},
      options,
      this.options.requestOptions
    );

    const transform = this.getTransform();
    const {
      beforeRequestConfigHandler,
      requestSuccessHandler,
      requestErrorHandler,
    } = transform || {};

    if (beforeRequestConfigHandler && isFunction(beforeRequestConfigHandler)) {
      newConfig = beforeRequestConfigHandler(newConfig, newOptions);
    }

    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<HttpResponseResult>>(newConfig)
        .then((response: AxiosResponse<HttpResponseResult>) => {
          if (requestSuccessHandler && isFunction(requestSuccessHandler)) {
            const handleResult = requestSuccessHandler(response, newOptions);

            handleResult !== ErrorResult
              ? resolve(handleResult)
              : reject(new Error("请求错误"));
            return;
          }
          resolve(response as unknown as Promise<T>);
        })
        .catch((error: Error) => {
          if (requestErrorHandler && isFunction(requestErrorHandler)) {
            reject(requestErrorHandler(error));
            return;
          }
          reject(error);
        });
    });
  }
}
