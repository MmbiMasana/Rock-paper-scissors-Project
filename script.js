
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

// Function to play a round of Rock, Paper, Scissors
function playGame() {
    const playerChoice = prompt('Enter rock, paper, or scissors:').toLowerCase();
    const computerChoice = getComputerChoice();

    console.log(`You chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    const result = determineWinner(playerChoice, computerChoice);
    console.log(result);
}

// Start the game
playGame();
