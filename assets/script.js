// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = 8
var lowercasecharacters = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
]
var uppercasecharacters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
]
var numbers = [
  "0","1","2","3","4","5","6","7","8","9"
]

// Write password to the #password input

function writePassword() {
  function passwordOptions() {
    length=parseInt(prompt("How many characters would you like your password to be?"),10)
  }var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword(){
  var random = ""
console.log(lowercasecharacters)
for (var i=0;i<length;i++){
  var character = getRandom(lowercasecharacters)
random+=character
}
return random
}

function getRandom(array) {
  var randomIndex = Math.floor(Math.random()*array.length)
  var randomElement = array[randomIndex]
return randomElement
}


// Create boolean whether or not the type of character is being used (lower case, upper case, numbers)
// In password options, ask if they want to use lower case, etc, whatever they answer
// Depending on which types they want to use, use a random number to pick a symbol array, then call getRandom on that symbol array.