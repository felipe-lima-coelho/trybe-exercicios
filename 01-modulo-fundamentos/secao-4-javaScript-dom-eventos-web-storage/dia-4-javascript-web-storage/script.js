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

// tamanho da fonte

const btFontSize8 = document.querySelector("#btFontSize8");
const btFontSize10 = document.querySelector("#btFontSize10");
const btFontSize12 = document.querySelector("#btFontSize12");
const btFontSize14 = document.querySelector("#btFontSize14");
const btFontSize20 = document.querySelector("#btFontSize20");
const paragrafoPrincipal = document.querySelector("#paragrafo");

btFontSize8.addEventListener("click", () => {
  paragrafoPrincipal.style.fontSize = "8pt";
  localStorage.setItem("fSize", "8pt");
});

btFontSize10.addEventListener("click", () => {
  paragrafoPrincipal.style.fontSize = "10pt";
  localStorage.setItem("fSize", "10pt");
});

btFontSize12.addEventListener("click", () => {
  paragrafoPrincipal.style.fontSize = "12pt";
  localStorage.setItem("fSize", "12pt");
});

btFontSize14.addEventListener("click", () => {
  paragrafoPrincipal.style.fontSize = "14pt";
  localStorage.setItem("fSize", "14pt");
});

btFontSize20.addEventListener("click", () => {
  paragrafoPrincipal.style.fontSize = "20pt";
  localStorage.setItem("fSize", "20pt");
});

// espaçamento entre as linhas

const btLineHeight1 = document.querySelector("#btLineHeight1");
const btLineHeightNormal = document.querySelector("#btLineHeightNormal");
const btLineHeight15 = document.querySelector("#btLineHeight15");
const btLineHeight20 = document.querySelector("#btLineHeight20");
const btLineHeight30 = document.querySelector("#btLineHeight30");

btLineHeight1.addEventListener("click", () => {
  paragrafoPrincipal.style.lineHeight = "1"
  localStorage.setItem("lineHeight", "1");
});

btLineHeightNormal.addEventListener("click", () => {
  paragrafoPrincipal.style.lineHeight = "1.1"
  localStorage.setItem("lineHeight", "1.1");
});

btLineHeight15.addEventListener("click", () => {
  paragrafoPrincipal.style.lineHeight = "1.5"
  localStorage.setItem("lineHeight", "1.5");
});

btLineHeight20.addEventListener("click", () => {
  paragrafoPrincipal.style.lineHeight = "2"
  localStorage.setItem("lineHeight", "2");
});

btLineHeight30.addEventListener("click", () => {
  paragrafoPrincipal.style.lineHeight = "3"
  localStorage.setItem("lineHeight", "3");
});

// tipo da fonte

const btFontFamilyArial = document.querySelector("#btFontFamilyArial");
const btFontFamilyTimes = document.querySelector("#btFontFamilyTimes");

btFontFamilyArial.addEventListener("click", () => {
  secaoPrincipal.style.fontFamily = "Arial, Helvetica, sans-serif";
  localStorage.setItem("fontFamily", "Arial, Helvetica, sans-serif");
});

btFontFamilyTimes.addEventListener("click", () => {
  secaoPrincipal.style.fontFamily = "'Times New Roman', Times, serif";
  localStorage.setItem("fontFamily", "'Times New Roman', Times, serif");
});