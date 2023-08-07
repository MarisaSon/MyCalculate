import { changeColor } from "./toggleButton.js";
let toggleButton = document.querySelector("#toggleButton");
toggleButton.addEventListener("click", changeColor);

let displayState = document.getElementById("displayState");
let display = "";
let keybord = document.querySelector(".keybord");
keybord.addEventListener("click", buttonClick);

/**
 * Обрабатывает событие по нажатию кнопки
 */
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
      addOperator("÷");
      break;

    case "multipli":
      addOperator("x");
      break;

    case "plus_minus":
      addPlusMinus();
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

/**
 * Отобразить данные на дисплей
 */
function showDisplay() {
  displayState.innerText = display;

  if (display.length >= 10 && window.screen.width > 500) {
    displayState.style.fontSize = "3.7rem";
  }
}

/**
 * Очистить весь дисплей
 */
function clearAll() {
  display = "";
}

/**
 * Удалить последний элемент на дисплее
 */
function deleteElement() {
  display = display.substring(0, display.length - 1);
}

/**
 * Проверка является ли значение оператором
 */
function isOperator(value) {
  return value === "-" || value === "+" || value === "÷" || value === "x";
}

/**
 * Добавить оператор на дисплей
 */
function addOperator(value) {
  const lastElement = display[display.length - 1];
  const isLastElementOperator = isOperator(lastElement);

  if (display === "") {
    return;
  }

  if (lastElement === ".") {
    display = display.slice(0, -1);
  }

  if (isLastElementOperator) {
    const newdisplayState = display.slice(0, -1) + "";
    display = newdisplayState + " " + value;

    return;
  } else {
    display = display + " " + value;
  }
}

/**
 * Добавить цифру на дисплей
 */
function addNumber(value) {
  const lastElement = display[display.length - 1];
  const isLastElementOperator = isOperator(lastElement);
  const displaySplited = display.split(" ");
  const lastNumber = displaySplited.pop();

  if (lastNumber.length >= 15) {
    alert("Нельзя вводить более 15 цифр!");

    return;
  }

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

/**
 * Добавить точку на дисплей
 */
function addDot() {
  const lastElement = display[display.length - 1];
  const isLastElementOperator = isOperator(lastElement);
  const displaySplited = display.split(" ");
  const lastNumber = displaySplited.pop();
  const isDotExists = lastNumber.includes(".");

  if (isDotExists) {
    return;
  }
  if (isLastElementOperator || lastElement === "." || display === "") {
    return;
  }

  display = display + ".";
}

/**
 *  Смена знака оператора на дисплее
 */
function addPlusMinus() {
  const displaySplited = display.split(" ");
  const lastNumber = displaySplited.pop();

  if (display === "") {
    return;
  }

  if (isOperator(lastNumber)) {
    return;
  }

  const changedLastNumber = "-(" + lastNumber + ")";

  displaySplited.push(changedLastNumber);

  const displayJoin = displaySplited.join(" ");

  display = displayJoin;
}

/**
 * Добавить проценты на дисплей
 */
function addPercent() {
  calculate();
  display = display / 100;
}

/**
 * Функция вычисления
 */
function calculate() {
  display = display.replace(/÷/g, "/");
  display = display.replace(/x/g, "*");
  display = eval(display);

  if (display === Infinity) {
    alert("На ноль делить нельзя!");
    display = "";
  }
}
