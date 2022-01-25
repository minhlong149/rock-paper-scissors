const startingScore = 0;

const shapes = ["rock", "paper", "scissors", "rock"];
let playerScore = (computerScore = startingScore);

function randomPlay() {
  const randomIndex = Math.floor(Math.random() * (shapes.length - 1));
  return shapes[randomIndex];
}

function youWin(playerSelection, computerSelection) {
  const playerIndex = shapes.findIndex((shape) => shape == playerSelection);
  
  if (shapes[playerIndex + 1] == computerSelection) {
    computerScore++;
    return false;
  }
  
  playerScore++;
  return true;
}

const scoreboard = document.querySelector("#score");
const buttons = document.querySelectorAll(".btn");

function preProcess() {
  // reset previous color style
  buttons.forEach((button) => {
    button.setAttribute("class", "btn");
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    preProcess();

    // move selection
    const playerSelection = button.getAttribute("id");
    const computerSelection = randomPlay();

    // target button selection
    const yourButton = button;
    const computerButton = document.querySelector(`#${computerSelection}`);

    if (playerSelection == computerSelection) {
      yourButton.classList.add("tie");
      computerButton.classList.add("tie");
    } else if (youWin(playerSelection, computerSelection)) {
      yourButton.classList.add("win");
      computerButton.classList.add("lose");
    } else {
      yourButton.classList.add("lose");
      computerButton.classList.add("win");
    }

    scoreboard.textContent = `${playerScore} - ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
      scoreboard.textContent = playerScore >= 5 ? "🏆 You win!" : "You lose 😞";

      buttons.forEach((button) => (button.style.display = "none"));

      const reset = document.createElement("div");
      reset.classList.add("btn");
      reset.style.padding = "1em";
      reset.textContent = "Reset";

      const container = document.querySelector("#choice");
      container.appendChild(reset);

      reset.addEventListener("click", () => {
        playerScore = computerScore = startingScore;
        scoreboard.textContent = `${playerScore} - ${computerScore}`;

        buttons.forEach((button) => (button.style.display = "block"));
        reset.remove();
        preProcess();
      });
    }
  });
});
