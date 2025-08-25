import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <nav className="nav-glass fixed w-full top-0 z-20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className= "logo-icon">
            <img src="images\logo.png" alt="Jalees" className="w-12 h-12" />
          </div>
          {/* <div className="book-icon w-12 h-12">
            📖
          </div> */}
          <div className="text-xl font-bold gradient-text">Jalees</div>
        </div>
        <div className="flex gap-8 items-center">
          <Link to="/" className="text-jalees-700 hover:text-jalees-900 font-medium transition-colors duration-300 hover:scale-105">Home</Link>
          <a href="#books" className="text-jalees-700 hover:text-jalees-900 font-medium transition-colors duration-300 hover:scale-105">Books</a>
          <a href="#about" className="text-jalees-700 hover:text-jalees-900 font-medium transition-colors duration-300 hover:scale-105">About</a>
        </div>
      </div>
    </nav>
  );
}