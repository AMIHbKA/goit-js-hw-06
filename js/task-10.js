function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("#controls input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  targetDiv: document.getElementById("boxes"),
};

function createBoxes(amount) {
  const elem = [];
  let size = 20;

  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const curEl = document.createElement("div");
    curEl.style.width = `${size}px`;
    curEl.style.height = `${size}px`;
    curEl.style.backgroundColor = getRandomHexColor();
    elem.push(curEl);
  }

  refs.targetDiv.append(...elem);
}

function destroyBoxes() {
  refs.targetDiv.innerHTML = "";
}

function onBtnCreateClickHandler() {
  createBoxes(refs.input.value);
}

refs.btnCreate.addEventListener("click", onBtnCreateClickHandler);
refs.btnDestroy.addEventListener("click", destroyBoxes);
