// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var userChoice = prompt("How many characters would you like your password to contain?");
console.log("userChoice: " + userChoice);

function lowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function upperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randoNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randoSpecialChar() {
  const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return symbols [Math.floor(math.random() * symbols.length)]
}









function generatePassword() {
//TODO: Write the code that asks user abt the parameters for their pw
//TODO:Use those Parameters to generate a new password
//TODO: Return that password
  return "Temp Password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Define generatePassword
//Return a value
var specialChar = confirm("Click OK to confirm including special characters");


var Num = confirm("Click OK to confirm including numeric characters");


var specialChar = confirm("Click OK to confirm including lower-case characters");


var specialChar = confirm("Click OK to confirm including upper-case characters");
