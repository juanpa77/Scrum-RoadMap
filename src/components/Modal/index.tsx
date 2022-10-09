import { ReactNode } from "react"
import CloseIcon from "../../assets/CloseIcon"
import { Wrapper } from "./style"

type Props = {
  title: string
  isOpenModal: boolean
  closeModal: () => void
  children?: ReactNode
}

const Modal = ({ title, children, closeModal, isOpenModal }: Props) => {
  return (
    <Wrapper isOpenModal={isOpenModal}>
      <div>
        <h1>{title}</h1>
        <CloseIcon
          close={closeModal}
          fill={'#ffff'}
        />
      </div>
      {children}
    </Wrapper>
  )
}

export default Modal