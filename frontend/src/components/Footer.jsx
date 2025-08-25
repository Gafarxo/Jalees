import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-jalees-50 to-jalees-100 border-t border-jalees-200 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="glass-card rounded-3xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-jalees-900 mb-4">Jalees</h3>
              <p className="text-jalees-700 text-sm leading-relaxed">
                خير جليس في هذا الزمان كتاب<br />
                A calm place to find your next companion.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-jalees-900 mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/" className="text-jalees-700 hover:text-jalees-900 transition-colors duration-300 hover:scale-105">Home</a></li>
                <li><a href="#books" className="text-jalees-700 hover:text-jalees-900 transition-colors duration-300 hover:scale-105">Books</a></li>
                <li><a href="#about" className="text-jalees-700 hover:text-jalees-900 transition-colors duration-300 hover:scale-105">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-jalees-900 mb-4">Contact</h4>
              <p className="text-jalees-700 text-sm leading-relaxed">
                Have suggestions?<br />
                <a href="mailto:contact@jalees.com" className="text-jalees-600 hover:text-jalees-800 hover:underline transition-colors duration-300">
                  contact@jalees.com
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-jalees-200 mt-8 pt-8 text-center">
            <p className="text-sm text-jalees-600">
              © 2024 Jalees. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
