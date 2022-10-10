import { Node } from "../Node"
import { AddNode } from "../Node/addNode"
import { NodeRoot } from "../RooteNode"
import useNode from "./hooks/useNode"
import { List } from "./styled"
import { ItemRoot, Wrapper } from "../RooteNode/style"
import ArrowBack from '../../assets/ArrowBack'
import Modal from "../Modal"
import useModal from "../Modal/useModal"
import Form from "../Form"
import { useAppSelector } from "../../hooks/useNode"

type Props = {
  nodes: Nodes
}

const Tree = () => {
  const tree = useAppSelector(tree => tree.nodes)
  const { rootNode, handleRootNode } = useNode()
  const [isOpenModal, openModal, closeModal] = useModal()
  console.log(tree)

  return (
    <List numbColumn={tree.branch!.length}>
      <Wrapper
        size={{ h: 100, w: 100 }}
        position={{ x: 1, y: 1 }}

      >
        <ItemRoot role={'button'}>
          <ArrowBack />
        </ItemRoot>
      </Wrapper>
      <NodeRoot data={rootNode.data} rowEnd={tree.branch!.length + 2} />
      {rootNode.branch?.map((node, i) =>
        <Node
          key={node.data.id}
          data={node.data}
          lineRowStart={i + 1}
          handleSelectedNode={handleRootNode}
        />
      )}
      <AddNode
        lineRowStart={rootNode.branch!.length}
        addNode={openModal}
      />
      <Modal
        title="Add New Node"
        isOpenModal={isOpenModal}
        closeModal={closeModal}
      >
        <Form closeModal={closeModal} />
      </Modal>
    </List>
  )
}

export default Tree

