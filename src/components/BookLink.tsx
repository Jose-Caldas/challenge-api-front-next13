import Link from "next/link";
import styles from "./BookLink.module.css";
import { AiOutlinePlus } from "react-icons/ai";

const BookLink = () => {
  return (
    <Link href="/form" className={styles.link_container}>
      <p>Add new book</p>
      <AiOutlinePlus />
    </Link>
  );
};

export default BookLink;
