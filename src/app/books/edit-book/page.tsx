import { getAllBooks } from "@/api";
import React from "react";
import styles from "./Edit.module.css";
import BookManagement from "@/components/bookManagement";

export default async function EditBook() {
  const books = await getAllBooks();

  return (
    <div className={styles.book_container}>
      <div className={styles.header}>
        <h1>Book Management</h1>
      </div>
      {books.map((book) => (
        <BookManagement
          key={book._id}
          title={book.title}
          author={book.author}
          isbnNumber={book.isbnNumber}
          _id={book._id}
        />
      ))}
    </div>
  );
}
