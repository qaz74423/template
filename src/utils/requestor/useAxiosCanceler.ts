import type { AxiosRequestConfig, Canceler } from "axios";
import axios from "axios";

import { isFunction } from "../is";

// 映射 -> 请求标识+请求消除器
const requestMap = new Map<string, Canceler>();

// 生成请求标识

export const getRequestUrl = (config: AxiosRequestConfig) =>
  [config.method, config.url].join("&");

//   请求取消器
export class AxiosCanceler {
  // 添加请求
  addRequest(config: AxiosRequestConfig) {
    this.removeRequest(config);

    const url = getRequestUrl(config);

    const cancelerHandler = (canceler: Canceler) => {
      // 存储->请求标识+请求取消器
      if (!requestMap.has(url)) requestMap.set(url, canceler);
    };

    const newCancelToken = new axios.CancelToken(cancelerHandler);

    config.cancelToken = config.cancelToken || newCancelToken;
  }

  // 移除请求
  removeRequest(config: AxiosRequestConfig) {
    const url = getRequestUrl(config);

    if (requestMap.has(url)) {
      const canceler = requestMap.get(url);

      this.assureCancel(canceler);

      requestMap.delete(url);
    }
  }

  //   确保正确请求
  assureCancel(canceler: Canceler | undefined) {
    canceler && isFunction(canceler) && canceler();
  }

  //   清空请求
  clearRequest() {
    requestMap.forEach((canceler) => this.assureCancel(canceler));
    requestMap.clear();
  }
}
