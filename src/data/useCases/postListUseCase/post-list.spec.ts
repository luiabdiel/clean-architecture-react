import { describe, test } from "vitest";
import { PostListUseCase } from "./post-list.useCase";
import {
  HttpResponse,
  IHttpClient,
  ParamsHttp,
} from "../../../infra/contracts/http-client";
import { PostModel, PostModelAPI } from "../../../domain/models/post.model";

function postsListAPIMock(): PostModelAPI[] {
  return [
    {
      id: "1",
      title_post: "title_post",
      body_post: "body_post",
    },
  ];
}

class AxiosHttpClientInMemory implements IHttpClient {
  method?: string;
  url?: string;
  response: HttpResponse = { data: "" };
  async request(params: ParamsHttp): Promise<HttpResponse> {
    this.method = params.method;
    this.url = params.url;

    return await Promise.resolve(this.response);
  }
}

type SutParam = {
  axiosHttpClientInMemory?: AxiosHttpClientInMemory;
};

function makeSut({
  axiosHttpClientInMemory = new AxiosHttpClientInMemory(),
}: SutParam = {}) {
  const sut = new PostListUseCase(axiosHttpClientInMemory);

  return { sut, axiosHttpClientInMemory };
}

describe("Post", () => {
  test("Should return method list with correct method and URL", async () => {
    const axiosHttpClientInMemory = new AxiosHttpClientInMemory();
    axiosHttpClientInMemory.response = { data: postsListAPIMock() };

    const { sut } = makeSut({ axiosHttpClientInMemory });

    await sut.list();

    expect(axiosHttpClientInMemory.method).toBe("get");
    expect(axiosHttpClientInMemory.url).toBe("http://localhost:3333/posts");
  });

  test("Should return method list with data correct", async () => {
    const axiosHttpClientInMemory = new AxiosHttpClientInMemory();
    const postsListAPI = postsListAPIMock();
    axiosHttpClientInMemory.response = { data: postsListAPI };

    const { sut } = makeSut({ axiosHttpClientInMemory });
    const data = await sut.list();

    expect(data[0]).toEqual({
      id: postsListAPI[0].id,
      title: postsListAPI[0].title_post,
      body: postsListAPI[0].body_post,
    } as PostModel);
  });
});
