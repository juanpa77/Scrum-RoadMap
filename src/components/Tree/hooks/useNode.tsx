import { useEffect, useState } from "react"
import { useAppSelector } from "../../../hooks/useNode"

const useNode = () => {
  const tree = useAppSelector(tree => tree.nodes)
  const [rootNode, setRootNode] = useState(tree)
  useEffect(() => setRootNode(tree), [tree])
  const handleRootNode = (nodeId: string) => setRootNode(tree.branch!.filter(node => node.data.id === nodeId)[0])

  return { rootNode, handleRootNode }
}

export default useNode