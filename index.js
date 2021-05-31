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
  },
  {
    class: "c",
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
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
  },
  {
    class: "h",
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    class: "i",
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
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
  },
]

const mainQuestionsContainer = document.querySelector(
  "#main-questions-container"
)

// User Score
let score = 0

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

  const createdCorrectInput = document.createElement("input") //create correct input
  createdCorrectInput.type = "radio"
  createdCorrectInput.id = questions[i].class + 0
  createdCorrectInput.name = questions[i].class

  const createdCorrectLabel = document.createElement("label") //create correct label
  createdCorrectLabel.htmlFor = questions[i].class
  createdCorrectLabel.innerText = questions[i].correct_answer

  objectOfWithRadioButtonsToBePushed.radioButtons.push(createdCorrectInput) // push the nodes inside the respective arrays
  objectOfWithRadioButtonsToBePushed.labels.push(createdCorrectLabel)

  for (let j = 0; j < questions[i].incorrect_answers.length; j++) {
    const createdInput = document.createElement("input") //create incorrect inputs to be pushed
    createdInput.type = "radio"
    createdInput.id = questions[i].class + (j + 1)
    createdInput.name = questions[i].class

    const createdLabel = document.createElement("label") //create incorrect labels for each input
    createdLabel.htmlFor = questions[i].class
    createdLabel.innerText = questions[i].incorrect_answers[j]

    objectOfWithRadioButtonsToBePushed.radioButtons.push(createdInput) // push the nodes inside the respective arrays
    objectOfWithRadioButtonsToBePushed.labels.push(createdLabel)
  }

  radioAndLabelsButtonsArray.push(objectOfWithRadioButtonsToBePushed)
}

// randomize The answers order

for (let i = 0; i < radioAndLabelsButtonsArray.length; i++) {
  const radioButtonsArray = radioAndLabelsButtonsArray[i].radioButtons // create a variable to store the array of radioButtons
  const labelsArray = radioAndLabelsButtonsArray[i].labels // create a variable to store the array of labels
  const randomIndex = [] // start an array to store the random order of the answers
  for (let j = 0; j < radioButtonsArray.length; j++) {
    randomIndex.push(j) // this is to change the size of the random order depending on the number of possible answers
  }
  randomIndex.sort((a, b) => 0.5 - Math.random()) //randomize the order of the numbers

  for (let j = 0; j < radioButtonsArray.length; j++) {
    formList[i].appendChild(radioButtonsArray[randomIndex[j]]) // now we append a radio button and respective label according to random index
    formList[i].appendChild(labelsArray[randomIndex[j]])
  }
}

//Display the first question container
questionContainersList[0].style.display = "block"

// function to display one question ate a time

const displayOneAtTime = () => {
  for (let i = 0; i < questionContainersList.length; i++) {
    if (questionContainersList[i].style.display === "block") {
      // We loop to find the div that has Display: block
      questionContainersList[i].style.display = "none" // when we find the div with display: block, the same div goes to none
      if (i === questionContainersList.length - 1) {
        document.querySelector("#next").style.display = "none" // here we find if we are in the last index we simply hide the next button and show submit
        document.querySelector("#submit").style.display = "block"
      } else {
        questionContainersList[i + 1].style.display = "block" // else if we aren't in the last index of the containers we simply display the current question
      }
      break // we have to break of the lllp whe we find the first display: block
    }
  }
}

// function to get final score to attach to submit button

const getFinalScore = () => {
  for (const radioAndLabelObj of radioAndLabelsButtonsArray) {
    // The arrays of inputs and labels inside the radioAndLabelsButtonsArray weren't randomized, jus their order in the page
    if (radioAndLabelObj.radioButtons[0].checked) {
      //we know that first element in the arrays of radioButtons inside the radioAndLabelsButtonsArray is the correct one
      score++ // if it's checked increment the score by one
    }
  }
  console.log(score)
  const finalScore = document.createElement("h2") // we create a h2 element to display the score
  finalScore.innerText = `Your Score is ${score} out of ${questions.length}.`
  document.querySelector("#main-questions-container").appendChild(finalScore)

  document.querySelector("#submit").style.display = "none"
}
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
