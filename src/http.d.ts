declare type HttpMessage = { msg: string; code: number };

declare type HttpResponse<T> = HttpMessage & {
  data: T;
};
