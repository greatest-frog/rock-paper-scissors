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

function createDiv(class_name) {
    const div = document.querySelector(`.${class_name}`);
    if (div) {
        return div;
    }
    const new_div = document.createElement('div');
    new_div.classList.add(class_name);
    new_div.style.cssText = 'margin: 20px; color: white; background: #242424; max-width: 300px; font-size: 24px; padding: 20px;';
    return new_div;
}
//show the result
function showResult(result) {
    const parent = document.querySelector('.game');
    const sibling = document.querySelector('h2');
    
    const div = createDiv('result');
    div.textContent = result;

    parent.insertBefore(div, sibling);
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', e => {
    let result = playRound(`${e.target.id}`, getComputerChoice());
    showResult(result);
}));