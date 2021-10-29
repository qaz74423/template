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
  id?: number;
  userId?: number;
  title?: string;
  description?: string;
  content?: string;
  created?: Date;
  status?: number;
}

//能够在新增时有空的初始值
export class RecordClass implements Record {
  id = 0;
  userId = 0;
  title = "";
  description = "";
  content = "";
  created = null;
  status = 0;
}

export class Apis {
  static readonly Prefix = "";
  static readonly FetchRecords = `${Apis.Prefix}/blogs`;
  static readonly DeleteRecords = `${Apis.Prefix}/blog/delete`;
  static readonly EditRecords = `${Apis.Prefix}/blog/edit`;
}

// export class Schema {
//   static readonly PRIMARY_KEY = "id";

//   id = 0;
//   userId = 0;
//   title = "";
//   description = "";
//   content = "";
//   created = "";
//   status = 0;
// }
