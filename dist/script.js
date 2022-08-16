// Creating variable to keep score
let score = 0;

// Generate Computer Choice - computerSelection variable will store the random value from computerChoice() function. Winner will be evaluated based on numerical value rather than string value
let computerSelection;
function getComputerChoice() {
  computerSelection = Math.floor(Math.random() * 3);
  return computerSelection;
}

// User choice, capitalized to prevent errors
let playerSelection = prompt("Choose Rock, Paper, or Scissors").toUpperCase();

// Functions to convert from object to number and back
function convertToObject(num) {
  return num === 0 ? "ROCK" : num === 1 ? "PAPER" : num === 2 ? "SCISSORS" : "";
}
function convertToNumber(obj) {
  return obj === "ROCK" ? 0 : obj === "PAPER" ? 1 : obj === "SCISSORS" ? 2 : "";
}

// Selecting Winner, ternary operator looks cleaner than if/else, but is it easier to read?
function playRound(user) {
  getComputerChoice();
  switch (true) {
    case computerSelection + 1 === convertToNumber(user) ||
      computerSelection - 2 === convertToNumber(user):
      score++;
      return `You Win! ${user} beats ${convertToObject(computerSelection)}`;
      break;
    case computerSelection === convertToNumber(user):
      return `Tie! You both chose ${user}.`;
      break;
    case computerSelection === convertToNumber(user) + 1 ||
      computerSelection === convertToNumber(user) - 2:
      score--;
      return `Computer Wins! ${convertToObject(
        computerSelection
      )} beats ${user}`;
      break;
    default:
      return `Error. Please check your input and try again.`;
  }
}

// Game Function - Can play multiple games and log the results
function game(numRounds) {
  for (let i = 0; i < numRounds; i++) {
    getComputerChoice();
    console.log(playRound(playerSelection));
  }
  return score;
}

// Testing Code
console.log(game(5));
