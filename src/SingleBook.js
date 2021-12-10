import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { API_ENDPOINT } from "./context";
import { API_KEY } from "./context";

function SingleBook() {
  const { id } = useParams();
  const { book, setBook } = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchBook = async (url) => {
    const response = await fetch(url);
    const data = await response.json;
    if (data.items === "false") {
      setError({ show: true });
      setIsLoading(false);
    } else {
      setBook(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBook(`${API_ENDPOINT}${id}${API_KEY}`);
  }, [id]);

  return <div>Single Book</div>;
}

export default SingleBook;
