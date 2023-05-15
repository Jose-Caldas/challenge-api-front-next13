import { IBook } from "@/types/book";
import styles from "./Book.module.css";
import Link from "next/link";

const Book = ({ title, author, isbnNumber }: IBook) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
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
    </div>
  );
};

export default Book;
