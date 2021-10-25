import { Apis, Data } from "./Shared";

import { useRequestor } from "../../../../../../utils/requestor/useRequestor";

export async function fetchRecords(payload: any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
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
