
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
    let userNumber = prompt('Rock Paper Scissor').toLowerCase();
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




let choiceComputer = computerChoice()
console.log(` Computer choose ${choiceComputer}`)

let choiceUser = userChoice()
console.log(`User choose ${choiceUser}`)


// Same choice = Tie
if (choiceComputer === choiceUser){
    console.log("It's a tie")
} 

// Rock beats Scissors
else if (choiceComputer === 'rock' && choiceUser === 'scissor'){
    console.log('Computer wins')
}

else if (choiceComputer === 'scissor' && choiceUser === 'rock'){
    console.log('Player wins')
}

// Scissors beats Paper
else if (choiceComputer === 'scissor' && choiceUser === 'paper'){
    console.log('Computer wins')
}

else if (choiceComputer === 'paper' && choiceUser === 'scissor'){
    console.log('Player wins')
}

// Paper beats Rock
else if (choiceComputer === 'paper' && choiceUser === 'rock'){
    console.log('Computer wins')
}

else if (choiceComputer === 'rock' && choiceUser === 'paper'){
    console.log('Player wins')
}



