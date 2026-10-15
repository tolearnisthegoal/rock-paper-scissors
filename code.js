let gameOver = false;
let playerScore = 0;
let computerScore = 0;
const results = document.querySelector("#results");

function computerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) +1
    switch (randomNumber) {
        case 1:
            return 'rock';

        case 2:
            return 'paper';
        
        case 3:
            return 'scissor';

    }
}



function playRound(choiceComputer, choiceUser){
    if (gameOver) return;

    results.style.color = '#6C3483';
    results.style.fontSize = '20px';
    results.style.fontWeight = 'bold';
    results.style.marginTop = '20px'
    // Same choice = Tie
    if (choiceComputer === choiceUser){
        results.textContent = `It's a tie ::: Computer score is ${computerScore} Player score is ${playerScore}`
    } 

    // Rock beats Scissors
    else if (choiceComputer === 'rock' && choiceUser === 'scissor'){
        computerScore ++;
        results.textContent = `Computer wins ::: Computer score is ${computerScore} Player score is ${playerScore}`;
    }

    else if (choiceComputer === 'scissor' && choiceUser === 'rock'){
        playerScore ++;
        results.textContent = `Player wins ::: Computer score is ${computerScore} Player score is ${playerScore}`;
    }

    // Scissors beats Paper
    else if (choiceComputer === 'scissor' && choiceUser === 'paper'){
        computerScore ++;
        results.textContent = `Computer wins ::: Computer score is ${computerScore} Player score is ${playerScore}`;
    }

    else if (choiceComputer === 'paper' && choiceUser === 'scissor'){
        playerScore ++;
        results.textContent = `Player wins ::: Computer score is ${computerScore} Player score is ${playerScore}`;
    }

    // Paper beats Rock
    else if (choiceComputer === 'paper' && choiceUser === 'rock'){
        computerScore ++;
        results.textContent = `Computer wins ::: Computer score is ${computerScore} Player score is ${playerScore}`;
    }

    else if (choiceComputer === 'rock' && choiceUser === 'paper'){
        playerScore ++;
        results.textContent = `Player wins ::: Computer score is ${computerScore} Player score is ${playerScore}`;
    }



    if (playerScore === 5) {
        results.textContent = `You won the game! Final score: ${playerScore} - ${computerScore}`;
        gameOver = true;
    } else if (computerScore === 5) {
        results.textContent = `Computer won the game! Final score: ${computerScore} - ${playerScore}`;
        gameOver = true;
    }

}




const rockBut = document.querySelector('.rockButton');
const paperBut = document.querySelector('.paperButton');
    const scissorsBut = document.querySelector('.scissorsButton');

rockBut.addEventListener('click', () => {
    playRound(computerChoice(), 'rock');
})

paperBut.addEventListener('click', () =>{
    playRound(computerChoice(), 'paper');
})

scissorsBut.addEventListener('click', () =>{
    playRound(computerChoice(), 'scissor');
})


