var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var symb = ["+", "/", "!", "@", "$", "%", "#", "*"];

var newArray = []

var password 

var passwordText



function generatePassword() {

  var userLength = prompt("Please pick your total password length. Must be 8-128 characters")

  var userLow = confirm("Would you like to include lowercase letters? Okay for Yes. Cancel for No")

  var userUp = confirm("Would you like to include Uppercase letters? Okay for Yes Cancel for No")

  var userSym = confirm("Would you like to include Symbols? Okay for Yes Cancel for No")

  var userNum = confirm("Would you like to include Numbers? Okay for Yes Cancel for No")

    if (userLow) {
      newArray = newArray.concat(lowCase);
    }

    if (userUp) {
      newArray = newArray.concat(upCase)
    }

    if (userSym) {
      console.log(userSym)
      newArray = newArray.concat(symb);
      console.log(newArray)
    }

    if (userNum) {
      newArray = newArray.concat(num);
     
    }
    for (i = 0; i < userLength; i++){
    var randomNumber = Math.floor(Math.random()* newArray.length)
    password += newArray[randomNumber]
  }
  return password;
  }
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  console.log(passwordText)
  generatePassword();
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

