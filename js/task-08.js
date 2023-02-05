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
    const formData = new FormData(event.currentTarget);
    const returnData = {};
    formData.forEach((value, name) => {
      returnData[name] = value;
    });
    console.log(returnData);
    form.reset();
  }
}

form.addEventListener("submit", handleSubmit);
