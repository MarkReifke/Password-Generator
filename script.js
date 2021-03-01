// Array of special characters to be included in password
var specialCharacters = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
  ];
  // Array of numeric characters to be included in password
  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  
  // Assignment Code
  // Retrieve reference id of generate to the button
  var generateBtn = document.querySelector("#generate");
  console.log(generateBtn)
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  function generatePassword(){
      //Prompt for length of password
      //Make sure password is so many characters long
      var length = 15;
      // Prompt for special characters
      var special = true;
      // Prompt for upper case
      var uppercase = true;
      // Prompt for lower case
      var lowercase = true;
      // Prompt for number
      var numeric = true;
  
    var password = "";
    for (let i = 0;  i < length; i++) {
      if (special) {
        password += getRandomItem(specialCharacters);
      }
      if (uppercase) {
        password += getRandomItem(upperCasedCharacters);
      }
      if (lowercase) {
        password += getRandomItem(lowerCasedCharacters);
      }
      if (numeric) {
        password += getRandomItem(numericCharacters);
      }
    }  
  
    return password.slice(0, length);
  }
  
  // Retrieve a random item from the provided array
  function getRandomItem(arr) {
    // Generate a random index from 0 to the length - 1
    var randomIndex = Math.random() * arr.length;
    // round down our random index
    randomIndex = Math.floor(randomIndex);
    // return the random item based off of our random index
    return arr[randomIndex];
    // One liner of the above code
    // return arr[Math.floor(Math.random() * arr.length)];
  }
  
  console.log(getRandomItem(specialCharacters));
  console.log(getRandomItem(numericCharacters));
  console.log(getRandomItem(upperCasedCharacters));
  console.log(getRandomItem(lowerCasedCharacters));