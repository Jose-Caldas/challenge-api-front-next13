import Link from "next/link";
import styles from "./AddBook.module.css";
import { AiOutlinePlus } from "react-icons/ai";

const AddBook = () => {
  return (
    <div>
      <Link href="/form">Add new book</Link>
    </div>
  );
};

export default AddBook;
