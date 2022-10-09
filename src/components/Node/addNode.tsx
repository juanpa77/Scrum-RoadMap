import { Line, Wrapper, Item } from "./style"

type Props = {
  lineRowStart: number
  addNode: () => void
}

export const AddNode = ({ lineRowStart, addNode }: Props) => {
  return (
    <>
      <Line rowStart={lineRowStart!} />
      <Wrapper onClick={addNode}>
        <Item >
          <h1>Add new item`</h1>
          {/* <p>{description}</p> */}
          {/* <a>{links}</a> */}
        </Item>
      </Wrapper>
    </>
  )
}
