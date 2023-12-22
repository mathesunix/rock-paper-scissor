function getPlayerChoice() {
    return prompt('Choose between rock, paper and scissor:');
}

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
            return 'You lose! Rock beats scissor';
        }
        else if (playerSelection == 'paper') {
            return 'You win! Paper beats rock';
        }
        else {
            console.log("It's a tie!");
            return round(getPlayerChoice().toLowerCase(), getComputerChoice());
        }
    }
    else if (computerSelection == 'paper') {
        if (playerSelection == 'scissor') {
            return 'You win! Scissor beats paper';
        }
        else if (playerSelection == 'paper') {
            console.log("It's a tie!");
            return round(getPlayerChoice().toLowerCase(), getComputerChoice());
        }
        else {
            return 'You lose! Paper beats rock';
        }
    }
    else {
        if (playerSelection == 'scissor') {
            console.log("It's a tie!");
            return round(getPlayerChoice().toLowerCase(), getComputerChoice());
        }
        else if (playerSelection == 'paper') {
            return 'You lose! Scissor beats paper';
        }
        else {
            return 'You win! Rock beats scissor';
        }
    }
}

console.log(round(getPlayerChoice().toLowerCase(), getComputerChoice()));