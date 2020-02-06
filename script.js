// Assignment Code
var generateBtn = document.querySelector("#generate");

alert("the length of your password should between 8 to 128 characters");

var pwLength = prompt("how long is your password?");

if (pwLength <= 128 && pwLength >= 8) {
  alert("password length approved");
}
else{
    alert("password length denied. Please try again.");
}
// once I add a loop, need to kill the loop at the point whenever the else option is selected then have it begin from the beginning

var lowCaseCH = confirm("would you like to use lower case characters?");

if (lowCaseCH) {
  alert("great");
}
else {
  alert("You must use at least one lower case character.");
}

var uppCaseCH = confirm("would you like to use upper case characters?");

if (uppCaseCH) {
  alert("great!");
}
else {
  alert("You must use at least one upper case character.");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
