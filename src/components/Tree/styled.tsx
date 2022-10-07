import styled from "@emotion/styled";

type Props = {
  numbColumn: number
}

export const List = styled('ul')`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;;
  grid-template-rows: repeat(${({ numbColumn }: Props) => numbColumn}, 1fr) ;
  align-items: center;
`