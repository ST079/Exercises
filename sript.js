const getQuote = async () => {
  const result = await fetch("https://dummyjson.com/quotes");
  const response = await result.json();
  document.getElementById("quote").innerHTML = response.quotes[0].quote;
};

getQuote();

// password validation

const myInput = document.getElementById("psw");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");
// When the user clicks on the password field, show the message box
myInput.onfocus = () => {
  document.getElementById("message").classList.remove("d-none");
  document.getElementById("message").style.display = "block";
};

// When the user clicks outside of the password field, hide the message box
myInput.onblur = () => {
  document.getElementById("message").style.display = "none";
};

myInput.onkeyup = function () {
  //validate lower case
  const lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  //validate Uppercase
  const upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  //number validation
  const numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  //Length validation
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};

// password Toggle
const passwordToggle = () => {
  const showHide = document.getElementById("psw");
  if (showHide.type === "password") {
    showHide.type = "text";
  } else {
    showHide.type = "password";
  }
};
