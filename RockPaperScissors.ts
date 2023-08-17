const getComputerChoice = (): string => {
  let randNum = Math.floor(Math.random() * 3) + 1;

  if (randNum === 1) {
    return "rock";
  } else if (randNum === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

const playRound = (
  playerSelection: string,
  computerSelection: string
): number => {
  let player = playerSelection.toLowerCase();
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

const game = (): string => {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Please enter your rock paper or scissors:");
    let computerSelection = getComputerChoice();
    if (playRound(playerSelection, computerSelection) === 0) continue;
    if (playRound(playerSelection, computerSelection) === 1) {
      playerScore++;
      continue;
    } else if (playRound(playerSelection, computerSelection) === -1) {
      computerScore++;
    }
  }
  if (playerScore === computerScore) {
    return `Draw!`;
  } else if (playerScore > computerScore) {
    return `You win! Player Score: ${playerScore} vs. Computer Score ${computerScore}`;
  } else {
    return `You lose! Player Score: ${playerScore} vs. Computer Score ${computerScore}`;
  }
};

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
console.log(game());
