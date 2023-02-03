let counterValue = 0;
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const valueRef = document.getElementById("value");

const onIncrement = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

const onDecrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

incrementBtnRef.addEventListener("click", onIncrement);
decrementBtnRef.addEventListener("click", onDecrement);

console.log(valueRef.textContent);
