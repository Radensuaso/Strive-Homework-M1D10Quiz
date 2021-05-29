const questions = [
  {
    class: "a",
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
    answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
      "Central Processing Unit",
    ],
  },
  {
    class: "b",
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
    answers: ["Static", "Private", "Public", "Final"],
  },
  {
    class: "c",
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    answers: ["True", "False"],
  },
  {
    class: "d",
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    answers: ["True", "False"],
  },
  {
    class: "e",
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
    answers: [".png", ".jpeg", ".gif", ".svg"],
  },
  {
    class: "f",
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
    answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
  },
  {
    class: "g",
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
    answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow", "Nougat"],
  },
  {
    class: "h",
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
    answers: ["120", "160", "100", "140"],
  },
  {
    class: "i",
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    answers: ["True", "False"],
  },
  {
    class: "j",
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
    answers: ["Python", "C", "Jakarta", "Java"],
  },
]

const mainQuestionsContainer = document.querySelector(
  "#main-questions-container"
)

// User Score
let score = 0

window.onload = function () {}

// create every question container

for (const questionObj of questions) {
  const questionContainer = document.createElement("div") // creating an element for every question in the questions object
  questionContainer.classList.add("question-containers") // adding a class to every container

  mainQuestionsContainer.appendChild(questionContainer) //append the containers to the main-question-container
}

// variable that holds the question-containers array

const questionContainersList = document.querySelectorAll(".question-containers")

// create and append the questions to the containers

for (let i = 0; i < questions.length; i++) {
  const questionH2 = document.createElement("h3")
  questionH2.innerText = questions[i].question
  questionContainersList[i].appendChild(questionH2) // creating h2 element with the question

  const radioButtonsForm = document.createElement("form")
  questionContainersList[i].appendChild(radioButtonsForm) //Append form to put the radio buttons
}

// get the form list in an array
const formList = document.querySelectorAll("form")

//Initialize an array of objects to push the radio buttons the labels so they can be randomized

const radioAndLabelsButtonsArray = []

// create radio buttons and respective labels and create objects and push them in an array

for (let i = 0; i < questions.length; i++) {
  const objectOfWithRadioButtonsToBePushed = {
    // initialize the object to be pushed
    questionClass: questions[i].class,
    radioButtons: [],
    labels: [],
  }

  for (let j = 0; j < questions[i].answers.length; j++) {
    const createdInput = document.createElement("input") //create the input to be pushed
    createdInput.type = "radio"
    createdInput.name = questions[i].class

    const createdLabel = document.createElement("label") //create the label for each input
    createdLabel.htmlFor = questions[i].class
    createdLabel.innerText = questions[i].answers[j]

    objectOfWithRadioButtonsToBePushed.radioButtons.push(createdInput)
    objectOfWithRadioButtonsToBePushed.labels.push(createdLabel)
  }

  radioAndLabelsButtonsArray.push(objectOfWithRadioButtonsToBePushed)
}

// randomize The answers order

for (let i = 0; i < radioAndLabelsButtonsArray.length; i++) {
  const radioButtonsArray = radioAndLabelsButtonsArray[i].radioButtons
  const labelsArray = radioAndLabelsButtonsArray[i].labels
  const randomIndex = []
  for (let j = 0; j < radioButtonsArray.length; j++) {
    randomIndex.push(j)
  }
  randomIndex.sort((a, b) => 0.5 - Math.random())

  for (let j = 0; j < radioButtonsArray.length; j++) {
    formList[i].appendChild(radioButtonsArray[randomIndex[j]])
    formList[i].appendChild(labelsArray[randomIndex[j]])
  }
}

//Get final score

/*

const getFinalScore = () => {
  for (let i = 0; i < formList.length; i++) {
    const listOfNodesChildrenOfForm = formList[i].childNodes
    if (
      listOfNodesChildrenOfForm[listOfNodesChildrenOfForm.length - 3].checked
    ) {
      score++
    }
  }
  alert(`You got ${score} out of ${questions.length}`)
}
*/
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
