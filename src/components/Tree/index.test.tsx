import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Tree from ".";
import { mockNodes } from "../../../mock/tree";


describe('Node tree', () => {
  afterEach(cleanup)

  it('should render tree', () => {
    render(<Tree nodes={mockNodes} />)
    const renderList = screen.getAllByRole("listitem")
    const totalItem = mockNodes.branch!.length + 1
    expect(renderList.length).toEqual(totalItem)
  })

  it('should change RooteNode to children node when user clicks in children node', () => {
    render(<Tree nodes={mockNodes} />)
    const titleRoot = mockNodes.data.title
    const rootNode = screen.getByText(titleRoot)

    const titleChild = mockNodes.branch![0].data.title
    const childNode = screen.getByText(titleChild)
    fireEvent.click(childNode)
  })

  it('should render grid whit number rows and column calculate function  ', () => {
    // ** ==> search how to write description test 

  })
})