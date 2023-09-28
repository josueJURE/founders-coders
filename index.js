const startBtn = document.querySelector(".btn");
const container = document.querySelector(".container");
const container2 = document.querySelector(".containerGame");
const progressContainer = document.querySelector(".progress-container");
const scoreContainer = document.querySelector(".score-container");
const footer = document.querySelector("footer");
const allAnswerChoices = Array.from(document.querySelectorAll(".choice"));
const answerChoicesA = document.querySelector("#A");
const answerChoicesB = document.querySelector("#B");
const answerChoicesC = document.querySelector("#C");
const answerChoicesD = document.querySelector("#D");
const answerChoiceE = document.querySelector("#E");
const quizQuestion = document.querySelector(".quizQuestion");
const timeGaugeBg = document.querySelector(".time-gauge-bg");
const counter = document.querySelector(".counter");

const questionTime = 10; // 10 seconds
const guageWidth = 500; // 500px
const gaugeUnit = guageWidth / questionTime; // 50px
let TIMER;
let score = 0;

startBtn.addEventListener("click", startQuiz);

allAnswerChoices.forEach((clickAnswer) => {
  clickAnswer.addEventListener("click", function (e) {
    let userAnswer = e.target.innerText;
    checkAnswer(userAnswer);
  });
});

function checkAnswer(answer) {
  if (answer === questions[activeQuestion].correctAnswer) {
    answerIsCorrect();
    console.log(questions[activeQuestion].correctAnswer);
    score++;
  } else {
    answerIsIncorrect();
    // debugger
    // answerIsIncorrect();
  }
  nextQuestion();
}

let questions = [
  {
    question: "What is JavaScript ?",
    one: "A scripting language that enables you to create dynamically updating content",
    two: "A new anime series on Netflix",
    three: "A new social media created by Elon Musk",
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
    question: "JavaScript is:  ",
    one: "Weakly typed",
    two: "Strongly typed",
    three: "Weakly and Strongly typed",
    correctAnswer: "Weakly typed",
  },
  {
    question: "What does DOM stand for?",
    one: "Document Object Model",
    two: "Data Object Model",
    three: "Dynamic Object Model",
    correctAnswer: "Document Object Model",
  },
  {
    question: "What does CSS stand for?",
    one: "Computer Style Sheets",
    two: "Cascading Style Sheets",
    three: "Creative Style System",
    correctAnswer: "Cascading Style Sheets",
  },
];

const lastQuestion = questions.length - 1;
let activeQuestion = 0;
let count = 0;

function renderQuestion() {
  let q = questions[activeQuestion];
  quizQuestion.innerHTML = `<p> ${q.question} <p>`;
  answerChoicesA.innerHTML = q.one;
  answerChoicesB.innerHTML = q.two;
  answerChoicesC.innerHTML = q.three;
}

function renderProgress() {
  for (var questionIndex = 0; questionIndex <= lastQuestion; questionIndex++) {
    progressContainer.innerHTML += `<div class="progress-box" id=${questionIndex}></div>`;
  }
}

function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
   
    timeGaugeBg.style.width = `${count * gaugeUnit}px`;
    count++;
  } else {
    answerIsIncorrect();
    nextQuestion();
  }
}

function answerIsIncorrect() {
  document.getElementById(activeQuestion).style.backgroundColor = "red";
}

function answerIsCorrect() {
  document.getElementById(activeQuestion).style.backgroundColor = "green";
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

function renderScore() {
  scoreContainer.style.visibility = "visible";

  let scorePercentage = Math.round((100 * score) / questions.length);
  scoreContainer.innerHTML = `<h2>Percentage of Correctly Answered Questions: ${scorePercentage}</h2>`;
  scoreContainer.innerHTML += `<h2>Number of Correctly Answered Questions: ${score}</h2>`;
}

function startQuiz() {
  container.style.display = "none";
  container2.style.display = "flex";
  renderQuestion();
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000);
}

function year() {
  return new Date().getFullYear();
}

footer.innerHTML = `Founders & Coders copyright ${year()} `;
