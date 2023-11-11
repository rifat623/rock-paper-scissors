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

const game = (): void => {
  let playerScore = 0;
  let computerScore = 0;
  let roundCount = 0;
  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");

  const buttons = document.querySelectorAll("button");

  const updateScores = () => {
    // Update the score display in the DOM (assumes these elements exist)
    document.getElementById("player-score").textContent =
      playerScore.toString();
    document.getElementById("computer-score").textContent =
      computerScore.toString();
  };

  buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
      if (roundCount < 5) {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);
        if (result === 1) {
          playerScore++;
        } else if (result === -1) {
          computerScore++;
        }
      }

      roundCount++;
      updateScores();

      if (roundCount === 5) {
        if (playerScore > computerScore) {
          alert("Game over. You won!");
        } else if (playerScore < computerScore) {
          alert("Game over. The computer won!");
        } else {
          alert("Game over. It is a tie!");
        }
      }
    });
  });
};

game();
