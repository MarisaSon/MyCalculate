import { changeColor } from "./toggleButton.js";
let toggleButton = document.querySelector("#toggleButton");
toggleButton.addEventListener("click", changeColor);

// let buttons = document.querySelectorAll(".button");
// buttons.forEach(function (button) {
//   button.addEventListener("click", buttonClicked);
// });

let input = document.querySelector(".display__text_result");
let keybord = document.querySelector(".keybord");
keybord.addEventListener("click", buttonClicked);

function buttonClicked(e) {
  let activeButton = e.target.closest("button");
  if (!activeButton) {
    return;
  }
  const buttonValue = activeButton.innerText;

  // switch(value){
  //     case'C':
  //     input.innerText = '';
  //     return;
  //   }

  // if (buttonValue === "C") {
  //   input.innerText = "";
  //   return;
  // }

  if (e.target.dataset.clearAll != undefined) {
    input.innerText = "";
    return;
  }

  // if (activeButton.classList.contains("icon")) {
  //   input.innerText = input.innerText.substring(0, input.innerText.length - 1);
  //   return;
  // }

  if (e.target.dataset.deleteElement != undefined) {
    input.innerText = input.innerText.substring(0, input.innerText.length - 1);
    return;
  }

  // if (buttonValue === "0" && input.innerText === "0") {
  //   return;
  // }

  // if (e.target.dataset.zero != undefined && input.innerText.dataset.zero != undefined){
  //   return;
  // }

  

  if (input.innerText === "0") {
    input.innerText = "";
  }

  input.innerHTML += buttonValue;

  console.log(activeButton);
}

// const icon = document.querySelector(".button__icon");
//   icon.addEventListener("click", deleteElement);

// function deleteElement() {
//   let text = input.innerText;
//   input.innerText = text.substring(0, text.length -1);
// }
