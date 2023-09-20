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

function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    let message = '';

    for (let i = 0; i < 5; i++)
    {
        let playerChoice = prompt('Rock, paper, or scissors?');
        let computerChoice = getComputerChoice();

        switch (playRound(playerChoice, computerChoice)) {
            case 0:
                ++computerWinCount;
                console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
                break;
            case 1:
                console.log (`It's a tie!`);
                break;
            case 2:
                ++playerWinCount;
                console.log(`You win! ${playerChoice} beats ${computerChoice}`);
                break;
        }
    }

    if (playerWinCount == computerWinCount)
    {
        message = `It's a tie!`;
    }
    else if (playerWinCount > computerWinCount)
    {
        message = `Player wins!`;
    }
    else {
        message = `Computer wins!`;
    }

    console.log(`Game over! The player won ${playerWinCount} times and the computer won ${computerWinCount} times! ${message}`)
}