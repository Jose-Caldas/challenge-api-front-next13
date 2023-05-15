import { IBook } from "./types/book";

const baseUrl = "http://localhost:3333";

export const getAllBooks = async (): Promise<IBook[]> => {
  const response = await fetch(`${baseUrl}/books`);
  const { books } = await response.json();
  return books;
};
