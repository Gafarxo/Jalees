const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 4000;
const DATA_PATH = path.join(__dirname, 'books.json');

app.use(cors());
app.use(express.json());

// Test endpoint
app.get('/test', (req, res) => {
  res.json({ message: 'Backend server is running!', timestamp: new Date().toISOString() });
});

// Books endpoint
app.get('/books', (req, res) => {
  try {
    if (!fs.existsSync(DATA_PATH)) {
      console.error('Books data file not found:', DATA_PATH);
      return res.status(500).json({ error: 'Books data file not found' });
    }
    
    const raw = fs.readFileSync(DATA_PATH, 'utf8');
    const books = JSON.parse(raw);
    console.log(`Serving ${books.length} books`);
    res.json(books);
  } catch (error) {
    console.error('Error reading books:', error);
    res.status(500).json({ error: 'Failed to read books data' });
  }
});

app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
  console.log(`Books data path: ${DATA_PATH}`);
  console.log(`Test endpoint: http://localhost:${PORT}/test`);
  console.log(`Books endpoint: http://localhost:${PORT}/books`);
});
