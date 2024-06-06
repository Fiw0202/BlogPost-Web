import axios from "axios";
import { IRespLoginStatus } from "./interface";

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
