"use client";
import { getBook } from "@/api";
import EditBook from "@/components/EditBook";

interface BookProps {
  params: {
    id: string;
  };
}

export default async function EditBookPage({ params }: BookProps) {
  const book = await getBook(params.id);

  return (
    <div>
      <EditBook book={{ ...book }} />
    </div>
  );
}
