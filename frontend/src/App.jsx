import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookOfDay from './components/BookOfDay';
import BooksList from './components/BooksList';
import BookDetails from './components/BookDetails';
import Footer from './components/Footer';
import api from './utils/api';

// This is the main App component - it's like the "brain" of our app
// It manages the overall state and routing
export default function App(){
  // State variables to store our data
  // useState is a React Hook that lets us add state to functional components
  const [books, setBooks] = useState([]); // Empty array to store books
  const [loading, setLoading] = useState(true); // Boolean to show loading state
  const [error, setError] = useState(null); // String to store any error messages
  
  // useEffect is a React Hook that runs code when the component mounts (loads)
  // It's like saying "when this page loads, do this..."
  useEffect(() => {
    // This function fetches books from our backend server
    const fetchBooks = async () => {
      try {
        // Show loading spinner
        setLoading(true);
        
        // Log what we're doing (helpful for debugging)
        console.log('Fetching books from:', api.defaults.baseURL);
        
        // Make API call to get books
        const response = await api.get('/books');
        console.log('Books response:', response.data);
        
        // Store the books in our state
        setBooks(response.data);
        setError(null); // Clear any previous errors
        
      } catch (err) {
        // If something goes wrong, log the error and show user-friendly message
        console.error('Error fetching books:', err);
        setError('Failed to load books. Please check if the backend server is running.');
      } finally {
        // Always hide loading spinner, whether success or error
        setLoading(false);
      }
    };

    // Call the function when component loads
    fetchBooks();
  }, []); // Empty array means "only run once when component loads"

  // Show loading screen while fetching data
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-jalees-50 to-jalees-100">
        <div className="text-center">
          {/* This creates a spinning loading animation */}
          <div className="w-16 h-16 border-4 border-jalees-300 border-t-jalees-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-jalees-700 text-lg">Loading your books...</p>
        </div>
      </div>
    );
  }

  // Show error screen if something went wrong
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-jalees-50 to-jalees-100">
        <div className="text-center max-w-md mx-auto">
          {/* Error icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-jalees-200 to-jalees-300 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl">⚠️</span>
          </div>
          <h2 className="text-2xl font-bold text-jalees-900 mb-4">Connection Error</h2>
          <p className="text-jalees-700 mb-6">{error}</p>
          
          {/* Helpful troubleshooting steps */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-jalees-100">
            <h3 className="font-semibold text-jalees-900 mb-3">To fix this:</h3>
            <ol className="text-left text-sm text-jalees-700 space-y-2">
              <li>1. Make sure the backend server is running on port 4000</li>
              <li>2. Check that you've run <code className="bg-jalees-100 px-2 py-1 rounded">npm install</code> in the backend folder</li>
              <li>3. Try running <code className="bg-jalees-100 px-2 py-1 rounded">npm start</code> in the backend folder</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  // Main app layout - this is what users see when everything is working
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation bar at the top */}
      <Navbar />
      
      {/* Main content area with routing */}
      <Routes>
        {/* Home page route */}
        <Route path="/" element={
          <main className="flex-grow container mx-auto px-4 py-6">
            <Hero />
            <BookOfDay books={books} />
            <BooksList books={books} />
          </main>
        } />
        
        {/* Individual book page route */}
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}