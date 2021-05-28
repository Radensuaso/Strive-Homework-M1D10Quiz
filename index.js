const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
]

const mainQuestionsContainer = document.querySelector(
  "#main-questions-container"
)

window.onload = function () {}

// create every question container
for (const questionObj of questions) {
  const questionContainer = document.createElement("div") // creating an element for every question in the questions object
  questionContainer.classList.add("question-containers") // adding a class to every container

  mainQuestionsContainer.appendChild(questionContainer) //append the containers to the main-question-container
}

// variable that holds the question-containers array

const questionContainersList = document.querySelectorAll(".question-containers")

/*
  for (const questionObj of questions) {
    const categoryH3 = (document.createElement("h3").innerText =
      questionObj.category) // creating h3 element with category of the question
    const questionH2 = (document.createElement("h2").innerText =
      questionObj.question) // creating h2 element with the question

    questionContainer.appendChild(categoryH3)
    questionContainer.appendChild(questionH2)
  }
*/

// create and append the questions to the containers
for (let i = 0; i < questions.length; i++) {
  const categoryH3 = document.createElement("h3")
  categoryH3.innerText = "Category: " + questions[i].category // creating h3 element with category of the question
  const questionH2 = document.createElement("h2")
  questionH2.innerHTML = "Question: " + questions[i].question // creating h2 element with the question

  questionContainersList[i].appendChild(categoryH3)
  questionContainersList[i].appendChild(questionH2)
}

// function to display one question at a time

const displayQuestion = () => {}

// IF YOU ARE DISPLAYING ALL THE QUESTIONS AT ONCE:
// HINT: for each question, create a container with the "question"
// create a radio button https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio with, as option the both the correct answer and the incorrect answers
// when EVERY question has an answer (google for how to get a value from a radio button with JS)
// IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
// Display first question with a title + radio button
// when the user select the answer, pick the next question and remove this from the page after added in a varible the users' choice.

// HOW TO calculate the result
// You can do it in 2 ways:
// If you are presenting all questions together, just take all the radio buttons and check if the selected answer === correct_answer
// If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer
