import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import { ItemPost } from "./item-post"
import { postsListMock } from "../../../../data/mocks/post-list.mock"

function makeSut() {
  render(<ItemPost post={postsListMock()[0]}/>);
}

describe("ItemPost", () => {
  test("Should return ItemPost with correct values", () => {
    makeSut()

    expect(screen.getByText("any_title")).toBeInTheDocument()
    expect(screen.getByText("any_body")).toBeInTheDocument()
  })
})