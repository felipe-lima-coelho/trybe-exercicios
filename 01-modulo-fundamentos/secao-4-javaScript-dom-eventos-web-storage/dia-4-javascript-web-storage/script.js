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
