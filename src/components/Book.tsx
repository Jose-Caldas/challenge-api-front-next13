"use client";
import { IBook } from "@/types/book";
import styles from "./Book.module.css";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Link from "next/link";
import { deleteBook, editBook, getAllBooks } from "@/api";
import { useRouter } from "next/navigation";

const Book = ({ title, author, isbnNumber, _id }: IBook) => {
  const router = useRouter();

  const handleDeleteBook = async (_id: string | undefined) => {
    if (_id !== undefined) {
      await deleteBook(_id);
      router.refresh();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.card}>
          <p>
            <strong>Title:</strong> {title}
          </p>
          <div className={styles.edit}>
            <Link href={`/books/${_id}`}>
              <FiEdit size={25} color="#42b0f5" cursor="pointer" />
            </Link>
            <FiTrash2
              onClick={() => handleDeleteBook(_id)}
              size={25}
              color="#f54257"
              cursor="pointer"
            />
          </div>
        </div>
        <p>
          <strong>Author:</strong> {author}
        </p>
        <p>
          <strong>ISBN:</strong> {isbnNumber}
        </p>
      </div>
    </div>
  );
};

export default Book;
