import { Node } from "../Node"
import { NodeRoot } from "../RooteNode"
import useNode from "./hooks/useNode"
import { List } from "./styled"

type Props = {
  nodes: Nodes
}

const Tree = ({ nodes }: Props) => {
  const { rootNode, handleRootNode } = useNode(nodes)

  return (
    <List numbColumn={nodes.branch!.length}>
      <NodeRoot data={rootNode.data} rowEnd={nodes.branch!.length + 1} />
      {rootNode.branch?.map((node, i) =>
        <Node
          key={node.data.id}
          data={node.data}
          lineRowStart={i + 1}
          handleSelectedNode={handleRootNode}
        />
      )}
    </List>
  )
}

export default Tree