interface MessageProps {
  messageOpen: boolean;
  setOpenMessage: (open: boolean) => boolean | void;
  children: React.ReactNode;
}

const Message = ({ messageOpen, setOpenMessage, children }: MessageProps) => {
  return <>{messageOpen && <div>{children}</div>}</>;
};

export default Message;
