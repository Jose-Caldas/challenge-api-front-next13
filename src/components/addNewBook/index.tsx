"use client";
import React, { useState } from "react";
import Message from "../Message";
import { addBook } from "@/api";
import { useRouter } from "next/navigation";
import styles from "./AddNewBook.module.css";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

const validationSchema = z.object({
  title: z
    .string()
    .nonempty("Title is required!")
    .min(3, { message: "Title must contain at least 3 characteres!" }),
  author: z
    .string()
    .nonempty("Author is required!")
    .min(3, { message: "Author must contain at least 3 characteres!" }),
  isbnNumber: z
    .string()
    .min(3, { message: "ISBN must contain at least 3 characteres!" }),
});

type ValidationSchema = z.infer<typeof validationSchema>;
const AddNewBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });
  const router = useRouter();
  const [messageOpen, setMessageOpen] = useState(false);
  const [message, setMessage] = useState({
    type: "error",
    text: "All fields must be filled in correctly!",
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    await addBook({
      title: data.title,
      author: data.author,
      isbnNumber: Number(data.isbnNumber),
    });

    router.refresh();

    if (Object.keys(errors).length === 0)
      setMessage({
        type: "success",
        text: "Book successfully added!",
      });
  };

  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Add New Book</h1>
        <div>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              placeholder="New title..."
              {...register("title")}
            />
            {errors.title && (
              <p className={styles.field_error}>{errors.title?.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              placeholder="New author..."
              {...register("author")}
            />
            {errors.author && (
              <p className={styles.field_error}>{errors.author?.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="isbnNumber">ISBN:</label>
            <input
              type="number"
              id="isbnNumber"
              placeholder="New ISBN..."
              {...register("isbnNumber")}
            />
            {errors.isbnNumber && (
              <p className={styles.field_error}>{errors.isbnNumber?.message}</p>
            )}
          </div>
        </div>
        <button className={styles.btn_add} onClick={() => setMessageOpen(true)}>
          Add <AiOutlinePlus />
        </button>
      </form>
      <Message messageOpen={messageOpen} setOpenMessage={setMessageOpen}>
        <div className={styles.msg_container}>
          <div
            className={styles.success_message}
            style={{ color: message.type === "error" ? "#f54257" : "#22a945" }}
          >
            {message.type === "success" ? (
              <>
                <p>
                  {message.text}{" "}
                  <span>
                    <BsCheck2Circle size={25} />
                  </span>
                </p>
                <div className={styles.add_again}>
                  <p>Add another?</p>
                  <button
                    className={styles.btn_update}
                    onClick={() => setMessageOpen(false)}
                  >
                    Yes
                  </button>
                  <Link className={styles.btn_update} href="/books/edit-book">
                    No
                  </Link>
                </div>
              </>
            ) : (
              <p>
                {message.text}
                <span>
                  <RiErrorWarningLine size={25} />
                </span>
              </p>
            )}
          </div>
        </div>
      </Message>
    </div>
  );
};

export default AddNewBook;
