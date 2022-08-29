function getComputerChoice() {
    let number = Math.floor(Math.random()*100);
    if (number < 34) {
        return "Rock";
    }
    else if (number < 67) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection.toLowerCase() === "rock") {
            return "Draw. Rock does not beat Rock";
        }
        else if (computerSelection.toLowerCase() === "paper") {
            return "Lose. Paper beats Rock";
        }
        else {
            return "Win. Rock beats Scissors";
        }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection.toLowerCase() === "rock") {
            return "Win. Paper beats Rock";
        }
        else if (computerSelection.toLowerCase() === "paper") {
            return "Draw. Paper does not beat Paper";
        }
        else {
            return "Lose. Scissors beat Paper";
        }
    }
    else {
        if (computerSelection.toLowerCase() === "rock") {
            return "Lose. Rock beats Scissors";
        }
        else if (computerSelection.toLowerCase() === "paper") {
            return "Win. Scissors beat Paper";
        }
        else {
            return "Draw. Scissors do not beat Scissors";
        }
    }
}
