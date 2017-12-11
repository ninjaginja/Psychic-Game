window.onload = function() {

// Global variables
var numberWins = 0;
var numberLosses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var randomLetter = null;

// Set variable to define all the possible letters to choose from
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Randomly choose a letter from the letters array.
var updateRandomLetter = function() {
  randomLetter = letters[Math.floor(Math.random() * letters.length)]
};
updateRandomLetter();
console.log(randomLetter);

// Reset function - empty array of letters and reset guessesLeft
var reset = function() {
  guessesLeft = 9;
  guessesSoFar = [];
  updateRandomLetter();
  console.log(randomLetter);
}

// Define function to detect when user presses a keystroke
document.onkeyup = function(event) {

// Determine which key was pressed, reduce guesses left by 1, write guesses left to 'guesses-left' span id
  userInput = event.key;
  guessesLeft--;
  document.querySelector("#guesses-left").innerHTML = guessesLeft;

  // Write chosen randomLetter to "user-input" span id in 'Your Guesses so far'
  guessesSoFar.push(userInput);
  document.querySelector("#user-input").innerHTML = guessesSoFar;

  console.log(guessesSoFar);

  // Compare userInput to randomLetter
  if (userInput == randomLetter) {
    numberWins++;
    document.querySelector("#wins").innerHTML = numberWins;
    reset();
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
    document.querySelector("#user-input").innerHTML = guessesSoFar;

  } if (guessesLeft === 0) {
    numberLosses++;
    document.querySelector("#losses").innerHTML = numberLosses;
    reset();
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
    document.querySelector("#user-input").innerHTML = guessesSoFar;
  }

};

};
