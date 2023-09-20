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
                    result = 'It\'s a tie!';
                    break;
                case 'paper':
                    result = 'You lose! Paper beats rock';
                break;
                case 'scissors':
                    result = 'You win! Rock beats paper';
                break;
            }
        break;
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    result = 'You win! Paper beats rock';
                    break;
                case 'paper':
                    result = 'It\'s a tie!';
                break;
                case 'scissors':
                    result = 'You lose! Scissors beats paper';
                break;
            }
        break;
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    result = 'You lose! Rock beats scissors';
                    break;
                case 'paper':
                    result = 'You win! Scissors neats paper';
                break;
                case 'scissors':
                    result = 'It\'s a tie!';
                break;
            }
        break;
    }

    return result;
}