import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { mockNodes } from "../../mock/tree"

const initialState = mockNodes

const searchItem = (items: Nodes, nodeId: string) => {
  return items.branch?.filter(item => {
    if (item.data.id === nodeId) return item
    searchItem(item, nodeId)
  })[0]
}
// add implementation for add node a specific parent -comit -m
const nodesSlice = createSlice({
  name: 'nodes',
  initialState,
  reducers: {
    addNode: (state, action: PayloadAction<Nodes>) => {
      const parent = searchItem(state, action.payload.data.id)
      state.branch?.push(action.payload)
    }
  }
})

export const { addNode } = nodesSlice.actions
export default nodesSlice.reducer