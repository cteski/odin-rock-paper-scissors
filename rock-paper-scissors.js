const LOSE = 0;
const TIE = 1;
const WIN = 2;

const buttons = document.querySelectorAll('button');

let playerWins = 0;
let computerWins = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerChoice = getComputerChoice();
        let result = playRound(button.id, computerChoice);

        switch(result) {
            case LOSE:
                computerWins += 1;
                break;
            case WIN:
                playerWins += 1;
                break;
        }
    });
})

function getComputerChoice() {
    let choices = [];
    choices.push('rock', 'paper', 'scissors');
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    let result = '';
    let loweredPlayerSelection = playerSelection.toLowerCase();

    switch (loweredPlayerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    result = TIE;
                    break;
                case 'paper':
                    result = LOSE;
                break;
                case 'scissors':
                    result = WIN;
                break;
            }
        break;
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    result = WIN;
                    break;
                case 'paper':
                    result = TIE;
                break;
                case 'scissors':
                    result = LOSE;
                break;
            }
        break;
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    result = LOSE;
                    break;
                case 'paper':
                    result = WIN;
                break;
                case 'scissors':
                    result = TIE;
                break;
            }
        break;
    }

    return result;
}