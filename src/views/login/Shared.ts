export interface LoginParams {
  username: string;
  password: string;
}
export interface User {
  id?: number;
  username?: string;
  avatar?: string;
  email?: null;
  password?: string;
  status?: number;
  created?: Date;
  lastLogin?: null;
}

export class Apis {
  static readonly login: string = "/login";
}
