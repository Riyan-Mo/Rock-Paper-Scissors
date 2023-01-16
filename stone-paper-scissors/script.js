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

chooseWinner = (userChoice, computerChoice) => {
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      declareWinner("Computer", cScore)
      cScore = cScore + 1;
    }
    else if (computerChoice === "scissors") {
      declareWinner("Player", uScore)
      uScore++;
    }
    else {
      declareDraw();
    }
  }
  else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      declareWinner("Computer")
      cScore = cScore + 1;
    }
    else if (computerChoice === "rock") {
      declareWinner("Player")
      uScore++;
    }
    else {
      declareDraw();
    }
  }
  else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      declareWinner("Computer")
      cScore = cScore + 1;
    }
    else if (computerChoice === "paper") {
      declareWinner("Player")
      uScore++;
    }
    else {
      declareDraw();
    }
  }
  else {
    alert("You didn't choose from the options available")
  }
}
finalWinner = () => {
  if (uScore > cScore) {
    console.log(`The scores are Player: ${uScore}  Computer:${cScore}`)
    console.log(`Player won by ${uScore - cScore} points!!`)
  }
  else if (uScore < cScore) {
    console.log(`The scores are Player: ${uScore}  Computer:${cScore}`)
    console.log(`Computer won by ${cScore - uScore} points!!`)
  }
  else {
    console.log(`The scores are Player: ${uScore}  Computer:${cScore}`)
    console.log(`It's a draw`)
  }
}
declareWinner = (winner) => {
  console.log(`${winner} won!!`);
}
declareDraw = () => console.log(`Draw!!`)

let uScore = 0;
let cScore = 0;
for (let i = 0; i < 5; i++) {
  let computerChoice = getComputerChoice();
  let playerChoice = prompt("Choose rock, paper or scissors:").toLowerCase()
  console.log(`You chose ${playerChoice}`);
  console.log(`Computer chose ${computerChoice}`)
  chooseWinner(playerChoice, computerChoice);
}
finalWinner();