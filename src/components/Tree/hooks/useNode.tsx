import { useState } from "react"

const useNode = (nodes: Nodes,) => {
  const [rootNode, setRootNode] = useState(nodes)

  const handleRootNode = (nodeId: string) => setRootNode(nodes.branch!.filter(node => node.data.id === nodeId)[0])
  return { rootNode, handleRootNode }
}

export default useNode