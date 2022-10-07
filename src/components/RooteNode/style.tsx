import styled from "@emotion/styled";
import { Item } from "../Node/style";

const widthRootItem = 367
const heigthRootItem = 367


export const ItemRoot = styled(Item)`
  height:${() => heigthRootItem + 'px'};
  width: ${() => widthRootItem + 'px'};
  background: linear-gradient(213.18deg, #FFFFFF -4.64%, rgba(249, 247, 247, 0.813848) 73.22%, rgba(214, 214, 214, 0.74) 104.11%);
  border: 1px solid #FFFFFF;
  box-shadow: 59px 48px 22px rgba(0, 0, 0, 0.3);
`
export const HalfCircle = styled('div')`
    display: flex;
  position: relative;
  grid-row-start: 1;
  grid-row-end: ${({ rowEnd }: { rowEnd: number }) => rowEnd};
  grid-column-start: 1;
  grid-column-end: 3;
  height: 611px;
  height:${() => (heigthRootItem + 106) + 'px'};
  width: 569px;
  border-radius: 50%;
  background: conic-gradient(from 182.15deg at 49.91% 50.09%, #FF0000 -20.66deg, #FFC700 3.21deg, #00FF19 168.79deg, #00E0FF 229.76deg, rgba(66, 0, 255, 0.94) 272.9deg, rgba(255, 0, 153, 0.94) 303.52deg, #FF0000 339.34deg, #FFC700 363.21deg);
`
export const BackgroundTransparent = styled('div')`
  height:${() => (heigthRootItem + 106) + 'px'};
  width: 556px;
  border-radius: 50%;
  background: white;
  color: black;
  /* padding-top: 3rem; */
`

export const Wrapper = styled('div')`
  display: flex;
  height:${() => (heigthRootItem + 100) + 'px'};
  width: ${() => (widthRootItem + 100) + 'px'};
  border-radius: 50%;
  background: linear-gradient(149.69deg, #D5D1D1 -7.51%, #F2F2F2 52%, #A0A0A0 84.46%);
  /* filter: blur(2px); */
  justify-content: center;
  align-items: center;
`