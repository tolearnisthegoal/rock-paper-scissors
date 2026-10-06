let playerScore = 0
let computerScore = 0



function computerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) +1
    switch (randomNumber) {
        case 1:
            return 'rock';
            break;

        case 2:
            return 'paper';
            break;
        
        case 3:
            return 'scissor';
            break;

    }
}

function userChoice(){
    let userNumber = prompt('Choose (Rock/Paper/Scissor)').toLowerCase();
    switch (userNumber) {
        case 'rock':
            return 'rock';
            break;

        case 'paper':
            return 'paper';
            break;
        
        case 'scissor':
            return 'scissor';
            break;

    }
}



function playRound(choiceComputer, choiceUser){
    // Same choice = Tie
    if (choiceComputer === choiceUser){
        console.log("It's a tie");
        console.log(`Computer score is ${computerScore} Player score is ${playerScore}`);
    } 

    // Rock beats Scissors
    else if (choiceComputer === 'rock' && choiceUser === 'scissor'){
        console.log('Computer wins');
        computerScore ++;
        console.log(`Computer score is ${computerScore} Player score is ${playerScore}`);
    }

    else if (choiceComputer === 'scissor' && choiceUser === 'rock'){
        console.log('Player wins');
        playerScore ++;
        console.log(`Computer score is ${computerScore} Player score is ${playerScore}`);
    }

    // Scissors beats Paper
    else if (choiceComputer === 'scissor' && choiceUser === 'paper'){
        console.log('Computer wins');
        computerScore ++;
        console.log(`Computer score is ${computerScore} Player score is ${playerScore}`);
    }

    else if (choiceComputer === 'paper' && choiceUser === 'scissor'){
        console.log('Player wins');
        playerScore ++;
        console.log(`Computer score is ${computerScore} Player score is ${playerScore}`);
    }

    // Paper beats Rock
    else if (choiceComputer === 'paper' && choiceUser === 'rock'){
        console.log('Computer wins');
        computerScore ++;
        console.log(`Computer score is ${computerScore} Player score is ${playerScore}`);
    }

    else if (choiceComputer === 'rock' && choiceUser === 'paper'){
        console.log('Player wins');
        playerScore ++;
        console.log(`Computer score is ${computerScore} Player score is ${playerScore}`);
    }

}

let round = 0
while (round < 5){
    const choiceComputer = computerChoice();
    console.log(` Computer choose ${choiceComputer}`);

    const choiceUser = userChoice();
    console.log(`User choose ${choiceUser}`);
    playRound(choiceComputer, choiceUser);
    round ++;
}

if (playerScore > computerScore){
    console.log('Player wins');
} else if (computerScore > playerScore){
    console.log('Player Loses');
}else{
    console.log("'It's a Draw")
}

