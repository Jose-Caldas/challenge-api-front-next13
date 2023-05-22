import Link from "next/link";
import styles from "./BookLink.module.css";
import { BiBookAdd } from "react-icons/bi";
BiBookAdd;

const BookLink = () => {
  return (
    <Link href="/form" className={styles.link_container}>
      <p>Add new book</p>
      <BiBookAdd />
    </Link>
  );
};

export default BookLink;
