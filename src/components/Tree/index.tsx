import { Node } from "../Nodo"
import { List } from "./styled"

type Props = {
  nodes: Nodes
}

const Tree = ({ nodes }: Props) => {
  console.log(nodes.branch?.flat().length)
  return (
    <List>
      <Node data={nodes.data} />
      {nodes.branch?.map(node => <Tree key={node.data.id} nodes={node} />
      )}
    </List>
  )
}

export default Tree