"use client";
import { getAllBooks } from "@/api";
import EditBook from "@/components/EditBook";

interface BookProps {
  params: {
    id: string;
  };
}

export default async function EditBookPage({ params }: BookProps) {
  const books = await getAllBooks();
  const book = books.filter((book) => book._id === params.id);

  return (
    <div>
      {book.map(({ _id, title, author, isbnNumber }) => (
        <EditBook
          key={_id}
          book={{
            _id,
            title,
            author,
            isbnNumber,
          }}
        />
      ))}
    </div>
  );
}
