window.addEventListener("DOMContentLoaded", start);

let inputRangeRed = document.querySelector("#inputRangeRed");
let inputTextRed = document.querySelector("#inputTextRed");
let inputRangeGreen = document.querySelector("#inputRangeGreen");
let inputTextGreen = document.querySelector("#inputTextGreen");
let inputRangeBlue = document.querySelector("#inputRangeBlue");
let inputTextBlue = document.querySelector("#inputTextBlue");
let changeColor = document.querySelector("#changeColor");
let valueColor = document.querySelector("#valueColor");

function start() {
  inputWorking();
}

function inputWorking() {
  inputRangeRed.focus();

  document.addEventListener("input", function () {
    inputTextRed.textContent = inputRangeRed.value;
    inputTextGreen.textContent = inputRangeGreen.value;
    inputTextBlue.textContent = inputRangeBlue.value;
  });

  changeColors();
}

function changeColors() {
  addEventListener("input", function () {
    let concatColors = (document.getElementById(
      "valueColor"
    ).innerHTML = `rgb(${inputRangeRed.value}, ${inputRangeGreen.value}, ${inputRangeBlue.value})`);
    let changedColorRgb = document.getElementById("changeColor");
    changedColorRgb.style.backgroundColor = concatColors;
  });
}
