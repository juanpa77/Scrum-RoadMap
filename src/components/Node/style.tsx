import styled from "@emotion/styled";

type Props = {
  rowStart: number
}

export const Item = styled('li')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  background: linear-gradient(180deg, rgba(228, 226, 226, 0.97) 0%, rgba(255, 255, 255, 0.985587) 51.96%, #CFCECE 100%);
  box-shadow: 5px 6px 4px rgba(0, 0, 0, 0.31);
  height: 80px;
  width: 90px;
  border-radius: 50%;
  font-size: 13px;
`

export const Line = styled('div')`
  width: 100%;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: ${({ rowStart }: Props) => rowStart};
  border: 1px #0300a6 dotted;
`
export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #630E97 0%, rgba(107, 10, 166, 0.83) 49.08%, #610997 100%);
  box-shadow: 4px 7px 4px rgba(0, 0, 0, 0.25);
  width: 600px;
  margin: 6px 0;
  border-radius: 69px;
  padding: 13px;
`