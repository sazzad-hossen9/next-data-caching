import React, { cache } from "react";
import BooksCard from "../components/BooksCard";
const getBook = async () => {
  const res = await fetch("http://localhost:5000/books", {
    next: {
      revalidate: 20,
    },
  });
  if (!res.ok) {
    throw new Error("plisse try again");
  }
  return res.json();
};
export default async function BookPage() {
  const books = await getBook();

  return (
    <div>
      BookPage : {books.length}
      <div className=" flex justify-center gap-4 flex-wrap">
        {books.map((book) => (
          <BooksCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
