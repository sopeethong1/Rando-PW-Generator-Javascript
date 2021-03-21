var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var upperCase = " A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z";
var lowerCase = " a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z";
var numeric = " 0, 1, 2, 3, 4, 5, 6, 7, 8, 9";
var specialCharacter = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var howMany = prompt("How many characters would you like your password to contain?");
console.log("userPick: " + howMany);
var specialChar = confirm("Click OK to confirm including special characters");
console.log("userPick: " + specialChar);
var num = confirm("Click OK to confirm including numeric characters");
console.log("userPick: " + num);
var lCase = confirm("Click OK to confirm including lower-case characters");
console.log("userPick: " + lCase);
var uCase = confirm("Click OK to confirm including upper-case characters");
console.log("userPick: " + uCase);



function generatePassword() {

    var length = parseInt(prompt("How many characters would you like your password to contain?"));


    if (length < 8) {
        alert('The password must be at least 8 characters!');
        return;
    }
    if (length > 128) {
        alert('The password must be less than 128 characters!');
        return;
    }
    var shouldIncludeSpecialCharacters = confirm("Do you want to include special characters?");
    
    var shouldIncludeNumeric = confirm("Do you want to include numeric characters?");
    
    var shouldIncludeLowercase = confirm("Do you want to include lowercase characters?");
  
    var shouldIncludeUppercase = confirm("Do you want to include uppercase characters?");
    
    if (!shouldIncludeLowercase && !shouldIncludeUppercase && !shouldIncludeNumeric && !shouldIncludeSpecialCharacters) {
        alert("Your password must contain at least one special, numeric, lowercase, or uppercase character");
        return;
    }

    var questionOptions = {
        length: length,
        specialCharacters: shouldIncludeSpecialCharacters,
        numeric: shouldIncludeNumeric,
        lowerCase: shouldIncludeLowercase,
        upperCase: shouldIncludeUppercase
    }

    return questionOptions;

}

function generatePassword() {

    var options = writePassword();
    console.log(options)

    var passwordPool = [];
    console.log(passwordPool)

    if (options.specialCharacters) {
        for (i = 0; i < onlySpecial.length; ++i) {
            passwordPool.push(onlySpecial[i]);
        }
    } 
    if (options.numeric) {
        for (i = 0; i < onlyNumeric.length; ++i) {
        passwordPool.push(onlyNumeric[i]);
        }
    }
    if (options.lowerCase) {
        for (i = 0; i < onlyLower.length; ++i) {
        passwordPool.push(onlyLower[i]);
        }
    }
    if (options.upperCase) {
        for (i = 0; i < onlyUpper.length; ++i) {
        passwordPool.push(onlyUpper[i]);
        }
    }

    var finalPassword = [];

    for (let i = 0; i < options.length; ++i) {
        var randomPicker = Math.floor(Math.random() * Math.floor(passwordPool.length));
         finalPassword.push(passwordPool[randomPicker])
    }

    console.log(finalPassword)
  }