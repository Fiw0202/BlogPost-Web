export interface IResult<T> {
  result: T;
  statusCode: number;
  statusText: string;
}

export interface IRespData<T> {
  data: IResult<T>;
}
