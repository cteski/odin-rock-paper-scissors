const LOSE = 0;
const TIE = 1;
const WIN = 2;

const LOSE_MESAGE = `You lose!`;
const TIE_MESSAGE = `It's a tie!`;
const WIN_MESSAGE = `You win!`;
const PLAYER_IS_WINNER = `You have`;
const COMPUTER_IS_WINNER = `The computer has`
const WINNER_MESSAGE = ` won five rounds and won the game!`;

const WIN_THRESHOLD = 5;

const buttons = document.querySelectorAll('button');

const resultsDiv = document.querySelector('#results');
const finalResultsDiv = document.querySelector('#final-results');
const resultList = document.createElement('ul');
const playerWinCountDiv = document.querySelector("#player-win-count");
const computerWinCountDiv = document.querySelector("#computer-win-count");

let playerWins = 0;
let computerWins = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const resultItem = document.createElement('li');
        let computerChoice = getComputerChoice();
        let result = playRound(button.id, computerChoice);
        let message = '';
        let finalResult = '';
        let displayFinalResults = false;

        if (!resultsDiv.contains(resultList)) {
            resultsDiv.appendChild(resultList);
        }

        switch(result) {
            case TIE :
                message = TIE_MESSAGE;
                break;
            case LOSE:
                computerWins += 1;
                message = LOSE_MESAGE;
                break;
            case WIN:
                playerWins += 1;
                message = WIN_MESSAGE;
                break;
        }

        playerWinCountDiv.textContent = playerWins;
        computerWinCountDiv.textContent = computerWins;

        if (playerWins == WIN_THRESHOLD)
        {
            finalResult = PLAYER_IS_WINNER.concat(WINNER_MESSAGE);
            displayFinalResults = true;
        }

        if (computerWins == WIN_THRESHOLD) {
            finalResult = COMPUTER_IS_WINNER.concat(WINNER_MESSAGE);
            displayFinalResults = true;
        }

        message = message.concat(' ', `You chose ${button.id}, and the computer chose ${computerChoice}!`);
        resultItem.textContent = message;
        resultList.appendChild(resultItem);

        if (displayFinalResults) {
            finalResultsDiv.textContent = finalResult;
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