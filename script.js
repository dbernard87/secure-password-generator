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
let countMessage = "";
let lowerConf = ""; 
let upperConf = "";
let numericConf = ""; 
let specialConf = "";

// Global Event Listeners
generateBtn.addEventListener("click", characterLength); 
generateBtn.addEventListener("click", writePassword); 

// Character Amount Function
function characterLength() {
  countMessage = prompt("Choose amount of characters between 8 and 128");
    
    if (countMessage < 8) {
        alert("Must have at least 8 characters");
        characterLength();
      } else if (countMessage > 128) {
        alert("Must have no more than 128 characters");
        characterLength();
      } 

      return countMessage;
};

function characterChoice() {
  upperConf = confirm("Do you want to include uppercase characters?");
  numericConf = confirm("Do you want to include numeric characters?");
  specialConf = confirm("Do you want to include special characters?");

    if (upperConf && numericConf  && specialConf) {
      return combineAll;
    } else if (upperConf && numericConf && !specialConf) {
      return combineUpperNumeric;
    } else if (upperConf && !numericConf && !specialConf) {
      return combineUpper;
    } else if (!upperConf && !numericConf && !specialConf) {
      return lowerCharacter;
    } else if (!upperConf && !numericConf && specialConf) {
      return combineSpecial;
    } else if (!upperConf && numericConf && specialConf) {
      return combineNumericSpecial;
    } else if (upperConf && numericConf && !specialConf) {
      return combineUpperNumeric;
    } else { (!upperConf && numericConf && !specialConf);
      return combineNumeric;
    }
};

// Combine characterLength and gcharacterChoice Functions
function generatePassword() {
  let a = countMessage;
  let b = characterChoice();
  let passwordNew = "";
 
  for(let i=0; i<b.length; i++) {
	
   //Taking Input from user
   passwordNew = b.charAt(Math.floor(Math.random() * b.length));

 /*passwordNew = [].concat(a, b).sort(() => Math.random() - 0.5);*/

  console.log(passwordNew)
  return passwordNew;
  }

};
  
// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
};