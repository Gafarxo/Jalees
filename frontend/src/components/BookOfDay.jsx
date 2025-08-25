import React from 'react';
import { Link } from 'react-router-dom';

export default function BookOfDay({ books }){
  if(!books || !books.length) {
    return (
      <section className="mb-12">
        <div className="glass-card rounded-3xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-jalees-900 mb-4">Book of the Day</h3>
            <p className="text-jalees-600">Loading books...</p>
          </div>
        </div>
      </section>
    );
  }
  
  const book = books[Math.floor(Math.random()*books.length)];
  
  return (
    <section className="mb-12">
      <div className="glass-card rounded-3xl p-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="relative">
            <img 
              src={book.cover} 
              alt={book.title} 
              className="w-48 h-64 rounded-2xl object-cover shadow-warm"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/192x256/F59E0B/FFFFFF?text=Book+Cover';
              }}
            />
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-jalees-400 to-jalees-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-warm">
              Book of the Day
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-jalees-900 mb-3">{book.title}</h3>
            <p className="text-xl text-jalees-700 mb-4">by {book.author}</p>
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="flex text-jalees-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(book.rating) ? 'text-jalees-400' : 'text-jalees-200'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-3 text-jalees-600 font-medium">{book.rating} out of 5</span>
            </div>
            <p className="text-jalees-700 mb-6 leading-relaxed max-w-2xl">{book.description}</p>
            <Link 
              to={`/book/${book.id}`} 
              className="inline-block px-8 py-3 bg-gradient-to-r from-jalees-400 to-jalees-500 text-white rounded-full font-semibold shadow-warm hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}