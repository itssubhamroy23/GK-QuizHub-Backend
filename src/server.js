const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const Question = require('./models/Question');


const app = express();         // ✅ Declare app first
const PORT = 5000;

app.use(cors());               // ✅ Then use middleware




const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(()=> console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));




// Route to serve questions from MongoDB
app.get('/api/questions', async (req, res) => {
  try {
    const questions = await Question.find().limit(20); // You can add filter by category/difficulty later
    res.json({ response_code: 0, results: questions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch questions" });
  }
});

// Start the SERVER
app.listen(PORT, '0.0.0.0',() => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
