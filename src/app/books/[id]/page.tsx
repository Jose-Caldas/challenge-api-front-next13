"use client";
import { getAllBooks } from "@/api";
import FormBook from "@/components/FormBook";
import { IBook } from "@/types/book";
import React, { useState } from "react";

interface BookProps {
  params: {
    id: string;
  };
}

export default async function editBookPage({ params }: BookProps) {
  const books = await getAllBooks();
  const result = books.filter((book) => book._id === params.id);

  return (
    <div>
      {result.map((r) => (
        <p key={r._id}>{r.title}</p>
      ))}
      <FormBook formTitle="Edit book" />
    </div>
  );
}
