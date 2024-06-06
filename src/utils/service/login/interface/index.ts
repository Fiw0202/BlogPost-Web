export interface IRespLoginData {
  userId: string;
  token: string;
}

export interface IRespLogin {
  result: IRespLoginData;
  statusCode: number;
  statusText: string;
}

export interface IRespLoginStatus {
  data: IRespLogin;
}
