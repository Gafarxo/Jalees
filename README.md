# 📚 Jalees - Booklist App

A modern, responsive book recommendation application built with the MERN stack. Features a beautiful glass-morphism design with Arabic language support and an animated wave background.

![Jalees App](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🌟 **Beautiful Glass-Morphism Design** - Modern UI with backdrop blur effects
- 🌊 **Animated Wave Backgrounds** - Dynamic radial gradients in the hero section
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🌍 **Arabic Language Support** - Bilingual content with proper RTL support
- 📚 **Book Management** - Browse, view details, and manage book collections
- ⭐ **Review System** - Rate and review books with a user-friendly interface
- 🎨 **Custom Yellow Theme** - Warm, welcoming color palette
- 🚀 **Modern Tech Stack** - Built with React 18, Node.js, and Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Router** - Client-side routing for single-page application
- **Axios** - HTTP client for API communication

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **CORS** - Cross-origin resource sharing
- **JSON Storage** - Simple file-based data storage

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/jalees-booklist-app.git
   cd jalees-booklist-app
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Start the backend server**
   ```bash
   cd ../backend
   npm start
   ```
   The backend will run on `http://localhost:4000`

5. **Start the frontend development server**
   ```bash
   cd ../frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000`

6. **Open your browser**
   Navigate to `http://localhost:3000` to see your app!

## 📁 Project Structure

```
Jalees/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   │   └── images/         # Book cover images
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Page components
│   │   ├── utils/          # Utility functions
│   │   └── App.jsx         # Main application component
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   └── package.json        # Frontend dependencies
├── backend/                 # Node.js backend server
│   ├── server.js           # Express server with API endpoints
│   ├── books.json          # Sample book data
│   └── package.json        # Backend dependencies
└── README.md               # This file
```

## 🌐 API Endpoints

### Books
- `GET /books` - Retrieve all books
- `GET /books/:id` - Get a specific book by ID

### Reviews
- `POST /books/:id/reviews` - Add a new review to a book
- `PUT /books/:id/reviews/:reviewId` - Update an existing review
- `DELETE /books/:id/reviews/:reviewId` - Delete a review

## 🎨 Customization

### Adding New Books
Edit `backend/books.json` to add new books:
```json
{
  "id": "unique-id",
  "title": "Book Title",
  "author": "Author Name",
  "rating": 4.5,
  "description": "Book description...",
  "cover": "/images/book-covers/book-cover.jpg",
  "reviews": []
}
```

### Changing the Theme
Modify `frontend/tailwind.config.js` to customize colors:
```javascript
colors: {
  'jalees': {
    400: '#FBBF24',  // Primary yellow
    500: '#F59E0B',  // Darker yellow
    600: '#D97706',  // Darkest yellow
  }
}
```

### Adding Book Cover Images
1. Place your images in `frontend/public/images/book-covers/`
2. Update the `cover` field in `books.json`
3. Use consistent dimensions (400x600px recommended)

## 🌟 Key Features Explained

### Glass-Morphism Design
The app uses modern CSS techniques including:
- `backdrop-filter: blur()` for glass effects
- Semi-transparent backgrounds
- Subtle shadows and borders

### Animated Wave Background
The hero section features animated radial gradients that:
- Move in different directions
- Use different timing for depth
- Create a dynamic, engaging experience

### Arabic Language Support
- Proper RTL (right-to-left) text handling
- Arabic book titles and descriptions
- Cultural content inclusion

## 🚨 Troubleshooting

### Common Issues

**"No books available"**
- Ensure the backend server is running on port 4000
- Check that `npm install` was run in the backend folder
- Verify `books.json` exists and has valid JSON

**"Port already in use"**
- Close other applications using ports 3000/4000
- Kill processes or use different ports

**"Module not found"**
- Run `npm install` in both `backend` and `frontend` folders
- Ensure Node.js is properly installed

**"Cannot connect to backend"**
- Check backend terminal shows "Server running on port 4000"
- Verify CORS is enabled in backend/server.js

### Development Tips
- Use `npm run dev` in backend for auto-restart during development
- Frontend auto-reloads when you save changes
- Check browser console for React component debugging
- Use browser network tab to monitor API calls

## 🎯 Future Enhancements

- [ ] User authentication and accounts
- [ ] Search and filter functionality
- [ ] Book recommendations algorithm
- [ ] Multiple language support
- [ ] Mobile app version
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Admin panel for content management

## 🏆 What This Project Demonstrates

✅ **Full-Stack Development** - Complete frontend and backend application  
✅ **Modern Web Technologies** - React 18, Node.js, Tailwind CSS  
✅ **Responsive Design** - Mobile-first approach with modern CSS  
✅ **API Development** - RESTful API with proper error handling  
✅ **Internationalization** - Arabic language support  
✅ **Code Organization** - Clean, maintainable code structure  
✅ **User Experience** - Beautiful UI with smooth animations  

## 👨‍💻 Author

**Gafar** - *Aspiring Web Developer*

- GitHub: [@yourusername](https://github.com/gafarxo)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/gaafar)

---

⭐ **Star this repository if you found it helpful!**

**Happy coding! 🚀**
