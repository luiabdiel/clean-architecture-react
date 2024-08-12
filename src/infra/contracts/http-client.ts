/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */

export type HttpResponse<T = any> = {
  data: T
}

export type HttpMethod = "get" | "post" | "put" | "delete"

export type ParamsHttp = {
  method: HttpMethod,
  url: string,
} 

export interface IHttpClient<T = any> {
  request(params: IHttpClient.Params): Promise<HttpResponse<T>>
}

export namespace IHttpClient {
  export type Params = ParamsHttp
}