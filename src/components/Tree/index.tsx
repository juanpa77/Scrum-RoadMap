import { Node } from "../Node"
import { NodeRoot } from "../RooteNode"
import { List } from "./styled"

type Props = {
  nodes: Nodes
}

const Tree = ({ nodes }: Props) => {
  console.log(nodes.branch?.flat().length)
  return (
    <List numbColumn={nodes.branch!.length}>
      <NodeRoot data={nodes.data} rowEnd={nodes.branch!.length + 1} />
      {nodes.branch?.map((node, i) => <Node key={node.data.id} data={node.data} lineRowStart={i + 1} />
      )}
    </List>
  )
}

export default Tree