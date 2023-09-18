const formValidation = document.getElementById("formValidation");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phonenumber");
const message = document.getElementById("message");

/////regex check for inputs
const nameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phonNumberRegex = /^\d{3}-\d{7}$/;
const TextExtra = /^[a-zA-Z0-9]{1,100}$/;
///valitaions of name input and email input

formValidation.addEventListener("submit", validation);
function validation(event) {
  event.preventDefault();

  if (!nameAndEmail(email, fullname)) {
    if (!nameRegex.test(fullname.value)) {
      fullname.classList.add("invalidInput");
    } else {
      fullname.classList.add("validInput");
    }
    if (!emailRegex.test(email.value)) {
      email.classList.add("invalidInput");
    } else {
      email.classList.add("validInput");
    }
    if (!phonNumberRegex.test(phonenumber.value)) {
      phonenumber.classList.add("invalidInput");
    } else {
      phonenumber.classList.add("validInput");
    }
    if (!TextExtra.test(message.value)) {
      message.classList.add("invalidInput");
    } else {
      message.classList.add("validInput");
    }
  } else {
    console.log("hi");
  }
}

function nameAndEmail() {
  return (
    emailRegex.test(email.value) &&
    nameRegex.test(fullname.value) &&
    phonNumberRegex.test(phonenumber.value) &&
    TextExtra.test(message.value)
  );
}
///clear Form
const clearForm = document.getElementById("clearForm");
const inputs = document.querySelectorAll("input");
clearForm.addEventListener("click", clearFormInputs);

function clearFormInputs() {
  inputs.forEach((input) => {
    input.classList.remove("invalidInput");
    input.classList.remove("validInput");
  });
  message.style.boxShadow = "1px 5px 1px lightgray";
}
