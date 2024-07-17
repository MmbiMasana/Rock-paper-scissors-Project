
function getComputerChoice(comp) {
    const computerpick = ["rock, paper, scissors"]
    const choice = Math.floor(Math.random() * computerpick.length)
    
    if (choice === 1) {
        return "rock"
    } if (choice === 2) {
        return "paper"
    } if (choice === 3) {
        return "scissors"
    } 
      
    
}

console.log(getComputerChoice(comp))

//let humanScore = 0
//let computerScore = 0


function getHumanChoice() {
    const humanpick = ["rock, paper, scissors"]
    const choice = prompt("It's your turn to play!")

    if (choice ==="rock") {
        return "you played rock"
    } 
    if (choice === "paper") {
        return "you played paper"
    } 
    if (choice === "scissors") {
        return "you played scissors"
    }

}
console.log(getHumanChoice())
