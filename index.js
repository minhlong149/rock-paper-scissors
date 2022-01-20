const shapes = ["rock", "paper", "scissors", "rock"];

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * (shapes.length - 1));
  return shapes[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  // playerSelection case-insensitive
  playerSelection.toLowerCase();

  if (playerSelection == computerSelection)
    return `Tied! Both players choose ${playerSelection}`;

	playerIndex = shapes.findIndex((shape) => shape == playerSelection);
  if (shapes[playerIndex + 1] == computerSelection)
    return `You lose! ${computerSelection} beat ${playerSelection}`;

	return `You win! ${playerSelection} beat ${computerSelection}`; 
}

const playerSelection = computerPlay();
const computerSelection = computerPlay();

console.log(`Your choice: ${playerSelection}`);
console.log(`Computer choice: ${computerSelection}`);

console.log(playRound(playerSelection, computerSelection));
