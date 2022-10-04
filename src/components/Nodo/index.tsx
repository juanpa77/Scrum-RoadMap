import { Item } from "./styled"
type Props = {
  data: Data
}

export const Node = ({ data: { description, links, title } }: Props) => {
  return (
    <Item >
      <h1>{title}</h1>
      <p>{description}</p>
      <a>{links}</a>
    </Item>
  )
}
