import React, { useState, useContext, useEffect } from "react";
// make sure to use https
import useFetch from "./useFetch";
export const API_ENDPOINT = `https://www.googleapis.com/books/v1/volumes?q${process.env.REACT_APP_BOOK_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
 

  return (
    <AppContext.Provider value="hello">
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
