import React, { useState, useContext, useEffect } from "react";
// make sure to use https
export const API_ENDPOINT = `https://www.googleapis.com/books/v1/volumes?q=`;
export const API_KEY = `${process.env.REACT_APP_BOOK_API_KEY}`;

//console.log(API_ENDPOINT);

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("dracula");

  const fetchBooks = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.items) {
        setBooks(data.items);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks(`${API_ENDPOINT}${query}${API_KEY}&maxResults=20`);
  }, [query]);

  return (
    <AppContext.Provider value={{ isLoading, error, books, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
