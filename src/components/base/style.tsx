import styled from "@emotion/styled";

type Props = {
  size?: string
}

export const CircleBase = styled('div')`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: black;
background: linear-gradient(180deg, rgba(228, 226, 226, 0.97) 0%, rgba(255, 255, 255, 0.985587) 51.96%, #CFCECE 100%);
box-shadow: 5px 6px 4px rgba(0, 0, 0, 0.31);
height: ${({ size }: Props) => size ? size : '80px'};
width: ${({ size }: Props) => size ? size : '80px'};
border-radius: 50%;
font-size: 13px;
`