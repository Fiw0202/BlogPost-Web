import { IResp } from "./interfaces";

export async function GET() {
  try {
    const resp = await fetch("https://dummyjson.com/user");
    const data: IResp = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
