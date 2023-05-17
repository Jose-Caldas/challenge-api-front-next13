"use client";
import React, { FormEventHandler, useState } from "react";
import Message from "./Message";
import { addBook } from "@/api";
import { useRouter } from "next/navigation";
import styles from "./AddBook.module.css";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";

type FormBookProps = {
  formTitle: string;
};

const AddBook = ({ formTitle }: FormBookProps) => {
  const router = useRouter();
  const [messageOpen, setMessageOpen] = useState(false);
  const [newTitleValue, setNewTitleValue] = useState<string>("");
  const [newAuthorValue, setNewAuthorValue] = useState<string>("");
  const [newIsbnValue, setNewIsbnValue] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addBook({
      title: newTitleValue,
      author: newAuthorValue,
      isbnNumber: Number(newIsbnValue),
    });
    setNewTitleValue("");
    setNewAuthorValue("");
    setNewIsbnValue("");
    router.refresh();
  };

  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit}>
        <h3>{formTitle}</h3>
        <div>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="tex"
              name="title"
              id="title"
              placeholder="New title..."
              value={newTitleValue}
              onChange={(e) => setNewTitleValue(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="tex"
              name="author"
              id="author"
              placeholder="New author..."
              value={newAuthorValue}
              onChange={(e) => setNewAuthorValue(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="isbn">ISBN:</label>
            <input
              type="number"
              name="isbn"
              id="isbn"
              placeholder="New ISBN..."
              value={newIsbnValue}
              onChange={(e) => setNewIsbnValue(e.target.value)}
            />
          </div>
        </div>
        <button className={styles.btn_add} onClick={() => setMessageOpen(true)}>
          Add <AiOutlinePlus />
        </button>
      </form>
      <Message messageOpen={messageOpen} setOpenMessage={setMessageOpen}>
        <div className={styles.msg_container}>
          <p className={styles.success_message}>Book successfully added!</p>
          <p>Add another?</p>
          <button
            className={styles.btn_success}
            onClick={() => setMessageOpen(false)}
          >
            Yes
          </button>
          <Link className={styles.link_success} href="/books">
            No
          </Link>
        </div>
      </Message>
    </div>
  );
};

export default AddBook;
