const rounds = 5;
const startingScore = 0;

const shapes = ["rock", "paper", "scissors", "rock"];
let playerScore = (computerScore = startingScore);

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * (shapes.length - 1));
  return shapes[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  // playerSelection case-insensitive
  playerSelection.toLowerCase();

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

function game() {
  for (let round = 0; round < rounds; ++round) {
    console.log(`Round ${round + 1}:`);

    const playerSelection = prompt(
      `Round ${round + 1}. Choose your move form:`,
      `${computerPlay()}`
    );
    const computerSelection = computerPlay();

    console.log(`Your choice: ${playerSelection}`);
    console.log(`Computer choice: ${computerSelection}`);

    console.log(playRound(playerSelection, computerSelection));

    console.log(`Scoreboard: ${playerScore} - ${computerScore}`);
  }
}

game();
