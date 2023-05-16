import { editBook } from "@/api";
import Modal from "@/components/Modal";
import { IBook } from "@/types/book";
import { useRouter } from "next/navigation";
import React, { FormEventHandler, useState } from "react";

interface EditBookProps {
  book: IBook;
}

const EditBook = ({ book }: EditBookProps) => {
  const router = useRouter();
  const [OpenModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [titleEdit, setTitleEdit] = useState<string>(book.title);
  const [authorEdit, setAuthorEdit] = useState<string>(book.author);
  const [isbnEdit, setIsbnEdit] = useState<string | number>(book.isbnNumber);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editBook({
      _id: book._id,
      title: titleEdit,
      author: authorEdit,
      isbnNumber: Number(isbnEdit),
    });
    setTitleEdit("");
    setAuthorEdit("");
    setIsbnEdit("");
    router.refresh();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Editar Livro</h3>
        <div>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="tex"
              name="title"
              id="title"
              placeholder="New title..."
              value={titleEdit}
              onChange={(e) => setTitleEdit(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="tex"
              name="author"
              id="author"
              placeholder="New author..."
              value={authorEdit}
              onChange={(e) => setAuthorEdit(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="isbn">ISBN:</label>
            <input
              type="number"
              name="isbn"
              id="isbn"
              placeholder="New ISBN..."
              value={isbnEdit}
              onChange={(e) => setIsbnEdit(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" onClick={() => setOpenModalEdit(true)}>
          Atualizar livro
        </button>
      </form>
      <Modal
        modalOpen={OpenModalEdit}
        setOpenModal={setOpenModalEdit}
        text="Livro atualizado com sucesso!"
      />
    </>
  );
};

export default EditBook;
