const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");


btn.addEventListener("click", function () {
  container.style.display = "none";
  container2.style.display = "block";
});
