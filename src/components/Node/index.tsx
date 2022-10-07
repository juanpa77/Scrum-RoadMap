import { Item, Line, Wrapper } from "./style"
type Props = {
  data: Data
  lineRowStart: number
}

export const Node = ({ data: { description, links, title }, lineRowStart }: Props) => {
  return (
    <>
      <Line rowStart={lineRowStart!} />
      <Wrapper>
        <Item >
          <h1>{title}</h1>
          {/* <p>{description}</p> */}
          {/* <a>{links}</a> */}
        </Item>
      </Wrapper>
    </>
  )
}
