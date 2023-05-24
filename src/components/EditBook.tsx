import { editBook } from "@/api";
import Message from "@/components/Message";
import { IBook } from "@/types/book";
import { useRouter } from "next/navigation";
import React, { FormEventHandler, useState } from "react";
import styles from "../components/addNewBook/AddNewBook.module.css";
import Link from "next/link";

interface EditBookProps {
  book: IBook;
}

const EditBook = ({ book }: EditBookProps) => {
  const router = useRouter();
  const [OpenMessageEdit, setOpenMessageEdit] = useState<boolean>(false);
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
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit}>
        <h1 style={{ color: "#333" }}>Book Edit</h1>
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
        <button
          className={styles.btn_update}
          type="submit"
          onClick={() => setOpenMessageEdit(true)}
        >
          Update
        </button>
      </form>
      <Message
        messageOpen={OpenMessageEdit}
        setOpenMessage={setOpenMessageEdit}
      >
        <div className={styles.msg_container}>
          <div className={styles.success_message}>
            <p className={styles.success_message}>Book updated successfully!</p>
            <div className={styles.add_again}>
              <p>Go back to management books?</p>
              <Link className={styles.btn_update} href="/books/edit-book">
                Yes
              </Link>
              <button
                className={styles.btn_update}
                onClick={() => setOpenMessageEdit(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </Message>
    </div>
  );
};

export default EditBook;
