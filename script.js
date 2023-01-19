getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  return evaluate(computerChoice);
}
evaluate = (choice) => {
  if (choice === 1) {
    return "rock";
  }
  else if (choice === 2) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

playGame = (userChoice) => {
  if (pScore < 5 && cScore < 5) {
    roundCount++;
    let compChoice = getComputerChoice();
    chooseWinner(userChoice, compChoice);
    updatePage(userChoice, compChoice);
  }
  if (pScore === 5 || cScore === 5) {
    if (pScore > cScore) {
      paraFinalWinner.textContent = `You won!!`
    }
    else if (cScore > pScore) {
      paraFinalWinner.textContent = `Computer won!!`
    }
    else {
      paraFinalWinner.textContent = `The scores are equal. It's a draw!!`
    }
  }
}

function updatePage(userChoice, compChoice) {
  paraChoose.textContent = `You chose ${userChoice} and Computer chose ${compChoice}`
  paraRound.textContent = `Player:${pScore} Computer:${cScore}`;
}

chooseWinner = (userChoice, computerChoice) => {
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      declareWinner("Computer")
      cScore++;
    }
    else if (computerChoice === "scissors") {
      declareWinner("You")
      pScore++;
    }
    else {
      declareDraw();
    }
  }
  else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      declareWinner("Computer")
      cScore++;
    }
    else if (computerChoice === "rock") {
      declareWinner("You")
      pScore++;
    }
    else {
      declareDraw();
    }
  }
  else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      declareWinner("Computer")
      cScore++;
    }
    else if (computerChoice === "paper") {
      declareWinner("You")
      pScore++;
    }
    else {
      declareDraw();
    }
  }
}
declareWinner = (winner) => {
  paraWinner.textContent = winner + " won this round!"
}

declareDraw = () => paraWinner.textContent = `Draw!!`;

let roundCount = 0;
let cScore = 0;
let pScore = 0;

const stoneBtn = document.getElementById('stoneBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const resetBtn = document.getElementById('resetBtn');
const paraRound = document.getElementById('round');
const paraFinalWinner = document.getElementById('paraFinalWinner');
const paraChoose = document.getElementById('paraChoose');
const paraWinner = document.getElementById('paraWinner')

stoneBtn.addEventListener("click", function () { playGame('rock') });
paperBtn.addEventListener("click", function () { playGame('paper') });
scissorsBtn.addEventListener("click", function () { playGame('scissors') });
resetBtn.addEventListener("click", function () { window.location.reload() });

