function getComputerChoice(){

    let num = Math.random() * 6;

    if( num < 2 ){
        return 'rock';
    }

    if( num < 4 ){
        return 'paper';
    }

    return 'scissors';

}

function getHumanChoice(){

    let choice = prompt( "Enter your choice (values other than 'rock', 'paper', or 'scissors' will be ignored)");

    choice = choice.toLowerCase();

    if( choice === 'rock' || choice === 'paper' || choice === 'scissors' ){
        return choice;
    }

    return 'invalid input';

}

function playRound(humanChoise){

    rounds++;

    let message = '';
    let computerChoice = getComputerChoice();

    switch( humanChoise ){
        case computerChoice:
            message = `It's a draw, you both chose ${humanChoise}`;
            break;
        case 'rock':
            if( computerChoice === 'paper' ){
                message = `You lost this round, ${computerChoice} beats ${humanChoise}`;
                computerScore++;
            }

            if( computerChoice === 'scissors' ){
                message = `You won this round, ${humanChoise} beats ${computerChoice}`;
                humanScore++;
            }
            break;
        case 'paper':
            if( computerChoice === 'scissors' ){
                message = `You lost this round, ${computerChoice} beats ${humanChoise}`;
                computerScore++;
            }

            if( computerChoice === 'rock' ){
                message = `You won this round, ${humanChoise} beats ${computerChoice}`;
                humanScore++;
            }
            break;
        case 'scissors':
            if( computerChoice === 'rock' ){
                message = `You lost this round, ${computerChoice} beats ${humanChoise}`;
                computerScore++;
            }

            if( computerChoice === 'paper' ){
                message = `You won this round, ${humanChoise} beats ${computerChoice}`;
                humanScore++;
            }
            break;

    }


    gameResultDisplay.textContent = message;

}

function updateScores(){
    computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;
}

function displayWinner(){

    let message = '';

    if( humanScore === computerScore ){
        message = `Game is a draw, you both scored ${humanScore} each`;
    }

    if( humanScore > computerScore ){
        message = `You won the game! You scored ${humanScore}, and the computer scored ${computerScore}`;
    }

    if( humanScore < computerScore ){
        message = `You lost the game! You scored ${humanScore}, and the computer scored ${computerScore}`;
    }

    gameResultDisplay.textContent = message;
}

function resetGame(){
    rounds          = 0;
    humanScore      = 0;
    computerScore   = 0;
}

function playGame(humanChoise){

    playRound(humanChoise);
    updateScores();

    if( rounds === 5 ) {
        displayWinner();
        resetGame();
    }

}

let rounds                  = 0;
let humanScore              = 0;
let computerScore           = 0;

let gameResultDisplay       = document.querySelector('.result div:first-child');
let computerScoreDisplay    = document.querySelector('.score .computer div:first-child');
let humanScoreDisplay       = document.querySelector('.score .user div:first-child');

let buttons                 = document.querySelector('.buttons');

buttons.addEventListener( 'click', (event) => {

    const target = event.target;

    const humanChoise = target.id

    playGame( humanChoise );
});