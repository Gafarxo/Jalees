
import React from 'react';

export default function Hero(){
  return (
    <section className="mt-24 mb-12">
      <div className="glass-card hero-waves rounded-3xl p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-jalees-900 leading-tight">
              Welcome to <span className="gradient-text">Jalees</span>
            </h1>
            <p className="mt-6 text-lg text-jalees-700 leading-relaxed">
              خير جليس في هذا الزمان كتاب — A calm place to find your next companion.
            </p>
            <p className="mt-4 text-jalees-600">
              Discover timeless stories, explore new worlds, and share your thoughts with fellow readers.
            </p>
            <a 
              href="#books" 
              className="inline-block mt-8 px-8 py-4 bg-gradient-to-r from-jalees-400 to-jalees-500 text-white rounded-full font-semibold shadow-warm hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Browse Available Books
            </a>
          </div>
          <div className="text-center hidden md:block">
            <div className="relative">
              {/* <div className="w-64 h-80 bg-gradient-to-br from-jalees-200 to-jalees-300 rounded-2xl shadow-warm mx-auto flex items-center justify-center">
                <img src="images\logo.png" alt="Jalees" className="w-64 h-80" />
              </div> */}
              {/* <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-jalees-300 to-jalees-400 rounded-full shadow-warm flex items-center justify-center"> */}
                {/* <span className="text-2xl">✨</span> */}
              {/* </div> */}
              {/* <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-jalees-100 to-jalees-200 rounded-full shadow-warm flex items-center justify-center"> */}
                {/* <span className="text-xl">🌟</span> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}