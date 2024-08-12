import { PostModel, PostModelAPI } from "../../../domain/models/post.model"

function toPostModel (postApi: PostModelAPI): PostModel {
  return {
    id: postApi.id,
    title: postApi.title_post,
    body: postApi.body_post,
  }
}

export const postListAdapter = { toPostModel }