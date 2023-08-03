let blue = document.querySelector("#box-1");
let orange = document.querySelector("#box-2");
let green = document.querySelector("#box-3");
let yellow = document.querySelector("#box-4");
let red = document.querySelector("#box-5");

blue.addEventListener("click", (event) => {
  console.log("Blue box clicked");
  document.body.style.backgroundColor = "blue";
});

orange.addEventListener("click", (event) => {
  console.log("Orange box clicked");
  document.body.style.backgroundColor = "darkorange";
});

green.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
});

yellow.addEventListener("click", () => {
  document.body.style.backgroundColor = "yellow";
});

red.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});
