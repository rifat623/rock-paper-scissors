var getComputerChoice = function () {
  var randNum = Math.floor(Math.random() * 3) + 1;
  if (randNum === 1) {
    return "rock";
  } else if (randNum === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};
var playRound = function (playerSelection, computerSelection) {
  var player = playerSelection.toLowerCase();
  if (player === "rock" && computerSelection === "rock") {
    return 0;
  } else if (player === "rock" && computerSelection === "paper") {
    return -1;
  } else if (player === "rock" && computerSelection === "scissors") {
    return 1;
  } else if (player === "paper" && computerSelection === "paper") {
    return 0;
  } else if (player === "paper" && computerSelection === "rock") {
    return 1;
  } else if (player === "paper" && computerSelection === "scissors") {
    return -1;
  } else if (player === "scissors" && computerSelection === "rock") {
    return -1;
  } else if (player === "scissors" && computerSelection === "scissors") {
    return 0;
  } else if (player === "scissors" && computerSelection === "paper") {
    return 1;
  }
};
var game = function () {
  var playerScore = 0;
  var computerScore = 0;
  for (var i = 0; i < 5; i++) {
    var playerSelection = prompt("Please enter your rock paper or scissors:");
    var computerSelection = getComputerChoice();
    if (playRound(playerSelection, computerSelection) === 0) continue;
    if (playRound(playerSelection, computerSelection) === 1) {
      playerScore++;
      continue;
    } else if (playRound(playerSelection, computerSelection) === -1) {
      computerScore++;
    }
  }
  if (playerScore === computerScore) {
    return "Draw!";
  } else if (playerScore > computerScore) {
    return "You win! Player Score: "
      .concat(playerScore, " vs. Computer Score ")
      .concat(computerScore);
  } else {
    return "You lose! Player Score: "
      .concat(playerScore, " vs. Computer Score ")
      .concat(computerScore);
  }
};
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
console.log(game());
