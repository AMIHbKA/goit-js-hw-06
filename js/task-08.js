// const refs = {
//   inputEmail: document.getElementsByName("email"),
//   inputPassword: document.getElementsByName("password"),
//   submitBtn: document.querySelector(".login-form button"),
// };

// onClickSubmitButtonHandler(event) {

// }

const form = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    const result = {
      email,
      password,
    };
    console.table(result);
  }
}

form.addEventListener("submit", handleSubmit);

console.log(form.elements);
