const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const progressContainer = document.querySelector(".progress-container");
const allAnswerChoices = Array.from(document.querySelectorAll(".choice"));
const answerChoicesA = document.querySelector("#A");
const answerChoicesB = document.querySelector("#B");
const answerChoicesC = document.querySelector("#C");
const answerChoicesD = document.querySelector("#D");
const answerChoiceE = document.querySelector("#E");
const quizQuestion = document.querySelector(".quizQuestion");
const timeGauge = document.querySelector(".time-gauge");
const counter = document.querySelector(".counter");
console.log(timeGauge)
const questionTime = 10; // 10 seconds
const guageWidth = 800; // 800px
const gaugeUnit = guageWidth / questionTime; // 80px
let TIMER; 




btn.addEventListener("click", function () {
  container.style.display = "none";
  container2.style.display = "flex";
});

let questions = [
  {
    question: "What is JavaScript",
    one: "A scripting language that enables you to create dynamically updating content",
    two: "A new anime series on Netflix",
    three: "A new social media create  by Elon Musk",
    correctAnswer:
      "A scripting language that enables you to create dynamically updating content",
  },

  {
    question: "What does HTML stand for?",
    one: "Hypertext Markup Language",
    two: "Highly Technical Modern Language",
    three: "Hyper Transfer Markup Language",
    correctAnswer: "Hypertext Markup Language",
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    one: "color",
    two: "background-color",
    three: "font-family",
    correctAnswer: "color",
  },
  {
    question: "What does DOM stand for?",
    one: "Document Object Model",
    two: "Data Object Model",
    three: "Dynamic Object Model",
    correctAnswer: "Document Object Model",
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    one: "var",
    two: "let",
    three: "const",
    correctAnswer: "var",
  },
];

const lastQuestion = questions.length -1;
let activeQuestion = 0;
let count = 0;

function renderQuestion() {
  let q = questions[activeQuestion];
  quizQuestion.innerHTML = `<p> ${q.question} <p>`;
  answerChoicesA.innerHTML = q.one;
  answerChoicesB.innerHTML = q.two;
  answerChoicesC.innerHTML = q.three;
  console.log(q.question)
}

function renderProgress() {
  for(var questionIndex = 0; questionIndex <= lastQuestion; questionIndex++) {
    progressContainer.innerHTML += `<div class="progress-box" id=${questionIndex}></div>`

  }
}

function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = `${count} * ${gaugeUnit} px`
    count ++;
  } else {
    answerIsIncorrect();
    nextQuestion();
    
  }

}

function answerIsIncorrect() {
  document.getElementById(activeQuestion).style.backgroundColor = "red";
}

function nextQuestion() {
  count = 0;
  if (activeQuestion < lastQuestion) {
    activeQuestion++;
    renderQuestion();
  } else {
    clearInterval(TIMER);
    renderScore();
  }
}

renderQuestion()
renderProgress()
renderCounter()


