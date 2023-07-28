import { changeColor } from "./toggleButton.js";
let toggleButton = document.querySelector("#toggleButton");
toggleButton.addEventListener("click", changeColor);

let displayState = document.getElementById("displayState");
let display = "";
let keybord = document.querySelector(".keybord");
keybord.addEventListener("click", buttonClick);

function buttonClick(e) {
  let action = e.target.dataset.action;

  switch (action) {
    case "one":
      addNumber(1);
      break;

    case "two":
      addNumber(2);
      break;

    case "three":
      addNumber(3);
      break;

    case "four":
      addNumber(4);
      break;

    case "five":
      addNumber(5);
      break;

    case "six":
      addNumber(6);
      break;

    case "seven":
      addNumber(7);
      break;

    case "eight":
      addNumber(8);
      break;

    case "nine":
      addNumber(9);
      break;

    case "zero":
      addNumber(0);
      break;

    case "minus":
      addOperator("-");
      break;

    case "plus":
      addOperator("+");
      break;

    case "division":
      addOperator("/");
      break;

    case "multipli":
      addOperator("*");
      break;

    case "clear":
      clearAll();
      break;

    case "percent":
      addPercent("%");
      break;

    case "delete_element":
      deleteElement();
      break;

    case "dot":
      addDot(".");
      break;

    case "equally":
      calculate();
      break;

    default:
      break;
  }
  showDisplay();
}

function showDisplay() {
  displayState.innerText = display;
}

function clearAll() {
  display = "";
}

function deleteElement() {
  display = display.substring(0, display.length - 1);
  console.log(deleteElement);
}

function isOperator(value) {
  return value === "-" || value === "+" || value === "/" || value === "*";
}

function addOperator(value) {
  const lastElement = display[display.length - 1];
  const isLastElementOperator = isOperator(lastElement);

  if (lastElement === ".") {
    display = display.slice(0, -1);
  }

  if (isLastElementOperator) {
    const newdisplayState = display.slice(0, -1) + "";
    console.log(newdisplayState);
    display = newdisplayState + " " + value;
    return;
  } else {
    display = display + " " + value;
  }
}

function addNumber(value) {
  const lastElement = display[display.length - 1];
  const isLastElementOperator = isOperator(lastElement);

  if (display === "0") {
    display = value + "";
    return;
  }

  if (isLastElementOperator) {
    display = display + " " + value;
  } else {
    display = display + value;
  }
}

function addDot() {
  const lastElement = display[display.length - 1];
  const isLastElementOperator = isOperator(lastElement);
  if (isLastElementOperator || lastElement === "." || display === "") {
    return;
  } else {
    display = display + ".";
  }
}

function addPercent() {
  display = eval(display) / 100;
}

function calculate() {
  const computedResult = display.split(" ").join("");
  display = eval(computedResult);
}
