let playerChoice;
let playerScore = 0;
let computerScore = 0;

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

const resultText = document.querySelector('.resultText');

const rockButton = document.querySelector('.rock');
rockButton.onclick = () => { 
    playRound('rock', getComputerChoice());
    finalResult();
};

const paperButton = document.querySelector('.paper');
paperButton.onclick = () =>  {
    playRound('paper', getComputerChoice());
    finalResult(resultText);
};

const scissorButton = document.querySelector('.scissor');
scissorButton.onclick = () => {
    playRound('scissor', getComputerChoice());
    finalResult(resultText);
};

const computerScoreText = document.querySelector('.computerScoreText');
const playerScoreText = document.querySelector('.playerScoreText');

function playRound(playerSelection, computerSelection) {
    if (computerSelection == 'rock') {
        if (playerSelection == 'scissor') {
            resultText.textContent = 'You lose! Rock beats scissor';
            computerScore += 1;
            computerScoreText.textContent = 'Computer: ' + computerScore;
        }
        else if (playerSelection == 'paper') {
            resultText.textContent = 'You win! Paper beats rock';
            playerScore += 1;
            playerScoreText.textContent = 'Player: ' + playerScore;
        }
        else {
            resultText.textContent = "It's a tie!";
        }
    }
    else if (computerSelection == 'paper') {
        if (playerSelection == 'scissor') {
            resultText.textContent = 'You win! Scissor beats paper';
            playerScore += 1;
            playerScoreText.textContent = 'Player: ' + playerScore;
        }
        else if (playerSelection == 'paper') {
            resultText.textContent = "It's a tie!";
        }
        else {
            resultText.textContent = 'You lose! Paper beats rock';
            computerScore += 1;
            computerScoreText.textContent = 'Computer: ' + computerScore;
        }
    }
    else {
        if (playerSelection == 'scissor') {
            resultText.textContent = "It's a tie!";
        }
        else if (playerSelection == 'paper') {
            resultText.textContent = 'You lose! Scissor beats paper';
            computerScore += 1;
            computerScoreText.textContent = 'Computer: ' + computerScore;
        }
        else {
            resultText.textContent = 'You win! Rock beats scissor';
            playerScore += 1;
            playerScoreText.textContent = 'Player: ' + playerScore;
        }
    }
}

function finalResult() {
    if (playerScore >= 5) {
        resultText.textContent = 'You won the best of 5!'
        playerScore = 0;
        computerScore = 0;
        playerScoreText.textContent = 'Player: 0';
        computerScoreText.textContent = 'Computer: 0';
    }
    else if (computerScore >= 5) {
        resultText.textContent = 'You lose the best of 5!'
        playerScore = 0;
        computerScore = 0;
        playerScoreText.textContent = 'Player: 0';
        computerScoreText.textContent = 'Computer: 0';
    }
}