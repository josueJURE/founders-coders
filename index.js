const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");

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
