import { IRespData, IResult } from "../../interface";
export interface IUserDetails {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  displayName: string;
}
export interface ILoginDetails {
  userId: string;
  token: string;
}

export type IRespMe = IRespData<IUserDetails>;
export type IRespLogin = IRespData<ILoginDetails>;
