import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";
import Tree from ".";
import { mockTree } from "../../../mock/tree";

describe('Node tree', () => {
  afterEach(cleanup)

  const nodes: Data[] = [
    {
      title: 'title',
      description: 'description',
      links: 'www.git.com',
      id: '2132'
    },
    {
      title: 'title2',
      description: 'description2',
      links: 'www.git.com2',
      id: 'asdad'
    }
  ]

  it('should render tree', () => {
    render(<Tree nodes={mockTree} />)
  })
})