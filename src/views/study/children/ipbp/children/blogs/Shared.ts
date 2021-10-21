// export type HttpMessage = {
//   msg: string;
//   code: number;
// };

export interface FetchRecordsPayload {}
// 返回的字段类型
export interface FetchRecordsResponse {
  code: number;
  msg: string;
  data: Data;
}
export interface Data {
  records: Record[];
  total: number;
  size: number;
  current: number;
  orders: any[];
  searchCount: boolean;
  pages: number;
}
export interface Record {
  id: number;
  userId: number;
  title: string;
  description: string;
  content: string;
  created: Date;
  status: number;
}

export class Apis {
  static readonly Prefix = "http://localhost:8082";
  static readonly FetchRecords = `${Apis.Prefix}/blogs`;
  static readonly DeleteRecords = `${Apis.Prefix}/blog/delete`;
}
