import React from "react";

interface ModalProps {
  modalOpen: boolean;
  setOpenModal: (open: boolean) => boolean | void;
}

const Modal = ({ modalOpen, setOpenModal }: ModalProps) => {
  return (
    <>
      {modalOpen && (
        <div>
          <h1>Livro adicionado com sucesso!</h1>
          <h2 onClick={() => setOpenModal(false)}>Fechar</h2>
        </div>
      )}
    </>
  );
};

export default Modal;
