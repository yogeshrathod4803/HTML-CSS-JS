const form = document.getElementById("form");
const userName = document.getElementById("Username");
const email = document.getElementById("email");
const password = document.getElementById("Password");
const confirmPassword = document.getElementById("confirm-Password");

// Function to display error message
function showError(input, message) {
  const formElement = input.parentElement;
  formElement.className = "form-control error";
  const small = formElement.querySelector("small");
  small.innerText = message;
}

// Function to display success message
function showSucess(input, message) {
  const formElement = input.parentElement;
  formElement.className = "form-control success";
  const small = formElement.querySelector("small");
  small.innerText = message;
}

// Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSucess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Function to check if required inputs are filled
function checkRequired(inputArr) {
  inputArr.forEach((element) => {
    if (element.value === "") {
      showError(element, `${element.id} is required.`);
    } else {
      showSucess(element);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkRequired([userName, email, password, confirmPassword]);
  checkLength(userName, 3, 15);
  checkLength(password, 6, 25);
  checkLength(confirmPassword, 6, 25);

  checkEmail(email);
  checkPasswordsMatch(password, confirmPassword);
});
