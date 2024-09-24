
// Function to get the computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    
    if (playerChoice === 'rock') {
        return (computerChoice === 'scissors') ? 'You win!' : 'Computer wins!';
    } else if (playerChoice === 'paper') {
        return (computerChoice === 'rock') ? 'You win!' : 'Computer wins!';
    } else if (playerChoice === 'scissors') {
        return (computerChoice === 'paper') ? 'You win!' : 'Computer wins!';
    }
}

// Function to play 5 rounds of Rock, Paper, Scissors
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerChoice = prompt(`Round ${round} - Enter Rock, Paper, or Scissors:`).toLowerCase();
      const computerChoice = getComputerChoice();
      const result = determineWinner(playerChoice, computerChoice);
  
      console.log(`Round ${round}:`);
      console.log(`You chose: ${playerChoice}`);
      console.log(`Computer chose: ${computerChoice}`);
      console.log(result);
  
      if (result === "You win!") {
        playerScore++;
      } else if (result === "You lose!") {
        computerScore++;
      }
  
      console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
      console.log("-----------------------------");
    }
  
    // Determine the final winner
    if (playerScore > computerScore) {
      console.log("Congratulations! You won the game!");
    } else if (playerScore < computerScore) {
      console.log("Oh no! You lost the game.");
    } else {
      console.log("It's a tie overall!");
    }
  }

// Start the game
playGame();
