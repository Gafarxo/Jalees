import React, { useEffect, useState } from "react";
import axios from "axios";
import BookList from "../components/BookList";

function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books").then(res => {
      setBooks(res.data);
    });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>جليس Jalees</h1>
      <p>خيرُ جليسٍ في هذا الزمان كتاب 📖</p>
      <BookList books={books} />
    </div>
  );
}

export default HomePage;
