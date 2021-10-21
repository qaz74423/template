import type { AxiosRequestConfig, AxiosResponse } from "axios";

import type { HttpResponseResult, RequestOptions } from "./useAxiosInterfaces";

// 数据处理抽象类

export abstract class AxiosTransform {
  // 请求之前配置处理
  beforeRequestConfigHandler?: (
    config: AxiosRequestConfig,
    options: RequestOptions
  ) => AxiosRequestConfig;

  //   请求失败错误处理
  requestErrorHandler?: (error: Error) => Promise<any>;

  //   请求成功数据处理 - 数据转换处理 transformRequestData
  requestSuccessHandler?: (
    result: AxiosResponse<HttpResponseResult>,
    options: RequestOptions
  ) => any;

  //   请求拦截器
  requestInerceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;

  //   响应拦截器
  responseInterceptor?: (result: AxiosResponse<any>) => AxiosResponse<any>;

  //请求拦截器错误处理
  requestInterceptorErrorHandler?: (error: Error) => void;

  //   响应拦截器错误处理
  responseInterceptorErrorHandler?: (error: Error) => void;
}
