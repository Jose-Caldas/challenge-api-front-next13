interface ModalProps {
  messageOpen: boolean;
  setOpenMessage: (open: boolean) => boolean | void;
  children: React.ReactNode;
}

const Message = ({ messageOpen, setOpenMessage, children }: ModalProps) => {
  return <>{messageOpen && <div>{children}</div>}</>;
};

export default Message;
