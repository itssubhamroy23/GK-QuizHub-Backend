const mongoose = require('mongoose');
require('dotenv').config();
const Question = require('./models/Question');

// ✅ Replace this array with your 23+ questions
const questions = [
  {
    type: "multiple",
    difficulty: "easy",
    category: "General Knowledge",
    question: "What does the G stand for in the GDI?",
    correct_answer: "Federal",
    incorrect_answers: ["Foreign", "Formal", "First"]
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "General Knowledge",
    question: "You can legally drink alcohol while driving in Mississippi.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  }
  // ⬅️ Add rest of your questions here
];

async function insertQuestions() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    await Question.deleteMany(); // Optional: Clear existing questions
    await Question.insertMany(questions);

    console.log("✅ Questions inserted successfully");
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error inserting questions:", err);
  }
}

insertQuestions();
