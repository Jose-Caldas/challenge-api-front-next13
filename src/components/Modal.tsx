import React from "react";

interface ModalProps {
  modalOpen: boolean;
  setOpenModal: (open: boolean) => boolean | void;
  text: string;
}

const Modal = ({ modalOpen, setOpenModal, text }: ModalProps) => {
  return (
    <>
      {modalOpen && (
        <div>
          <h1>{text}</h1>
          <h2 onClick={() => setOpenModal(false)}>Fechar</h2>
        </div>
      )}
    </>
  );
};

export default Modal;
