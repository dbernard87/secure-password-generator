// Global Variables
let generateBtn = document.querySelector("#generate");
let lowerCharacter = "abcdefghijklmnopqrstuvwxyz";
let upperCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numericCharacter = "0123456789"
let specialCharacter = "!#$%&()*+-.,/:;<=>?@[]^_`{|}~]"
let countMessage = "";
let lowerConf = ""; 
let upperConf = "";
let numericConf = ""; 
let specialConf = "";
let noCharacter = "";

// Global Event Listeners
generateBtn.addEventListener("click", characterLength); 
generateBtn.addEventListener("click", writePassword); 

// characterLength Function to choose length of password
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
  // Character prompt questions
  lowerConf = confirm("Do you want to include lowercase characters?");
  upperConf = confirm("Do you want to include uppercase characters?");
  numericConf = confirm("Do you want to include numeric characters?");
  specialConf = confirm("Do you want to include special characters?");
  // Concatenated character strings for if else statement
  let numericSpecial = numericCharacter.concat(specialCharacter);  
  let combineAll = lowerCharacter.concat(upperCharacter, numericCharacter, specialCharacter);
  let combineUpperNumeric = lowerCharacter.concat(upperCharacter, numericCharacter);
  let combineUpper = lowerCharacter.concat(upperCharacter);
  let combineUpperSpecial = lowerCharacter.concat(upperCharacter, specialCharacter);
  let combineNumeric = lowerCharacter.concat(numericCharacter);
  let combineSpecial = lowerCharacter.concat(specialCharacter);
  let combineNumericSpecial = lowerCharacter.concat(numericCharacter, specialCharacter);
  let upperNumeric = upperCharacter.concat(numericCharacter);
  let upperSpecial = upperCharacter.concat(specialCharacter);
  let upperNumericSpecial = upperCharacter.concat(numericCharacter, specialCharacter);
      // If else loop to determine which character variable to choose
      if (lowerConf && upperConf && numericConf && !specialConf) {
      alert("Lowercase, uppercase, and numeric characters seleced.");
      return combineUpperNumeric;
    } else if (lowerConf && upperConf && !numericConf && !specialConf) {
      alert("Lowercase and uppercase characters selected.");
      return combineUpper;
    } else if (lowerConf && !upperConf && !numericConf && specialConf) {
      alert("Lowercase and special characters selected.");
      return combineSpecial;
    } else if (lowerConf && !upperConf && numericConf && specialConf) {
      alert("Lowercase, numeric, and special characters selected.");
      return combineNumericSpecial;
    } else if (lowerConf && !upperConf && numericConf && !specialConf) {
      alert("Lowercase and numeric characters selected.");
      return combineNumeric;
    } else if (!lowerConf && upperConf && numericConf && !specialConf) {
      alert("Uppercase and numeric characters selected.");
      return upperNumeric;
    } else if (!lowerConf && !upperConf && numericConf && specialConf) {
      alert("Numeric and special characters selected."); 
      return numericSpecial;
    } else if (!lowerConf && upperConf && numericConf && specialConf) {
      alert("Uppercase, numeric, and special characters selected."); 
      return upperNumericSpecial;
    } else if (!lowerConf && !upperConf && !numericConf && !specialConf) {
      alert("Must select at least one group of characters.");
      return noCharacter;
    } else if (lowerConf && upperConf && numericConf  && specialConf) {
      alert("All characters selected.");
      return combineAll;
    } else if (lowerConf && !upperConf && !numericConf && !specialConf) {
      alert("Lowercase characters selected.");
      return lowerCharacter;
    } else if (!lowerConf && upperConf && !numericConf && !specialConf) {
      alert("Uppercase characters selected.");
      return upperCharacter;
    } else if (!lowerConf && !upperConf && numericConf && !specialConf) {
      alert("Numeric characters selected.");
      return numericCharacter; 
    } else if (!lowerConf && !upperConf && !numericConf && specialConf) {
      alert("Special characters selected.");
      return specialCharacter;
    } else if (!lowerConf && upperConf && !numericConf && specialConf) {
      alert("Special characters selected.");
      return upperSpecial;
    } else if (lowerConf && upperConf && !numericConf && specialConf) {
      alert("Special characters selected.");
      return combineUpperSpecial;
    }
};

// Combine characterLength and characterChoice Functions
function generatePassword() {
  let a = countMessage;
  let b = characterChoice();
  let passwordNew = "";
  // For loop to make string length equal to user input
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