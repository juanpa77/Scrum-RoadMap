import { Item, Line, Wrapper } from "./style"
type Props = {
  data: Data
  lineRowStart: number
  handleSelectedNode: (node: string) => void
}

export const Node = ({ data: { description, links, title, id }, lineRowStart, handleSelectedNode }: Props) => {
  return (
    <>
      <Line rowStart={lineRowStart!} />
      <Wrapper>
        <Item onClick={() => handleSelectedNode(id)}>
          <h1>{title}</h1>
          {/* <p>{description}</p> */}
          {/* <a>{links}</a> */}
        </Item>
      </Wrapper>
    </>
  )
}
