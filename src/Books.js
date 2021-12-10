import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Books = () => {
  const { books, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="books">
      {books.map((book) => {
        const id = book.id;
        const author = book.volumeInfo.authors;
        const date = book.volumeInfo.publishedDate;
        const publisher = book.volumeInfo.publisher;
        const pages = book.volumeInfo.pageCount;
        const title = book.volumeInfo.title;
       // const cover = book.volumeInfo.imageLinks.thumbnail;

        return (
          <Link to={`/books/:${id}`} key={id} className="book">
            <article>
              <img src={url} alt={title} />
              <div className="book-info">
                <h4 className="title">{title}</h4>
                <p>Author: {author}</p>
                <p>Publication Date: {date}</p>
                <p>Publisher: {publisher}</p>
                <p>Page Count: {pages}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Books;
