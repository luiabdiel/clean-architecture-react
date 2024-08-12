import { IPostList } from "../../../../domain/contracts/post.contracts";
import { postsListMock } from "../../../mocks/post-list.mock";

export class PostListUserCaseInMemory implements IPostList {
  async list(): Promise<IPostList.Model> {
    return await Promise.resolve(postsListMock())
  }
}