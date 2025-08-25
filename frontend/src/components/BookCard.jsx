import React from 'react';
import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden card-hover">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-jalees-900 truncate">{book.title}</h3>
          <div className="flex items-center">
            <span className="text-jalees-400">★</span>
            <span className="ml-1 text-sm text-jalees-600 font-medium">{book.rating}</span>
          </div>
        </div>
        <p className="text-sm text-jalees-600 mb-2">by {book.author}</p>
        <p className="text-sm text-jalees-700 mb-4 line-clamp-2 leading-relaxed">{book.description}</p>
        <div className="flex items-center justify-between">
          <Link 
            to={`/book/${book.id}`}
            className="text-jalees-600 hover:text-jalees-800 text-sm font-medium hover:underline transition-colors"
          >
            View Details
          </Link>
          <span className="text-xs text-jalees-500 bg-jalees-50 px-2 py-1 rounded-full">
            {book.reviews?.length || 0} reviews
          </span>
        </div>
      </div>
    </div>
  );
}
