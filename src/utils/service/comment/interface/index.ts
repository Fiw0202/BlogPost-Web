import { IRespData } from "../../interface";

export interface IRespCommentDetail {
  _id: string;
  postId: string;
  content: string;
  createName: string;
  createDate: string;
}

export interface IReqCreateComment {
  userId: string;
  postId: string;
  content: string;
}

export type IRespComment = IRespData<IRespCommentDetail>;
export type IRespCommentPost = IRespData<IRespCommentDetail[]>;
