var getComputerChoice = function () {
    var randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum === 1) {
        return "rock";
    }
    else if (randNum === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
};
var playRound = function (playerSelection, computerSelection) {
    var player = playerSelection.toLowerCase();
    if (player === "rock" && computerSelection === "rock") {
        return 0;
    }
    else if (player === "rock" && computerSelection === "paper") {
        return -1;
    }
    else if (player === "rock" && computerSelection === "scissors") {
        return 1;
    }
    else if (player === "paper" && computerSelection === "paper") {
        return 0;
    }
    else if (player === "paper" && computerSelection === "rock") {
        return 1;
    }
    else if (player === "paper" && computerSelection === "scissors") {
        return -1;
    }
    else if (player === "scissors" && computerSelection === "rock") {
        return -1;
    }
    else if (player === "scissors" && computerSelection === "scissors") {
        return 0;
    }
    else if (player === "scissors" && computerSelection === "paper") {
        return 1;
    }
};
var game = function () {
    var playerScore = 0;
    var computerScore = 0;
    var roundCount = 0;
    var rock = document.querySelector("#rock");
    var paper = document.querySelector("#paper");
    var scissors = document.querySelector("#scissors");
    var buttons = document.querySelectorAll("button");
    var updateScores = function () {
        // Update the score display in the DOM (assumes these elements exist)
        document.getElementById("player-score").textContent =
            playerScore.toString();
        document.getElementById("computer-score").textContent =
            computerScore.toString();
    };
    buttons.forEach(function (button) {
        // and for each one we add a 'click' listener
        button.addEventListener("click", function () {
            if (roundCount < 5) {
                var playerSelection = button.id;
                var computerSelection = getComputerChoice();
                var result = playRound(playerSelection, computerSelection);
                if (result === 1) {
                    playerScore++;
                }
                else if (result === -1) {
                    computerScore++;
                }
            }
            roundCount++;
            updateScores();
            if (roundCount === 5) {
                if (playerScore > computerScore) {
                    alert("Game over. You won!");
                }
                else if (playerScore < computerScore) {
                    alert("Game over. The computer won!");
                }
                else {
                    alert("Game over. It is a tie!");
                }
            }
        });
    });
};
game();
