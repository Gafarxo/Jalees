import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookDetail from "../components/BookDetail";
import ReviewForm from "../components/ReviewForm";

function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  const fetchBook = () => {
    axios.get(`http://localhost:5000/books/${id}`).then(res => {
      setBook(res.data);
    });
  };

  useEffect(() => {
    fetchBook();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <BookDetail book={book} refresh={fetchBook} />
      <ReviewForm bookId={id} refresh={fetchBook} />
    </div>
  );
}

export default BookPage;
