import axios from "axios";
import { IRespLoginStatus, IRespMeStatus } from "./interface";

export const login = async (username: string) => {
  const data = { userName: username };
  try {
    const req = await axios.post<unknown, IRespLoginStatus>(
      `http://localhost:4000/auth/login`,
      data
    );
    return req.data;
  } catch (error) {
    throw error;
  }
};

export const authMe = async () => {
  const data = {
    _id: localStorage.getItem("userId"),
    token: localStorage.getItem("token"),
  };
  try {
    const req = await axios.post<unknown, IRespMeStatus>(
      `http://localhost:4000/auth/me`,
      data
    );
    return req.data;
  } catch (error) {
    throw error;
  }
};
