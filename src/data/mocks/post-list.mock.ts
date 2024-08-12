import { PostModel } from "../../domain/models/post.model";

export function postsListMock(): PostModel[] {
  return [
    {
      id: "any_id",
      title: "any_title",
      body: "any_body"
    }
  ]
}