import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import api from "../utils/api";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        console.log('Fetching book from:', api.defaults.baseURL);
        const response = await api.get(`/books/${id}`);
        console.log('Book response:', response.data);
        setBook(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching book:', err);
        setError('Book not found');
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const refreshBook = async () => {
    try {
      const response = await api.get(`/books/${id}`);
      setBook(response.data);
    } catch (err) {
      console.error('Error refreshing book:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-jalees-50 to-jalees-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-jalees-300 border-t-jalees-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-jalees-700 text-lg">Loading book details...</p>
        </div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-jalees-50 to-jalees-100">
        <div className="text-center max-w-md mx-auto">
          <div className="w-20 h-20 bg-gradient-to-br from-jalees-200 to-jalees-300 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl">⚠️</span>
          </div>
          <h2 className="text-2xl font-bold text-jalees-900 mb-4">Book Not Found</h2>
          <p className="text-jalees-700 mb-6">{error || 'The book you are looking for does not exist.'}</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-jalees-400 to-jalees-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={() => navigate('/')}
          className="mb-6 text-jalees-600 hover:text-jalees-800 hover:underline flex items-center transition-colors duration-300"
        >
          ← Back to Books
        </button>
        
        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={book.cover} 
                alt={book.title} 
                className="w-full h-96 object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x600/F59E0B/FFFFFF?text=Book+Cover';
                }}
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl font-bold text-jalees-900 mb-2">{book.title}</h1>
              <p className="text-xl text-jalees-600 mb-4">by {book.author}</p>
              
              <div className="flex items-center mb-4">
                <div className="flex text-jalees-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(book.rating) ? 'text-jalees-400' : 'text-jalees-200'}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-2 text-jalees-600">{book.rating} out of 5</span>
              </div>
              
              <p className="text-jalees-700 mb-6 leading-relaxed">{book.description}</p>
              
              <div className="border-t border-jalees-200 pt-6">
                <h3 className="text-xl font-semibold mb-4">Reviews ({book.reviews?.length || 0})</h3>
                
                {book.reviews && book.reviews.length > 0 ? (
                  <div className="space-y-4">
                    {book.reviews.map(review => (
                      <div key={review.id} className="bg-jalees-50/50 rounded-lg p-4 border border-jalees-100">
                        <div className="flex items-center mb-2">
                          <span className="font-medium text-jalees-900">{review.name}</span>
                          <div className="flex text-jalees-400 ml-3">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={i < review.rating ? 'text-jalees-400' : 'text-jalees-200'}>
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                        {review.comment && (
                          <p className="text-jalees-700 text-sm leading-relaxed">{review.comment}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-jalees-500 italic">No reviews yet. Be the first to review this book!</p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <ReviewForm bookId={id} refresh={refreshBook} />
        </div>
      </div>
    </div>
  );
}
