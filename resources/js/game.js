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