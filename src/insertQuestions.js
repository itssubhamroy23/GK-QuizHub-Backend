const mongoose = require('mongoose');
require('dotenv').config();
const Question = require('./models/Question');


// ✅ Replace this array with your 23+ questions
const questions = [
  {
    type: "multiple",
    difficulty: "easy",
    category: "General Knowledge",
    question: "What does the WOW stand for in the GDI?",
    correct_answer: "Global",
    incorrect_answers: ["Gross", "General", "Graphical"]
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "General Knowledge",
    question: "You can legally drink alcohol while driving in Mississippi.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science",
    question: "What planet is known as the Red Planet?",
    correct_answer: "Mars",
    incorrect_answers: ["Venus", "Jupiter", "Saturn"]
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science",
    question: "The Earth is flat.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "History",
    question: "Who was the first President of the United States?",
    correct_answer: "George Washington",
    incorrect_answers: ["Abraham Lincoln", "Thomas Jefferson", "John Adams"]
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Math",
    question: "What is 7 + 6?",
    correct_answer: "13",
    incorrect_answers: ["12", "14", "15"]
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Technology",
    question: "JavaScript is the same as Java.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science",
    question: "What is the chemical symbol for gold?",
    correct_answer: "Au",
    incorrect_answers: ["Ag", "Gd", "Go"]
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Geography",
    question: "What is the capital of Canada?",
    correct_answer: "Ottawa",
    incorrect_answers: ["Toronto", "Vancouver", "Montreal"]
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "General Knowledge",
    question: "How many continents are there?",
    correct_answer: "7",
    incorrect_answers: ["5", "6", "8"]
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Computer Science",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Computer Personal Unit", "Central Power Unit", "Control Processing Unit"]
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Sports",
    question: "Football is played with a round ball.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Literature",
    question: "Who wrote 'Pride and Prejudice'?",
    correct_answer: "Jane Austen",
    incorrect_answers: ["Emily Brontë", "Charles Dickens", "Mark Twain"]
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "History",
    question: "India gained independence in 1947.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science",
    question: "How many bones are in the human body?",
    correct_answer: "206",
    incorrect_answers: ["205", "208", "210"]
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Geography",
    question: "Which is the largest ocean in the world?",
    correct_answer: "Pacific Ocean",
    incorrect_answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Math",
    question: "The square root of 81 is 9.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science",
    question: "Water boils at what temperature (Celsius)?",
    correct_answer: "100",
    incorrect_answers: ["90", "80", "70"]
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Technology",
    question: "Which company developed the Android operating system?",
    correct_answer: "Google",
    incorrect_answers: ["Apple", "Microsoft", "IBM"]
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "General Knowledge",
    question: "Which animal is known as the King of the Jungle?",
    correct_answer: "Lion",
    incorrect_answers: ["Tiger", "Elephant", "Bear"]
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science",
    question: "What gas do humans breathe in that is essential for survival?",
    correct_answer: "Oxygen",
    incorrect_answers: ["Carbon Dioxide", "Nitrogen", "Hydrogen"]
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Math",
    question: "2 + 2 equals 4.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science",
    question: "What is the powerhouse of the cell?",
    correct_answer: "Mitochondria",
    incorrect_answers: ["Ribosome", "Nucleus", "Chloroplast"]
  }
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
