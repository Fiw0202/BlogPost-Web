import { IRespData } from "../../interface";

export interface IRespPostData {
  _id: string;
  userId: string;
  subject: string;
  content: string;
  groupPost: string;
  createName?: string;
  createDate?: string;
}

export interface IReqCreatePost {
  userId: string | null;
  subject: string;
  content: string;
  groupPost: string;
}

export interface IReqUpdatePost {
  _id: string;
  userId: string | null;
  subject: string;
  content: string;
  groupPost: string;
}

export type IRespAllPost = IRespData<IRespPostData[]>;
export type IRespPost = IRespData<IRespPostData>;
