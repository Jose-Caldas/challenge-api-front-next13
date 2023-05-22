import React from "react";
import styles from "./BookList.module.css";
import { IBook } from "@/types/book";

type BookListProps = {
  books: IBook[];
};

const BookList = ({ books }: BookListProps) => {
  return (
    <div className={styles.bookList_container}>
      {books.map((book) => (
        <ul>
          <li>{book.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default BookList;
