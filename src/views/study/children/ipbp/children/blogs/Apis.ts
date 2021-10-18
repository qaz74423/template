import instance from "../../../../../../utils/request";
import { Apis, FetchRecordsResponse, HttpMessage } from "./Shared";
import { getStorage } from "../../../../../../utils/auth";
import { AxiosResponse } from "axios";
export async function fetchRecords() {
  return new Promise((resolve) => {
    // 模拟1s延迟
    setTimeout(() => {
      resolve(true);
    }, 1000);
  }).then(() => {
    return instance.get<FetchRecordsResponse>(Apis.FetchRecords);
  });
}

export async function deleteRecords(
  ids: number[]
): Promise<AxiosResponse<HttpMessage>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  }).then(() => {
    return instance.post(Apis.DeleteRecords, ids, {
      headers: {
        Authorization: getStorage("token"),
      },
    });
  });
}
