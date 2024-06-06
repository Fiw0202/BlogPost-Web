export interface IRespMeData {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  displayName: string;
}

export interface IRespMe {
  result: IRespMeData;
  statusCode: number;
  statusText: string;
}

export interface IRespMeStatus {
  data: IRespMe;
}

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
