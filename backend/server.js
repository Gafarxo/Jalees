const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { nanoid } = require('nanoid');

const app = express();
const PORT = process.env.PORT || 4000;
const DATA_PATH = path.join(__dirname, 'books.json');

app.use(cors());
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use('/book-covers', express.static(path.join(__dirname, 'book-covers')));

function readData(){
  const raw = fs.readFileSync(DATA_PATH);
  return JSON.parse(raw);
}
function writeData(data){
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

// GET /books
app.get('/books', (req, res) => {
  const books = readData();
  res.json(books);
});

// GET /books/:id
app.get('/books/:id', (req, res) => {
  const books = readData();
  const book = books.find(b => b.id === req.params.id);
  if(!book) return res.status(404).json({error: 'Book not found'});
  res.json(book);
});

// POST /books/:id/reviews
app.post('/books/:id/reviews', (req, res) => {
  const { name, rating, comment } = req.body;
  if(!name || !rating) return res.status(400).json({error: 'Name and rating required'});
  const books = readData();
  const book = books.find(b => b.id === req.params.id);
  if(!book) return res.status(404).json({error: 'Book not found'});
  const newReview = { id: nanoid(6), name, rating: Number(rating), comment: comment || '' };
  book.reviews.push(newReview);
  // optional: update book average rating
  book.rating = Number((book.reviews.reduce((s,r)=>s+r.rating,0)/book.reviews.length).toFixed(2));
  writeData(books);
  res.status(201).json(newReview);
});

// PUT /books/:id/reviews/:reviewId
app.put('/books/:id/reviews/:reviewId', (req, res) => {
  const { name, rating, comment } = req.body;
  const books = readData();
  const book = books.find(b => b.id === req.params.id);
  if(!book) return res.status(404).json({error: 'Book not found'});
  const review = book.reviews.find(r => r.id === req.params.reviewId);
  if(!review) return res.status(404).json({error: 'Review not found'});
  if(name) review.name = name;
  if(rating) review.rating = Number(rating);
  if(comment !== undefined) review.comment = comment;
  book.rating = Number((book.reviews.reduce((s,r)=>s+r.rating,0)/book.reviews.length).toFixed(2));
  writeData(books);
  res.json(review);
});

// DELETE /books/:id/reviews/:reviewId
app.delete('/books/:id/reviews/:reviewId', (req, res) => {
  const books = readData();
  const book = books.find(b => b.id === req.params.id);
  if(!book) return res.status(404).json({error: 'Book not found'});
  const idx = book.reviews.findIndex(r => r.id === req.params.reviewId);
  if(idx === -1) return res.status(404).json({error: 'Review not found'});
  book.reviews.splice(idx,1);
  if(book.reviews.length) book.rating = Number((book.reviews.reduce((s,r)=>s+r.rating,0)/book.reviews.length).toFixed(2));
  writeData(books);
  res.json({success: true});
});

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));