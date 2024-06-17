const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";
const spaces = " ";

function getRandomChar(chars) {
  const index = Math.floor(Math.random() * chars.length);
  return chars[index];
}
function generatePassword() {
  const passwordInput = document.getElementById("password");
  const lowercaseCheckbox = document.getElementById("lowercase");
  const uppercaseCheckbox = document.getElementById("uppercase");
  const numbersCheckbox = document.getElementById("numbers");
  const symbolsCheckbox = document.getElementById("symbols");
  const spacesCheckbox = document.getElementById("spaces");
  let characters = "";
  if (lowercaseCheckbox.checked) {
    characters += lowercaseChars;
  }
  if (uppercaseCheckbox.checked) {
    characters += uppercaseChars;
  }
  if (numbersCheckbox.checked) {
    characters += numbers;
  }
  if (symbolsCheckbox.checked) {
    characters += symbols;
  }
  if (spacesCheckbox.checked) {
    characters += spaces;
  }

  if (characters === "") {
    passwordInput.value = "";
    // return;
  }
  let password = "";
  const length = 12; // Default length of password
  while (password.length < length) {
    let char = getRandomChar(characters);
    if (password.includes(char)) continue;
    password += char;
  }
  passwordInput.value = password;
}
function copyPassword() {
  const passwordInput = document.getElementById("password");
  const copyButton = document.getElementById("copy");

  passwordInput.disabled = false;
  passwordInput.select();
  document.execCommand("copy");
  passwordInput.disabled = true;

  copyButton.textContent = "Copied";
  setTimeout(() => {
    copyButton.textContent = "Copy";
  }, 2000);
}
