// Open & Close Rules
const rulesButton = document.querySelector(".rules__button");
const rulesModal = document.querySelector(".rules__overlay");
const rulesClose = document.querySelector(".rules__close");

function openRules() {
  rulesModal.classList.remove("hidden");
}

function closeRules() {
  rulesModal.classList.add("hidden");
}

rulesButton.addEventListener("click", openRules);
rulesClose.addEventListener("click", closeRules);

// Playing Rock Paper Scissors
const rock = document.querySelector(".symbol__rock");
const paper = document.querySelector(".symbol__paper");
const scissors = document.querySelector(".symbol__scissors");
const playScreen = document.querySelector(".symbols");
const resultsScreen = document.querySelector(".results");
const matchResults = document.querySelector(".match-results__display");
let win, score;

function housePick() {
  let num = Math.ceil(Math.random() * 3);
  switch (num) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}

const playerSelectionBlock = document.querySelector(".results__user");
const houseSelectionBlock = document.querySelector(".results__house");

function setWinner(selection, computer) {
  if (computer === selection) {
    winner = "TIED 🤷‍♂️";
  } else if (
    (selection === "rock" && computer === "scissors") ||
    (selection === "paper" && computer === "rock") ||
    (selection === "scissors" && computer === "paper")
  ) {
    winner = "WIN! 🥳";
    playerSelectionBlock.classList.add("animate-bounce");
    score += 1;
  } else if (
    (computer === "rock" && selection === "scissors") ||
    (computer === "paper" && selection === "rock") ||
    (computer === "scissors" && selection === "paper")
  ) {
    winner = "LOSE 😐";
    houseSelectionBlock.classList.add("animate-bounce");
    score -= 1;
  } else {
    winner = "Broke the Game...";
  }
}

const displayPlayerSelection = document.querySelector(".results__user__symbol");
const displayPlayerSelectionImage = document.getElementById(
  "results__user__image"
);
const displayHouseSelection = document.querySelector(".results__house__symbol");
const displayHouseSelectionImage = document.getElementById(
  "results__house__image"
);

function displayWinner(selection, house) {
  if (selection === "rock") {
    displayPlayerSelection.classList.add("symbol__rock");
    displayPlayerSelectionImage.src =
      "https://raw.githubusercontent.com/superschooler/rock-paper-scissors/167fb2c291b19161d92a6b8815dd2e217b918e30/images/icon-rock.svg";
  } else if (selection === "paper") {
    displayPlayerSelection.classList.add("symbol__paper");
    displayPlayerSelectionImage.src =
      "https://raw.githubusercontent.com/superschooler/rock-paper-scissors/167fb2c291b19161d92a6b8815dd2e217b918e30/images/icon-paper.svg";
  } else if (selection === "scissors") {
    displayPlayerSelection.classList.add("symbol__scissors");
    displayPlayerSelectionImage.src =
      "https://raw.githubusercontent.com/superschooler/rock-paper-scissors/167fb2c291b19161d92a6b8815dd2e217b918e30/images/icon-scissors.svg";
  }
  if (house === "rock") {
    displayHouseSelection.classList.add("symbol__rock");
    displayHouseSelectionImage.src =
      "https://raw.githubusercontent.com/superschooler/rock-paper-scissors/167fb2c291b19161d92a6b8815dd2e217b918e30/images/icon-rock.svg";
  } else if (house === "paper") {
    displayHouseSelection.classList.add("symbol__paper");
    displayHouseSelectionImage.src =
      "https://raw.githubusercontent.com/superschooler/rock-paper-scissors/167fb2c291b19161d92a6b8815dd2e217b918e30/images/icon-paper.svg";
  } else if (house === "scissors") {
    displayHouseSelection.classList.add("symbol__scissors");
    displayHouseSelectionImage.src =
      "https://raw.githubusercontent.com/superschooler/rock-paper-scissors/167fb2c291b19161d92a6b8815dd2e217b918e30/images/icon-scissors.svg";
  }
}

let house;

function play(selection) {
  house = housePick();
  playScreen.classList.add("hidden");
  resultsScreen.classList.remove("hidden");
  setWinner(selection, house);
  displayWinner(selection, house);
  matchResults.innerHTML = `YOU ${winner}`;
  scoreDisplay.innerHTML = score;
}

rock.addEventListener("click", function () {
  play("rock");
});
paper.addEventListener("click", function () {
  play("paper");
});
scissors.addEventListener("click", function () {
  play("scissors");
});

// Reset Game
const scoreDisplay = document.querySelector(".score__number");
const resetButton = document.querySelector(".reset__button");
const playAgainButton = document.querySelector(".play__again");

function continuePlay() {
  playScreen.classList.remove("hidden");
  resultsScreen.classList.add("hidden");
  displayPlayerSelection.classList.remove(
    "symbol__rock",
    "symbol__paper",
    "symbol__scissors"
  );
  displayHouseSelection.classList.remove(
    "symbol__rock",
    "symbol__paper",
    "symbol__scissors"
  );
  playerSelectionBlock.classList.remove("animate-bounce");
  houseSelectionBlock.classList.remove("animate-bounce");
}

function resetGame() {
  continuePlay();
  score = 0;
  scoreDisplay.innerHTML = score;
}

resetGame();
resetButton.addEventListener("click", resetGame);
playAgainButton.addEventListener("click", continuePlay);
