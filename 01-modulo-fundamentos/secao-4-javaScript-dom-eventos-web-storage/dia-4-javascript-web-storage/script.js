// cor de fundo

const btColorBgWhite = document.querySelector("#btColorBgWhite");
const btColorBgBlack = document.querySelector("#btColorBgBlack");
const btColorBgGreen = document.querySelector("#btColorBgGreen");
const btColorBgBlue = document.querySelector("#btColorBgBlue");
const btColorBgYellow = document.querySelector("#btColorBgYellow");
const secaoPrincipal = document.querySelector("main");

btColorBgWhite.addEventListener("click", () => {
  secaoPrincipal.style.backgroundColor = "white";
  localStorage.setItem("bgColor", "white");
});

btColorBgBlack.addEventListener("click", () => {
  secaoPrincipal.style.backgroundColor = "black";
  localStorage.setItem("bgColor", "black");
});

btColorBgGreen.addEventListener("click", () => {
  secaoPrincipal.style.backgroundColor = "green";
  localStorage.setItem("bgColor", "green");
});

btColorBgBlue.addEventListener("click", () => {
  secaoPrincipal.style.backgroundColor = "blue";
  localStorage.setItem("bgColor", "blue");
});

btColorBgYellow.addEventListener("click", () => {
  secaoPrincipal.style.backgroundColor = "yellow";
  localStorage.setItem("bgColor", "yellow");
});

// cor da fonte

const btColorBlack = document.querySelector("#btColorBlack");
const btColorRed = document.querySelector("#btColorRed");
const btColorWhite = document.querySelector("#btColorWhite");

btColorBlack.addEventListener("click", () => {
  secaoPrincipal.style.color = "black";
  localStorage.setItem("fColor", "black");
});

btColorRed.addEventListener("click", () => {
  secaoPrincipal.style.color = "red";
  localStorage.setItem("fColor", "red");
});

btColorWhite.addEventListener("click", () => {
  secaoPrincipal.style.color = "white";
  localStorage.setItem("fColor", "white");
});