import BookList from "@/components/bookList";
import styles from "./Home.module.css";
import { getAllBooks } from "@/api";

export default async function Home() {
  const books = await getAllBooks();

  return (
    <main className={styles.home_container}>
      <h1>All registered books {`(${books.length})`}</h1>
      <BookList books={books} />
    </main>
  );
}
