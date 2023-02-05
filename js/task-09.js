function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const btnChangeColorRef = document.querySelector(".change-color");
const colorValueRef = document.querySelector(".color");

function onBtnChangeColorClickHandler(event) {
  colorValueRef.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = colorValueRef.textContent;
}

btnChangeColorRef.addEventListener("click", onBtnChangeColorClickHandler);
