let playerSelection = prompt('Choose between rock, paper and scissor:');

function getComputerChoice() {
    let numberSymbol = Math.random();

    if (numberSymbol <= 0.33) {
        return 'rock';
    }
    else if (numberSymbol <= 0.66) {
        return 'paper';
    }
    else {
        return 'scissor';
    }
}

function round(playerSelection, computerSelection) {
    if (computerSelection == 'rock') {
        if (playerSelection == 'scissor') {
            console.log('You lose! Rock beats scissor');
        }
        else if (playerSelection == 'paper') {
            console.log('You win! Paper beats rock');
        }
        else {
            console.log('It"s a tie!');
        }
    }
}