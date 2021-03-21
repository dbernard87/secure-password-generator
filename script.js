
// Global Variables
let letterCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let numericCharacter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let specialCharacter = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
let generateBtn = document.querySelector("#generate");

// Global Event Listeners
generateBtn.addEventListener("click", writePassword); 

// generatePassword Function
function generatePassword() {
  let countMessage = prompt("Choose amount of characters between 8 and 128"); 
  let numericConfirm = confirm("Do you want to include numeric characters?"); 
  let specialConfirm = confirm("Do you want to include special characters?");
  let combineNumeric = letterCharacter.concat(numericCharacter);
  let combineNumericSpecial = letterCharacter.concat(specialCharacter);
  let combineSpecial = letterCharacter.concat(numericCharacter, specialCharacter); 
  
  while (countMessage < 8) {
    alert("Must have at least 8 characters");
    return;
    
  } if (countMessage > 128) {
    alert("Must have no more than 128 characters");
    return;
  }

  if (numericConfirm === true && specialConfirm === true) {
    return combineSpecial;
  }

  if (numericConfirm === true && specialConfirm === false) {
    return combineNumeric;
  }

  if (numericConfirm === false && specialConfirm === true) {
    return combineNumericSpecial;
  }

  if (numericConfirm === false && specialConfirm === false)
    return letterCharacter;
  }

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}