import axios from "axios";
import { IReqCreateComment, IRespComment, IRespCommentPost } from "./interface";

export const getCommentByPostId = async (id: string) => {
  try {
    const resp = await axios.get<unknown, IRespCommentPost>(
      `http://localhost:4000/comment/post/${id}`
    );
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const createComment = async (req: IReqCreateComment) => {
  try {
    const resp = await axios.post<IReqCreateComment, IRespComment>(
      `http://localhost:4000/comment`,
      req
    );
    return resp.data;
  } catch (error) {
    throw error;
  }
};
