import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book List App",
  description: "A simple book list",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="nav_container">
          <ul className="nav">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/books">Books</Link>
            </li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
}
