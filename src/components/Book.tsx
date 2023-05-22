"use client";
import { IBook } from "@/types/book";
import styles from "./Book.module.css";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Link from "next/link";
import { deleteBook, editBook, getAllBooks } from "@/api";
import { useRouter } from "next/navigation";
import Message from "./Message";
import { useState } from "react";

const Book = ({ title, author, isbnNumber, _id }: IBook) => {
  const router = useRouter();
  const [messageOpen, setMessageOpen] = useState(false);
  const [btnMsg, setBtnMsg] = useState(false);

  const handleDeleteBook = async (_id: string | undefined) => {
    if (_id !== undefined) {
      await deleteBook(_id);
      router.refresh();
    }
    setMessageOpen(true);
  };

  const btn = () => {
    handleDeleteBook(_id);
    setBtnMsg(true);
  };

  return (
    <div className={styles.container}>
      {btnMsg ? (
        <p className={styles.delete_msg}>Excluding book...</p>
      ) : (
        <Message messageOpen={messageOpen} setOpenMessage={setMessageOpen}>
          <div className={styles.action}>
            <p>Are you sure?</p>
            <button className={styles.btn_yes} onClick={btn}>
              Yes
            </button>
            <button
              className={styles.btn_no}
              onClick={() => setMessageOpen(false)}
            >
              No
            </button>
          </div>
        </Message>
      )}
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.card_content}>
            <p>
              <strong>Title:</strong> {title}
            </p>
            <p>
              <strong>Author:</strong> {author}
            </p>
            <p>
              <strong>ISBN:</strong> {isbnNumber}
            </p>
          </div>
          <div className={styles.edit}>
            <h2>Actions</h2>
            <div className={styles.actions_opt}>
              <Link href={`/books/${_id}`}>
                <FiEdit
                  size={25}
                  color="#42b0f5"
                  cursor="pointer"
                  title="Edit"
                />
              </Link>
              <FiTrash2
                size={25}
                color="#f54257"
                cursor="pointer"
                title="Delete"
                onClick={() => setMessageOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
