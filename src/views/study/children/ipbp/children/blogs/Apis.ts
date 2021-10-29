import { Apis, Data, Record } from "./Shared";

import { useRequestor } from "@utils/requestor/useRequestor";

export async function fetchRecords(payload: Record) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 500);
  }).then(() => {
    return useRequestor.request<HttpResponse<Data>>({
      url: Apis.FetchRecords,
      params: payload,
    });
  });
}

export async function deleteRecords(ids: number[]) {
  return useRequestor
    .request<HttpResponse<any>>({
      url: Apis.DeleteRecords,
      method: "post",
      data: ids,
    })
    .then((res) => {
      return new Promise<HttpResponse<any>>((resolve, reject) => {
        setTimeout(() => {
          resolve(res);
        }, 1000);
      });
    });
}

// 一个接口两用，很恶心的接口
export async function editRecords(record: Record) {
  return useRequestor.request<HttpMessage>({
    url: Apis.EditRecords,
    data: record,
    method: "POST",
  });
}
