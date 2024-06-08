import axios from "axios";
import {
  IReqCreatePost,
  IReqUpdatePost,
  IRespAllPost,
  IRespPost,
} from "./interface";

export const getAllPost = async () => {
  try {
    const req = await axios.get<unknown, IRespAllPost>(
      `http://localhost:4000/master-post`
    );
    return req.data;
  } catch (error) {
    throw error;
  }
};

export const getPostById = async (id: string | string[]) => {
  try {
    const req = await axios.get<unknown, IRespPost>(
      `http://localhost:4000/master-post/${id}`
    );
    return req.data;
  } catch (error) {
    throw error;
  }
};

export const getPostByUserId = async (id: string | string[] | null) => {
  try {
    const req = await axios.get<unknown, IRespAllPost>(
      `http://localhost:4000/master-post/user/${id}`
    );
    return req.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (req: IReqCreatePost) => {
  try {
    const resp = await axios.post<IReqCreatePost, IRespPost>(
      `http://localhost:4000/master-post/`,
      req
    );
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (req: IReqUpdatePost) => {
  try {
    const resp = await axios.patch<IReqCreatePost, IRespPost>(
      `http://localhost:4000/master-post/`,
      req
    );
    return resp.data;
  } catch (error) {
    throw error;
  }
};
