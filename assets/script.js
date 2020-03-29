// Assignment Code
var generateBtn = document.querySelector("#generate");


// Get desired password len and check to make sure it is between 8 & 128 char
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

// To verify that no confirms are 
function checkConfirm(array) {
  if (array.includes(true)) {
    return true;
} else {
  return false; 
}
}

// Ask user what character types they would like to include 
function getCharacters(charset) {  
  var passGen = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    special: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  };
  do {
  var lowerConfirm = confirm("Do you want lowercase in your password?");
  var upperConfirm = confirm("Do you want uppercase in your password?");
  var numConfirm = confirm("Do you want numbers in your password?");
  var specialConfirm = confirm("Do you want special characters in your password?");
  var charset = '';
  var ckConfirm = []; 
  if (lowerConfirm == true) {
    charset += passGen.lowercase;
    ckConfirm.push(true); 
  }
  if (upperConfirm == true) {
    charset += passGen.uppercase;
    ckConfirm.push(true); 
  }
  if (numConfirm == true) {
    charset += passGen.numbers;
    ckConfirm.push(true); 
  }
  if (specialConfirm == true) {
    charset += passGen.special;
    ckConfirm.push(true); 
  }
  var checkComp = checkConfirm(ckConfirm);
  if (checkComp == false) {
    alert ("Error: cannot create password with no character types.");
  } else {
    return charset; 
  }
  
} while (checkComp == false); 
}

// Generate password based on user input
function generatePassword(pass) {
  var charset = getCharacters(); 
  var len = getlen();
  console.log(len);
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
