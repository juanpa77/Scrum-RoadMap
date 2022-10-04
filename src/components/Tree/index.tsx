import { Node } from "../Nodo"

type Props = {
  nodes: Tree
}

const Tree = ({ nodes }: Props) => {

  return (
    <>{
      nodes.map(node => <Node data={node.data} />)
    }</>
  )
}

export default Tree