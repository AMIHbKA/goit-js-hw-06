let counterValue = 0;
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const valueRef = document.getElementById("value");

const onIncrementBtnClick = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

const onDecrementBtnClick = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

incrementBtnRef.addEventListener("click", onIncrementBtnClick);
decrementBtnRef.addEventListener("click", onDecrementBtnClick);
