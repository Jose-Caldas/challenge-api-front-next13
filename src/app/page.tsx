import BookLink from "../components/BookLink";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.home_container}>
      <h1>Book List App</h1>
      <BookLink />
    </main>
  );
}
