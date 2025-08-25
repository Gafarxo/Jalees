import React, { useState } from "react";
import api from "../utils/api";

export default function ReviewForm({ bookId, refresh }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      await api.post(`/books/${bookId}/reviews`, {
        name,
        rating,
        comment
      });
      
      setName("");
      setRating(5);
      setComment("");
      refresh();
    } catch (err) {
      console.error('Error submitting review:', err);
      alert('Failed to submit review. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="glass-card rounded-3xl p-8">
      <h3 className="text-2xl font-semibold text-jalees-900 mb-6">Add a Review</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-jalees-700 mb-2">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 border border-jalees-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-jalees-400 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
          />
        </div>
        
        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-jalees-700 mb-2">
            Rating
          </label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
            className="w-full px-4 py-3 border border-jalees-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-jalees-400 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
          >
            <option value={5}>5 - Excellent</option>
            <option value={4}>4 - Very Good</option>
            <option value={3}>3 - Good</option>
            <option value={2}>2 - Fair</option>
            <option value={1}>1 - Poor</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-jalees-700 mb-2">
            Review (Optional)
          </label>
          <textarea
            id="comment"
            placeholder="Share your thoughts about this book..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-jalees-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-jalees-400 focus:border-transparent bg-white/50 backdrop-blur-sm resize-none transition-all duration-300"
          />
        </div>
        
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-gradient-to-r from-jalees-400 to-jalees-500 text-white py-3 px-6 rounded-xl font-semibold shadow-warm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-jalees-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
        >
          {submitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
}
