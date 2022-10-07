import { BackgroundTransparent, HalfCircle, ItemRoot, Wrapper } from "./style"

type Porps = {
  data: Data
  rowEnd: number
}

export const NodeRoot = ({ data: { description, links, title }, rowEnd }: Porps) => {
  return (
    <HalfCircle rowEnd={rowEnd}>
      <BackgroundTransparent>
        <Wrapper>
          <ItemRoot >
            <h1>{title}</h1>
            <p>{description}</p>
            <a>{links}</a>
          </ItemRoot>
        </Wrapper>
      </BackgroundTransparent>
    </HalfCircle>
  )
}
