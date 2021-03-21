// Global Variables
let upperCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let lowerCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let numericCharacter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let specialCharacter = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
let generateBtn = document.querySelector("#generate");
let combineAll = lowerCharacter.concat(upperCharacter, numericCharacter, specialCharacter);
let combineUpperNumeric = lowerCharacter.concat(upperCharacter, numericCharacter);
let combineUpper = lowerCharacter.concat(upperCharacter)
let combineNumeric = lowerCharacter.concat(numericCharacter);
let combineNumericSpecial = lowerCharacter.concat(specialCharacter);
let combineSpecial = lowerCharacter.concat(numericCharacter, specialCharacter); 
let lowerConfirm = ""; 
let upperConfirm = "";
let numericConfirm = ""; 
let specialConfirm = ""; 

// Global Event Listeners
generateBtn.addEventListener("click", writePassword); 
generateBtn.addEventListener("click", characterLength); 


// Character Amount Function
function characterLength() {
    let countMessage = prompt("Choose amount of characters between 8 and 128");
    
    if (countMessage < 8) {
        alert("Must have at least 8 characters");
        characterLength();
      } else if (countMessage > 128) {
        alert("Must have no more than 128 characters");
        characterLength();
      } 

      return countMessage;
};

function generatePassword() {
    lowerConfirm = confirm("Do you want to include lowercase characters?");
    upperConfirm = confirm("Do you want to include uppercase characters?");
    numericConfirm = confirm("Do you want to include numeric characters?");
    specialConfirm = confirm("Do you want to include special characters?");


    if (upperConfirm === true && numericConfirm === true && specialConfirm === true) {
      return combineAll;
    }
  
    else if (upperConfirm === true && numericConfirm === true) {
      return combineUpperNumeric;
    }
  
    else if (upperConfirm === true) {
      return combineUpper;
    }
  
    else if (numericConfirm === true && specialConfirm === true) {
      return combineSpecial;
    }
  
    else if (numericConfirm === true) {
      return combineNumericSpecial;
    }
  
    else if (specialCharacter === true) {
      return combineNumericSpecial;
    }
  
    else if (upperConfirm === false && numericConfirm === false && specialConfirm === false) {
      return lowerCharacter;
    }
  
    else if (specialConfirm === true && upperConfirm === false && numericCharacter === false) {
      return combineNumericSpecial;
    }

    return generatePassword();
  
};
  

// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
};