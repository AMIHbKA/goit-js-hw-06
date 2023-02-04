const inputRef = document.getElementById("validation-input");
const lengthInputRef = Number(inputRef.dataset.length);

function onFocusLost(event) {
  if (inputRef.value.length <= lengthInputRef) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}

inputRef.addEventListener("blur", onFocusLost);
