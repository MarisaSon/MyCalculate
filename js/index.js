import { changeColor } from "./toggleButton.js";
import { buttonClick } from "./calculate.js";

let toggleButton = document.querySelector("#toggleButton");
toggleButton.addEventListener("click", changeColor);

let keybord = document.querySelector(".keybord");
keybord.addEventListener("click", buttonClick);
