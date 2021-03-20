// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
//TODO: Write the code that asks user abt the paramenter 
//TODO:Use those Parameters to cengerate a new password
//TODO: Return that password
  return "Temp Password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Define generatePassword
//Return a value
