var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialCharacters = "!<>#$%&*-+?/"


// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var finalPass = ""
  var allowedChars = ""
  //all da work
  var chosenLength = prompt("how many characters would you like to use in your new password?","8")
  // check that they gave you a number and not like, a string
  // if(isNaN(chosenLength)){
  //   alert("Man u gotta use a number there")
  //   return ""
  // }
  //if they did give you a number, make sure it is 8-128

  var lowerCaseChoice = confirm("Would you like to use lowercase characters?")
console.log(lowerCaseChoice)
if(lowerCaseChoice){
 allowedChars += lowerCase
//  console.log("Allowed chars: "+allowedChars)
}

 var upperCaseChoice = confirm("Would you like to use uppercase characters?")
console.log(upperCaseChoice)
if(upperCaseChoice){
  allowedChars += upperCase
  // console.log("Allowed chars: "+allowedChars)
 }

 var numberChoice = confirm("Would you like use numbers?")
 console.log(numberChoice)
 if(numberChoice){
  allowedChars += numbers
  // console.log("Allowed chars: "+allowedChars)
 }

 var specialChoice = confirm("Would you like to use special characters?")
 console.log(specialChoice)
 if(specialChoice){
  allowedChars += specialCharacters
  console.log("Allowed chars: "+allowedChars)
 }

 for(var i=0; i<chosenLength; i++){
 //get a random character form the allowedChars String
 var randomNumber = Math.floor(Math.random() * allowedChars.length); 
 var randomChar = allowedChars[randomNumber]
  // console.log(randomNumber + " " +randomChar)
  finalPass += randomChar
 
  // finalPass += allowedChars[Math.floor(Math.random() * allowedChars.length)];
}

  return finalPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

