import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Tree from ".";
import { mockNodes } from "../../../mock/tree";

/* const calculateTotalItem = (tree: Nodes): Nodes => {
  return tree.branch.reduce((totalNodes, node) => Array.isArray(node)
    ? totalNodes.branch!.concat(calculateTotalItem(node))
    : totalNodes.branch!.concat(node)
  )
} */

const totalItems = (nestedObjects: Nodes[]) => {
  return nestedObjects.reduce(
    (totalItem, nestedObject: Nodes): number => {
      // Add the current object's value
      totalItem++;

      // If we have children, let's add their values too
      if (nestedObject.branch) {
        totalItem += totalItems(nestedObject.branch);
      }

      // Return the new total
      return totalItem;
    },
    0,
  );
};

describe('Node tree', () => {
  afterEach(cleanup)

  it('should render tree', () => {
    render(<Tree nodes={mockNodes} />)
    // const renderList = screen.getByText(mockNodes.data.title)
    const renderList = screen.getAllByRole("listitem")
    const totalItem = totalItems([mockNodes])
    expect(renderList.length).toEqual(totalItem)
  })
})