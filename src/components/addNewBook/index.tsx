"use client";
import React, { useState } from "react";
import Message from "../Message";
import { addBook } from "@/api";
import { useRouter } from "next/navigation";
import styles from "./AddNewBook.module.css";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    await addBook({
      title: data.title,
      author: data.author,
      isbnNumber: Number(data.isbnNumber),
    });

    router.refresh();
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
            {errors.title && <p>{errors.title?.message}</p>}
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              placeholder="New author..."
              {...register("author")}
            />
            {errors.author && <p>{errors.author?.message}</p>}
          </div>
          <div>
            <label htmlFor="isbnNumber">ISBN:</label>
            <input
              type="number"
              id="isbnNumber"
              placeholder="New ISBN..."
              {...register("isbnNumber")}
            />
            {errors.isbnNumber && <p>{errors.isbnNumber?.message}</p>}
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
          <Link className={styles.link_success} href="/books/edit-book">
            No
          </Link>
        </div>
      </Message>
    </div>
  );
};

export default AddNewBook;
