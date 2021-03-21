var generateBtn = document.querySelector("#generate");
var Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var UpperArr = Upper.split("");
var Lower = "abcdefghijklmnopqrstuvwxyz";
var LowerArr = Lower.split("");
var num = "0123456789";
var numArr = num.split("");
var symbol = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symbolArr = symbol.split("");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
  return newPassword
}

 var allChars = [];
 var resultPass = "";
 var pwlength = prompt("How many characters would you like your password to contain?");

 if(pwlength <8 || pwlength > 128){
     alert("Password must be between 8-126 characters.");
 }

 else{
     if(confirm("Would you like your password to contain upper-case letters?")){
         Array.prototype.push.apply(allChars, UpperArr);

     }

     if(confirm("Would you like your password to contain lower-case letters?")){
         Array.prototype.push.apply(allChars, LowerArr);

     }

     if(confirm("Would you like your password to contain numbers?")){
         Array.prototype.push.apply(allChars, numArr);
     }


     if(confirm("Would you like your password to contain symbols?")){
         Array.prototype.push.apply(allChars, symbolArr);
     }

     if(allChars.length==0){
         alert("You must select a minimum of 1 character type.");
     }

     else{
         for( i=0; i< pwlength; i++) {
             var newPassword = Math.floor(Math.random()*allChars.length);
             resultPass += allChars[newPassword];
         }
        
     }
    }
    document.getElementById("password").innerHTML = resultPass;
  
     generateBtn.addEventListener("click", writePassword);
     



