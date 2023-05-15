import React from "react";

interface BookProps {
  params: {
    id: string;
  };
}

function Book({ params }: BookProps) {
  return (
    <div>
      <h1>Book: {params.id}</h1>
    </div>
  );
}

export default Book;
