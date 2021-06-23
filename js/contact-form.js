// Form inputs
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const companyInput = document.querySelector('#company');
const titleInput = document.querySelector('#title');
const messageInput = document.querySelector('#message');
const contactForm = document.querySelector('#contact-form');

// Check if the input is empty
function isEmpty(value) {
  return value === '' ? true : false;
}

// Check if the length is between the min and max values
function isBetween(length, min, max) {
  return length < min || length > max ? false : true;
}

// Check if an email is a valid pattern
function isValidEmail(email) {
  const pattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  return pattern.test(email);
}

// Add error class and show error message
function showError(input, message) {
  // get the form field element
  const formField = input.parentElement;
  // add the error class
  const inputElement = formField.querySelector('.form-group__input');
  inputElement.classList.add('error');

  // show the error message
  const errorMessage = formField.querySelector('small');
  errorMessage.classList.add('danger');
  errorMessage.textContent = message;
}

// Clear the error class and error message
function clearError(input) {
  // get the form field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');

  // Clear error message
  const errorMessage = formField.querySelector('small');
  errorMessage.classList.remove('danger');
  errorMessage.textContent = '';
}

// Checks name input is not empty and at least 3 characters
function checkName() {
  // Start isValid as false
  let isValid = false;
  // Min/max character count
  const min = 3,
    max = 30;
  // Trim the name input value
  const name = nameInput.value.trim();

  // Check if name input is empty
  if (isEmpty(name)) {
    showError(nameInput, 'Name cannot be blank');
    // Check if name input is at least 3 characters and no more than 30 characters
  } else if (!isBetween(name.length, min, max)) {
    showError(nameInput, `Name must be between ${min} and ${max} characters`);
    // Otherwise, clear the error and set isValid to true
  } else {
    clearError(nameInput);
    isValid = true;
  }
  return isValid;
}

// Check email input is not empty and matches email pattern
function checkEmail() {
  // Start isValid as false
  let isValid = false;
  // Trim the email input value
  const email = emailInput.value.trim();

  // Check if the email input is empty
  if (isEmpty(email)) {
    showError(emailInput, 'Email cannot be blank');
    // Check if the email input is a valid pattern
  } else if (!isValidEmail(email)) {
    showError(emailInput, 'Email is not valid');
    // Otherwise, clear the error and set isValid to true
  } else {
    clearError(emailInput);
    isValid = true;
  }
  return isValid;
}

// Checks company input is not empty and at least 2 characters
function checkCompany() {
  // Start isValid as false
  let isValid = false;
  // Min/max character count
  const min = 2,
    max = 30;
  // Trim the email input value
  const company = companyInput.value.trim();

  // Check if company input is empty
  if (isEmpty(company)) {
    showError(companyInput, 'Company cannot be blank');
    // Check if company input is at least 2 characters and no more than 30 characters
  } else if (!isBetween(company.length, min, max)) {
    showError(
      companyInput,
      `Company must be between ${min} and ${max} characters`
    );
    // Otherwise, clear the error and set isValid to true
  } else {
    clearError(companyInput);
    isValid = true;
  }
  return isValid;
}

// Checks title input is not empty and at least 2 characters
function checkTitle() {
  // Start isValid as false
  let isValid = false;
  // Min/max character count
  const min = 2,
    max = 30;
  // Trim the email input value
  const title = titleInput.value.trim();

  // Check if title input is empty
  if (isEmpty(title)) {
    showError(titleInput, 'Title cannot be blank');
    // Check if title input is at least 2 characters and no more than 30 characters
  } else if (!isBetween(title.length, min, max)) {
    showError(titleInput, `Title must be between ${min} and ${max} characters`);
    // Otherwise, clear the error and set isValid to true
  } else {
    clearError(titleInput);
    isValid = true;
  }
  return isValid;
}

// Checks message input is not empty and at least 5 characters
function checkMessage() {
  // Start isValid as false
  let isValid = false;
  // Min/max character count
  const min = 5,
    max = 200;
  // Trim the email input value
  const message = messageInput.value.trim();

  // Check if message input is empty
  if (isEmpty(message)) {
    showError(messageInput, 'Message cannot be blank');
    // Check if message input is at least 3 characters and no more than 200 characters
  } else if (!isBetween(message.length, min, max)) {
    showError(
      messageInput,
      `Message must be between ${min} and ${max} characters`
    );
    // Otherwise, clear the error and set isValid to true
  } else {
    clearError(messageInput);
    isValid = true;
  }
  return isValid;
}

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  checkName();
  checkEmail();
  checkCompany();
  checkTitle();
  checkMessage();
});
