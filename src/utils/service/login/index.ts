import axios from "axios";
import { IRespLogin, IRespMe } from "./interface";

export const login = async (username: string) => {
  const data = { userName: username };
  try {
    const req = await axios.post<unknown, IRespLogin>(
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
    const req = await axios.post<unknown, IRespMe>(
      `http://localhost:4000/auth/me`,
      data
    );
    return req.data;
  } catch (error) {
    throw error;
  }
};
