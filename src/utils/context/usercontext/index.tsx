import { createContext } from "react";
import { IUserData } from "./interface";

const initialState: IUserData = {
  id: "",
  userName: "",
  firstName: "",
  lastName: "",
  displayName: "",
};

export const userContext = createContext<IUserData | undefined>(initialState);
