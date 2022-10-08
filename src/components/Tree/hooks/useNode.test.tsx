import { cleanup, renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { afterEach, describe, expect, it } from "vitest";
import { mockNodes } from "../../../../mock/tree";
import useNode from "./useNode";

describe('return selected node', () => {
  afterEach(cleanup)

  it('should change root node when user clicking in a child node ', () => {
    const { result } = renderHook(() => useNode(mockNodes))

    act(() => {
      result.current.handleRootNode(mockNodes.branch![0].data.id)

    })
    expect(result.current.rootNode).toBe(mockNodes.branch![0])
  })
})