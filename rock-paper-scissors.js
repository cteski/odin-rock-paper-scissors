const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerChoice = getComputerChoice();
        playRound(button.id, computerChoice);
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
                    result = 1;
                    break;
                case 'paper':
                    result = 0;
                break;
                case 'scissors':
                    result = 2;
                break;
            }
        break;
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    result = 2;
                    break;
                case 'paper':
                    result = 1;
                break;
                case 'scissors':
                    result = 1;
                break;
            }
        break;
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    result = 0;
                    break;
                case 'paper':
                    result = 2;
                break;
                case 'scissors':
                    result = 1;
                break;
            }
        break;
    }

    return result;
}