const refs = {
  input: document.getElementById("font-size-control"),
  changeTextSize: document.getElementById("text"),
};

function onChangeTextHandler(event) {
  refs.changeTextSize.style.fontSize = `${refs.input.value}px`;
}

refs.input.addEventListener("input", onChangeTextHandler);
