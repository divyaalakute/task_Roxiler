



const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

const PORT = 4000;
const MONGO_URI = 'mongodb://127.0.0.1:27017/merndb'; // Correct connection string

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Example route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

