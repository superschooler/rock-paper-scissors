// Generate Computer Choice - compNumber variable will store the random value from computerChoice() function. Winner will be evaluated based on numerical value rather than string value
let compNumber;
function computerChoice() {
  compNumber = Math.floor(Math.random() * 3);
  return compNumber;
}

// User Choice, then convert to a number to compare with compNumber
let userChoice = "Rock";
let userNumber = userChoice === "Rock" ? 0 : userChoice === "Paper" ? 1 : 2;

// Selecting Winner, ternary operator looks cleaner than if/else, but is it easier to read?
function winner(comp, user) {
  return comp + 1 === user || comp - 2 === user
    ? "You Win!"
    : comp === user
    ? "Tie!"
    : "Computer Wins!";
}

// Testing code
computerChoice();
console.log(`Computer Choice: ${compNumber}`);
console.log(`User Choice: ${userNumber}`);
console.log(winner(compNumber, userNumber));
