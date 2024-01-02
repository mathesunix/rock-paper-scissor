let playerChoice;

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

const rockButton = document.querySelector('.rock');
rockButton.onclick = () => playRound('rock', getComputerChoice());

const paperButton = document.querySelector('.paper');
rockButton.onclick = () => playRound('paper', getComputerChoice());

const scissorButton = document.querySelector('.scissor');
rockButton.onclick = () => playRound('scissor', getComputerChoice());

/* function getPlayerChoice() {
    return prompt('Choose between rock, paper and scissor:');
} */

function playRound(playerSelection, computerSelection) {
    if (computerSelection == 'rock') {
        if (playerSelection == 'scissor') {
            return 'You lose! Rock beats scissor';
        }
        else if (playerSelection == 'paper') {
            return 'You win! Paper beats rock';
        }
        else {
            console.log("It's a tie!");
            //return playRound(getPlayerChoice().toLowerCase(), getComputerChoice());
        }
    }
    else if (computerSelection == 'paper') {
        if (playerSelection == 'scissor') {
            return 'You win! Scissor beats paper';
        }
        else if (playerSelection == 'paper') {
            console.log("It's a tie!");
            //return playRound(getPlayerChoice().toLowerCase(), getComputerChoice());
        }
        else {
            return 'You lose! Paper beats rock';
        }
    }
    else {
        if (playerSelection == 'scissor') {
            console.log("It's a tie!");
            //return playRound(getPlayerChoice().toLowerCase(), getComputerChoice());
        }
        else if (playerSelection == 'paper') {
            return 'You lose! Scissor beats paper';
        }
        else {
            return 'You win! Rock beats scissor';
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    /* for (i = 0; i < 5; i++) {
        let result = playRound(getPlayerChoice().toLowerCase(), getComputerChoice()).slice(0, 8);
        if (result == 'You lose') {
            console.log(result + '!');
            computerScore++;
        }
        else if (result == 'You win!') {
            console.log(result);
            playerScore++;
        }
        else {
            i--;
        }
    } */

    if (playerScore > computerScore) {
        return 'You win the best of 5!';
    }
    else {
        return 'You lose the best of 5!';
    }
}

//console.log(game());