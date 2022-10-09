import styled from "@emotion/styled";

type Props = {
  isOpenModal: boolean
}

export const Wrapper = styled('dialog')`
  display: ${({ isOpenModal }: Props) => isOpenModal ? 'flex' : 'none'};
  flex-direction: column;
  width: 440px;
  max-width: 80%;
  height: 430px;
  margin-left: 25%;
  border-radius: 20px;
  background-color: #161111;
  color: white;
  box-shadow: 4px 7px 4px rgb(255 255 255 / 38%);
  justify-content: flex-start;
  padding: 24px;
    div{
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;
      h1 {
        width: 100%;
        text-align: center;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      align-items: center;
    }
`