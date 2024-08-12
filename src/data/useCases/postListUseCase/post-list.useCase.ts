import { IPostList } from "../../../domain/contracts/post.contracts"
import { PostModelAPI } from "../../../domain/models/post.model"
import { postListAdapter } from "./post-list.adapter"
import { IHttpClient } from "../../../infra/contracts/http-client"

export class PostListUseCase implements IPostList {
  constructor (
    private readonly httpClient: IHttpClient<PostModelAPI[]>
  ) {}

  async list(): Promise<IPostList.Model> {
    const { data } = await this.httpClient.request({
      method: "get",
      url: "http://localhost:3333/posts"
    }) 

    return data.map(postListAdapter.toPostModel)
  }
}
