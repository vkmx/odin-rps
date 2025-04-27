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


    if( humanChoise === computerChoice ){
        //draw
        console.log( 'draw' );
    } else {

        if( humanChoise === 'rock' ){

            if( computerChoice === 'paper' ){
                console.log( `You lose, ${computerChoice} beats ${humanChoise}`);
                computerScore++;
            }

            if( computerChoice === 'scissors' ){
                console.log( `You win, ${humanChoise} beats ${computerChoice}`);
                humanScore++;
            }
        }

        if( humanChoise === 'paper' ){

            if( computerChoice === 'scissors' ){
                console.log( `You lose, ${computerChoice} beats ${humanChoise}`);
                computerScore++;
            }

            if( computerChoice === 'rock' ){
                console.log( `You win, ${humanChoise} beats ${computerChoice}`);
                humanScore++;
            }
        }

        if( humanChoise === 'scissors' ){

            if( computerChoice === 'rock' ){
                console.log( `You lose, ${computerChoice} beats ${humanChoise}`);
                computerScore++;
            }

            if( computerChoice === 'paper' ){
                console.log( `You win, ${humanChoise} beats ${computerChoice}`);
                humanScore++;
            }
        }

    }

    //resultWindow.textContent = message;

}

function updateScores(){
    computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;
}

function displayWinner(){

    let message = '';

    if( humanScore === computerScore ){
        message = `It's a draw, you both scored ${humanScore} each`;
    }

    if( humanScore > computerScore ){
        message = `You win! You scored ${humanScore}, and the computer scored ${computerScore}`;
    }

    if( humanScore < computerScore ){
        message = `You lose! You scored ${humanScore}, and the computer scored ${computerScore}`;
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

let gameResultDisplay       = document.querySelector('.result div:first-child')
let roundResultDisplay      = document.querySelector('.result div:last-child')
let computerScoreDisplay    = document.querySelector('.score .computer div:first-child');
let humanScoreDisplay       = document.querySelector('.score .user div:first-child');

let buttons                 = document.querySelector('.buttons');

buttons.addEventListener( 'click', (event) => {

    const target = event.target;

    const humanChoise = target.id

    playGame( humanChoise );
});