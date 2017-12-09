window.onload = function() {

// Set scores to 0 and guesses remaining to 9
numberWins = 0;
numberLosses = 0;
guessesLeft = 9;
guessesSoFar = [];

// Set variable to define all the possible letters to choose from
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Randomly choose a letter from the letters array.
var randomLetter = null;
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
  console.log("test");
}


// Define function to detect when user presses a keystroke
document.onkeyup = function(event) {

// Determine which key was pressed, reduce guesses left by 1, write guesses left to 'guesses-left' span id
  var userInput = event.key;
  guessesLeft--;
  document.querySelector("#guesses-left").innerHTML = guessesLeft;

  // Write chosen randomLetter to "user-input" span id in 'Your Guesses so far' - How do I get this to list the letters rather than overwrite each entry?
  document.querySelector("#user-input").innerHTML = guessesSoFar;
  guessesSoFar.push(userInput);
  console.log(guessesSoFar);

  // Compare userInput to randomLetter - Why is there a delay of keystroke in resetting Guesses to 9?
  if (userInput == randomLetter) {
    numberWins++;
    console.log(guessesLeft);
    document.querySelector("#wins").innerHTML = numberWins;
    reset();
  } if (guessesLeft === 0) {
    numberLosses++;
    document.querySelector("#losses").innerHTML = numberLosses;
    reset();
  }
};

};
