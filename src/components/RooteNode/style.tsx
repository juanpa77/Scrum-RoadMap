import styled from "@emotion/styled";
import { Item } from "../Node/style";

const widthRootItem = 367
const heigthRootItem = 367


export const ItemRoot = styled(Item)`
  /* height:${() => heigthRootItem + 'px'}; */
  /* width: ${() => widthRootItem + 'px'}; */
  height: 79%;
  width: 79%;
  background: linear-gradient(213.18deg, #FFFFFF -4.64%, rgba(249, 247, 247, 0.813848) 73.22%, rgba(214, 214, 214, 0.74) 104.11%);
  border: 1px solid #FFFFFF;
  box-shadow: 59px 48px 22px rgba(0, 0, 0, 0.3);
`
export const HalfCircle = styled('div')`
    display: flex;
  position: relative;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 3;
  grid-row-end: ${({ rowEnd }: { rowEnd: number }) => rowEnd};
  height:${() => (heigthRootItem + 106) + 'px'};
  width: 569px;
  border-radius: 50%;
  background: conic-gradient(from 182.15deg at 49.91% 50.09%, #FF0000 -20.66deg, #FFC700 3.21deg, #00FF19 168.79deg, #00E0FF 229.76deg, rgba(66, 0, 255, 0.94) 272.9deg, rgba(255, 0, 153, 0.94) 303.52deg, #FF0000 339.34deg, #FFC700 363.21deg);
`
export const BackgroundTransparent = styled('div')`
  height:${() => (heigthRootItem + 106) + 'px'};
  width: 556px;
  border-radius: 50%;
  background: linear-gradient(237.57deg, #3B0D57 17.69%, #1F1F1F 45.35%, #000000 98.32%);
  color: black;
  /* padding-top: 3rem; */
`
type Props = {
  position?: {
    x: number
    y: number
  },
  size?: {
    h: number
    w: number
  }
}
export const Wrapper = styled('div')`
  display: flex;
  height: ${() => (heigthRootItem + 100) + 'px'};
  height:${({ size }: Props) => size?.h + 'px'};
  width: ${() => (widthRootItem + 100) + 'px'};
  width:${({ size }: Props) => size?.h + 'px'};
  border-radius: 50%;
  background: linear-gradient(149.69deg, #D5D1D1 -7.51%, #F2F2F2 52%, #A0A0A0 84.46%);
  /* filter: blur(2px); */
  grid-column-start: 1;
  grid-row-start: 1;
  justify-content: center;
  align-items: center;
`