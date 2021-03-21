// Global Variables
let letterCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let numericCharacter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let specialCharacter = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
let generateBtn = document.querySelector("#generate");

// generatePassword Function
function generatePassword() {
  let combineNumeric = letterCharacter.concat(numericCharacter);
  let combineNumericSpecial = letterCharacter.concat(specialCharacter);
  let combineSpecial = letterCharacter.concat(numericCharacter, specialCharacter);
  let numericConfirm = confirm("Do you want to include numeric characters?");
  let specialConfirm = confirm("Do you want to include special characters?");  

  if (numericConfirm === true && specialConfirm === true) {
    combineSpecial;
  }

  if (numericConfirm === true && specialConfirm === false) {
    combineNumeric;
  }

  if (numericConfirm === false && specialConfirm === true) {
    combineNumericSpecial;
  }

  if (numericConfirm === false && specialConfirm === false)
    letterCharacter;
}










































/* // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); */