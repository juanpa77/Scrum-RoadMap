
type Props = {
  close: () => void
  fill: string
}

const CloseIcon = ({ close, fill }: Props) => {
  return (
    <svg onClick={close} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.77084 17C1.77084 8.58916 8.58917 1.77083 17 1.77083C25.4109 1.77083 32.2292 8.58916 32.2292 17C32.2292 25.4108 25.4109 32.2292 17 32.2292C8.58917 32.2292 1.77084 25.4108 1.77084 17ZM17 3.89583C9.76278 3.89583 3.89584 9.76276 3.89584 17C3.89584 24.2372 9.76278 30.1042 17 30.1042C24.2372 30.1042 30.1042 24.2372 30.1042 17C30.1042 9.76276 24.2372 3.89583 17 3.89583Z" fill={fill} />
      <path fillRule="evenodd" clipRule="evenodd" d="M21.7583 12.2417C22.1732 12.6567 22.1732 13.3294 21.7583 13.7443L13.7444 21.7582C13.3295 22.1731 12.6567 22.1731 12.2418 21.7582C11.8269 21.3433 11.8269 20.6705 12.2418 20.2556L20.2557 12.2417C20.6706 11.8268 21.3433 11.8268 21.7583 12.2417Z" fill={fill} />
      <path fillRule="evenodd" clipRule="evenodd" d="M12.2418 12.2417C12.6567 11.8268 13.3295 11.8268 13.7444 12.2417L21.7583 20.2556C22.1732 20.6705 22.1732 21.3433 21.7583 21.7582C21.3433 22.1731 20.6706 22.1731 20.2557 21.7582L12.2418 13.7443C11.8269 13.3294 11.8269 12.6567 12.2418 12.2417Z" fill={fill} />
    </svg>
  )
}

export default CloseIcon