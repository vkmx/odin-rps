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

function playGame(humanChoise){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(){
        console.log(humanChoise);
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

    }

    playRound();

    if( humanScore === computerScore ){
        console.log(`It's a draw, you both scored ${humanScore} each`);
    }

    if( humanScore > computerScore ){
        console.log(`You win! You scored ${humanScore}, and the computer scored ${computerScore}`);
    }

    if( humanScore < computerScore ){
        console.log(`You lose! You scored ${humanScore}, and the computer scored ${computerScore}`);
    }

}

function runTest(rounds){

    let rock = 0;
    let paper = 0;
    let scissors = 0;

    for( let i = 0; i < rounds; i++ ){
        let choise = getComputerChoice();

        if( choise === 'rock' ){
            rock++;
        }

        if( choise === 'paper' ){
            paper++;
        }

        if( choise === 'scissors' ){
            scissors++;
        }

    }

    console.log(`rock was returned      ${rock} times`);
    console.log(`paper was returned     ${paper} times`);
    console.log(`scissor was returned   ${scissors} times`);
}

let buttons = document.querySelector('.buttons');

buttons.addEventListener( 'click', (event) => {

    const target = event.target;

    const humanChoise = target.id

    playGame( humanChoise );
});