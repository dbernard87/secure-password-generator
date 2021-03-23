// Global Variables
let upperCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numericCharacter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialCharacter = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
let generateBtn = document.querySelector("#generate");
let combineAll = lowerCharacter.concat(upperCharacter, numericCharacter, specialCharacter).join('');
let combineUpperNumeric = lowerCharacter.concat(upperCharacter, numericCharacter).join('');
let combineUpper = lowerCharacter.concat(upperCharacter).join('');
let combineNumeric = lowerCharacter.concat(numericCharacter).join('');
let combineSpecial = lowerCharacter.concat(specialCharacter).join('');
let combineNumericSpecial = lowerCharacter.concat(numericCharacter, specialCharacter).join('');
let upperNumeric = upperCharacter.concat(numericCharacter).join('');
let upperNumericSpecial = upperCharacter.concat(numericCharacter, specialCharacter).join('');
let upper = upperCharacter.join('');
let lower = lowerCharacter.join('');
let numeric = numericCharacter.join('');
let special = specialCharacter.join('');
let numericSpecial = numericCharacter.concat(specialCharacter).join('');  
let countMessage = "";
let lowerConf = ""; 
let upperConf = "";
let numericConf = ""; 
let specialConf = "";
let noCharacter = "";

// Global Event Listeners
generateBtn.addEventListener("click", characterLength); 
generateBtn.addEventListener("click", writePassword); 

// characterLength Function
function characterLength() {
  countMessage = prompt("Choose amount of characters between 8 and 128.");
    if (countMessage < 8) {
        alert("Must have at least 8 characters.");
        characterLength();
      } else if (countMessage > 128) {
        alert("Must have no more than 128 characters.");
        characterLength();
      }
      return countMessage;
};

// characterChoice Function 
function characterChoice() {
  lowerConf = confirm("Do you want to include lowercase characters?");
  upperConf = confirm("Do you want to include uppercase characters?");
  numericConf = confirm("Do you want to include numeric characters?");
  specialConf = confirm("Do you want to include special characters?");
  
    if (lowerConf && upperConf && numericConf  && specialConf) {
      return combineAll + alert("All characters selected.");
    } else if (lowerConf && upperConf && numericConf && !specialConf) {
      return combineUpperNumeric + alert("Lowercase, uppercase, and numeric characters seleced.");
    } else if (lowerConf && upperConf && !numericConf && !specialConf) {
      return combineUpper + alert("Lowercase and uppercase characters selected.");
    } else if (lowerConf && !upperConf && !numericConf && !specialConf) {
      return lower + alert("Lowercase characters selected.");
    } else if (lowerConf && !upperConf && !numericConf && specialConf) {
      return combineSpecial + alert("Lowercase and special characters selected.");
    } else if (lowerConf && !upperConf && numericConf && specialConf) {
      return combineNumericSpecial + alert("Lowercase, numeric, and special characters selected.");
    } else if (lowerConf && !upperConf && numericConf && !specialConf) {
      return combineNumeric + alert("Lowercase and numeric characters selected.");
    } else if (!lowerConf && upperConf && numericConf && !specialConf) {
      return upperNumeric + alert("Uppercase and numeric characters selected.");
    } else if (!lowerConf && upperConf && !numericConf && !specialConf) {
      return upper + alert("Uppercase characters selected.");
    } else if (!lowerConf && !upperConf && !numericConf && specialConf) {
      return special + alert("Special characters selected.");
    } else if (!lowerConf && !upperConf && numericConf && specialConf) {
      return numericSpecial + alert("Numeric and special characters selected.");
    } else if (!lowerConf && !upperConf && numericConf && !specialConf) {
      return numeric + alert("Numeric characters selected.");  
    } else if (!lowerConf && upperConf && numericConf && specialConf) {
      return upperNumericSpecial + alert("Uppercase, numeric, and special characters selected."); 
    } else { (!lowerConf && !upperConf && !numericConf && !specialConf) 
       return noCharacter + alert("Must select at least one group of characters.");
    }
};

// Combine characterLength and characterChoice Functions
function generatePassword() {
  let a = countMessage;
  let b = characterChoice();
  let passwordNew = "";
 
  for(let i=0; i<a; i++) {
   passwordNew = passwordNew + b.charAt(Math.floor(Math.random() * b.length));
  }
  return passwordNew;
};
  
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
};