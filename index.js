const rounds = 5;
const startingScore = 0;

const shapes = ["rock", "paper", "scissors", "rock"];
let playerScore = (computerScore = startingScore);

function randomPlay() {
  const randomIndex = Math.floor(Math.random() * (shapes.length - 1));
  return shapes[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection)
    return `Tied! Both players choose ${playerSelection}`;

  const playerIndex = shapes.findIndex((shape) => shape == playerSelection);

  if (shapes[playerIndex + 1] == computerSelection) {
    computerScore++;
    return `You lose! ${computerSelection} beat ${playerSelection}`;
  }

  playerScore++;
  return `You win! ${playerSelection} beat ${computerSelection}`;
}

const scoreboard = document.querySelector("#score-board");
const gamePlay = document.querySelector("#game-play");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = shapes[button.getAttribute("id")];
    const computerSelection = randomPlay();

    console.log(`Your choice: ${playerSelection} | Computer choice: ${computerSelection}`);

    gamePlay.textContent = playRound(playerSelection, computerSelection);
    scoreboard.textContent = `Scoreboard: ${playerScore} - ${computerScore}`;
  });
});
