let playerScore = 0;
let botScore = 0;

// declare + create an array of options
// declare new var "choice" - use Math.foor() to round down to nearest # & Math.random() to get a random option every time
// multiply by the 3 options (options.length)
// return user choice

function getBotChoice(){
    const options = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * options.length); // could also do * 3 
    return options[choice]; // return the options at random
}

// set conditionals
function playRound (playerChoice, botChoice){
    if(playerChoice === "rock" && botChoice === "paper" || playerChoice === "paper" && botChoice === "scissors" || playerChoice === "scissors" && botChoice === "rock"){
        botScore++;
        return `You lose! ${botChoice} beats ${playerChoice}`;
    }else if(playerChoice === "rock" && botChoice === "scissors" || playerChoice === "paper" && botChoice === "rock" || playerChoice === "scissors" && botChoice === "paper"){
        playerScore++;
        return `You win! ${playerChoice} beats ${botChoice}`;
    }else{
        return `You tied. You both picked ${playerChoice}`;
    }
}

function playGame(){
    for (let i = 0 ; i < 5; i++){
        const botChoice = getBotChoice();
        const playerChoice = prompt("Choose what to throw", 'Rock, Paper, Scissors').toLowerCase(); // makes param case sensative
        playRound(playerChoice, botChoice);
    }

    if(playerScore > botScore){
        return 'You beat the computer! Great work!'
    }else if(playerScore < botScore){
        return 'You got beat by the computer! Booo!'
    }else{
        return 'You tied. Not too shabby.'
    }
}

console.log(playGame());
