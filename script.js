function getComputerChoice() {
    let pick = ["rock, paper, scissors"]
    let choice = Math.floor(Math.random() * pick.length)
    
    if (choice === 1) {
        return "rock"
    } if (choice === 2) {
        return "paper"
    } if (choice === 3) {
        return "scissors"
    } 
        
}
console.log(getComputerChoice())

function getHumanChoice() {
    
    
}