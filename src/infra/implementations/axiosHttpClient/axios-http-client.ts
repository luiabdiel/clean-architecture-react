import axios from "axios"
import {  HttpResponse, IHttpClient } from "../../contracts/http-client"

export class AxiosHttpClient implements IHttpClient {
  async request(params: IHttpClient.Params): Promise<HttpResponse> {
   const { data } = await axios.request<HttpResponse>(params)

   return {data}
  }
}