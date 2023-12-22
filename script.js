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

let symbol = getComputerChoice();
console.log(symbol);