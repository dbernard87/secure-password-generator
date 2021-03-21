
// Global Variables
let upperCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let lowerCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let numericCharacter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let specialCharacter = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
let generateBtn = document.querySelector("#generate");

// Global Event Listeners
generateBtn.addEventListener("click", writePassword); 

// generatePassword Function
function generatePassword() {
  let countMessage = prompt("Choose amount of characters between 8 and 128"); 
  let upperConfirm = confirm("Do you want to include uppercase characters?");
  let numericConfirm = confirm("Do you want to include numeric characters?"); 
  let specialConfirm = confirm("Do you want to include special characters?");
  let combineAll = lowerCharacter.concat(upperCharacter, numericCharacter, specialCharacter);
  let combineUpperNumeric = lowerCharacter.concat(upperCharacter, numericCharacter);
  let combineUpper = lowerCharacter.concat(upperCharacter)
  let combineNumeric = lowerCharacter.concat(numericCharacter);
  let combineNumericSpecial = lowerCharacter.concat(specialCharacter);
  let combineSpecial = lowerCharacter.concat(numericCharacter, specialCharacter); 
  
  while (countMessage < 8) {
    alert("Must have at least 8 characters");
    return;
  } 
  
  if (countMessage > 128) {
    alert("Must have no more than 128 characters");
    return;
  }

  if (upperConfirm === true && numericConfirm === true && specialConfirm === true) {
    return combineAll;
  }

  if (upperConfirm === true && numericConfirm === true) {
    return combineUpperNumeric;
  }

  if (upperConfirm === true) {
    return combineUpper;
  }

  if (numericConfirm === true && specialConfirm === true) {
    return combineSpecial;
  }

  if (numericConfirm === true) {
    return combineNumericSpecial;
  }

  if (specialCharacter === true) {
    return combineNumericSpecial;
  }

  if (upperConfirm === false && numericConfirm === false && specialConfirm === false) {
    return lowerCharacter;
  }

  if (specialConfirm === true && upperConfirm === false && numericCharacter === false) {
    return combineNumericSpecial;
  }


};

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}