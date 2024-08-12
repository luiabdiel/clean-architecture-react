import { describe, expect, test } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import { Post } from "./posts"
import { PostListUserCaseInMemory } from "../../../data/useCases/postListUseCase/in-memory/post-list.usecase.in.memory"

function makeSut() {
  render(<Post postListUseCase={new PostListUserCaseInMemory()}/>)
}

describe("Posts", () => {
  test("Should return Post with corrects length", async () => {
    makeSut()

    await waitFor(() => screen.getByText("any_title"))

    expect(screen.getAllByTestId("post")).toHaveLength(1)
  })
})