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
            return ["Draw. Rock does not beat Rock", 0];
        }
        else if (computerSelection.toLowerCase() === "paper") {
            return ["Lose. Paper beats Rock", -1];
        }
        else {
            return ["Win. Rock beats Scissors", 1];
        }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection.toLowerCase() === "rock") {
            return ["Win. Paper beats Rock", 1];
        }
        else if (computerSelection.toLowerCase() === "paper") {
            return ["Draw. Paper does not beat Paper", 0];
        }
        else {
            return ["Lose. Scissors beat Paper", -1];
        }
    }
    else {
        if (computerSelection.toLowerCase() === "rock") {
            return ["Lose. Rock beats Scissors", -1];
        }
        else if (computerSelection.toLowerCase() === "paper") {
            return ["Win. Scissors beat Paper", 1];
        }
        else {
            return ["Draw. Scissors do not beat Scissors", 0];
        }
    }
}

let score = [0, 0];
//show the result
function showResult(result) {
    const div = document.querySelector('.result');

    switch(result[1]) {
        case 1: 
            div.textContent = `${++score[0]}-${score[1]} `;
            break;
        case -1:
            div.textContent = `${score[0]}-${++score[1]} `;
            break;
        case 0:
            div.textContent = `${score[0]}-${score[1]} `;
            break;
    }

    if (score[0] === 5){
        div.textContent = 'You win the computer.'
    }
    else if (score[1] === 5) {
        div.textContent = 'You lose to the computer.'
    }
    else {
        div.textContent += result[0];
    }
}

function restart() {
    score[0] = 0;
    score[1] = 0;

    const div = document.querySelector('.result');
    div.textContent = '0-0 Choose your weapon';
}

const buttons = document.querySelectorAll('.weapon button');
const restart_button = document.querySelector('#restart');
restart_button.addEventListener('click', () => restart());

buttons.forEach(button => button.addEventListener('click', e => {
    let result = playRound(`${e.target.id}`, getComputerChoice());
    if (score[0] !== 5 && score[1] !== 5) {
        showResult(result);
    }
}));