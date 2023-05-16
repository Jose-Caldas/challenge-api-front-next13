import { getAllBooks } from "@/api";
import React from "react";
import styles from "./Book.module.css";
import Link from "next/link";
import Book from "@/components/Book";

export default async function Books() {
  const books = await getAllBooks();

  return (
    <div className={styles.book_container}>
      <div className={styles.header}>
        <h1>Book List:</h1>
        <Link href="/form">Add New book</Link>
      </div>
      {books.map((book) => (
        <Book
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
