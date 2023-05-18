import Link from "next/link";
import styles from "./BookLink.module.css";

const BookLink = () => {
  return (
    <Link href="/form" className={styles.link_container}>
      <p>Add new book</p>
    </Link>
  );
};

export default BookLink;
