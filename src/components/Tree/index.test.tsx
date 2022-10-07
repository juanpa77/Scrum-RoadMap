import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Tree from ".";
import { mockNodes } from "../../../mock/tree";
import { calculateTotalItems } from "../../utility/calculateTotalItems";


describe('Node tree', () => {
  afterEach(cleanup)

  it('should render tree', () => {
    render(<Tree nodes={mockNodes} />)
    const renderList = screen.getAllByRole("listitem")
    const totalItem = calculateTotalItems([mockNodes])
    expect(renderList.length).toEqual(totalItem)
  })

  it('should render grid whit number rows and column calculate function  ', () => {
    // ** ==> search how to write description test 

  })
})