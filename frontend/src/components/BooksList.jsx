import React from "react";
import BookCard from "./BookCard";

export default function BooksList({ books }) {
  if (!books || books.length === 0) {
    return (
      <section id="books" className="mb-12">
        <div className="glass-card rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-jalees-900 mb-6 text-center">Available Books</h2>
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-jalees-200 to-jalees-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl">📚</span>
            </div>
            <p className="text-jalees-600 text-lg">No books available at the moment.</p>
            <p className="text-jalees-500 mt-2">Please check back later or contact support.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="books" className="mb-12">
      <div className="glass-card rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-jalees-900 mb-8 text-center">Available Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
