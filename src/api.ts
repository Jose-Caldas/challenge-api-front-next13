import { IBook } from "./types/book";

const baseUrl = "http://localhost:3333";

export const getAllBooks = async (): Promise<IBook[]> => {
  const response = await fetch(`${baseUrl}/books`, {
    cache: "no-store",
  });
  const { books } = await response.json();
  return books;
};

export const addBook = async (book: IBook): Promise<IBook> => {
  const response = await fetch(`${baseUrl}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  const newBook = await response.json();
  return newBook;
};
export const editBook = async (book: IBook): Promise<IBook> => {
  const response = await fetch(`${baseUrl}/book/${book._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  const updatedBook = await response.json();
  return updatedBook;
};
export const deleteBook = async (_id: string | undefined): Promise<void> => {
  await fetch(`${baseUrl}/books/${_id}`, {
    method: "DELETE",
  });
};
