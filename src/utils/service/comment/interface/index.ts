import { IRespData } from "../../interface";

export interface IRespCommentDetail {
  _id: string;
  postId: string;
  content: string;
  createName: string;
  createDate: string;
}

export interface IReqCreateComment {
  userId: string | null;
  postId: string | string[];
  content: string | undefined;
}

export type IRespComment = IRespData<IRespCommentDetail>;
export type IRespCommentPost = IRespData<IRespCommentDetail[]>;
