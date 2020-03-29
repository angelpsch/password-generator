// Assignment Code
var generateBtn = document.querySelector("#generate");


// get desired password len and check to make sure it is between 8 & 128 char
function getlen() {
  do {
    var length = prompt("How long do you want your password to be? It has to be at least 8 characters, but no longer than 128 characters.");
    var len = parseInt(length);
    if (len < 8 || len > 128 || isNaN(len) == true || len == '') {
      alert("Please enter a valid number between 8 and 128.");
    } else {
      return len;
    }
  }
  while (len < 8 || len > 128 || isNaN(len) == true || len == '');
}



function generatePassword(pass) {
  var lowerConfirm = confirm("Do you want lowercase in your password?");
  var upperConfirm = confirm("Do you want uppercase in your password?");
  var numConfirm = confirm("Do you want numbers in your password?");
  var specialConfirm = confirm("Do you want special characters in your password?");
  var passGen = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    special: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  };
  var len = getlen();
  console.log(len);
  var charset = '';
  if (lowerConfirm == true) {
    charset += passGen.lowercase;
  }
  if (upperConfirm == true) {
    charset += passGen.uppercase;
  }
  if (numConfirm == true) {
    charset += passGen.numbers;
  }
  if (specialConfirm == true) {
    charset += passGen.special;
  }
  console.log(charset);

  var pass = '';
  for (var i = 0; i < len; i++) {
    pass += charset.charAt(Math.floor(Math.random() * (charset.length) + 1));

  }
  console.log(pass);
  return pass;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
