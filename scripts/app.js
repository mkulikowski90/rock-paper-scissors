let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

//variables
//global constants
const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";


//dom elements 

//buttons
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

//functions 
function getComputerChoice(){
    const randomNumber = Math.random();
    let computerChoice;

    if (randomNumber < 0.33){
        computerChoice = "ROCK";
    }else if (randomNumber > 0.33 && randomNumber < 0.66){
        computerChoice = "PAPER";
    }else{
        computerChoice = "SCISSORS";
    }
    return computerChoice;
};


function updateScore(){
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.getElementById("games-played").innerHTML = gamesPlayed;
}

updateScore();

function playRound(playerChoice){
    const computerChoice = getComputerChoice();

    if (computerChoice == playerChoice){
        playerScore++;
        computerScore++;
        updateScore();
    }else if (playerChoice == "ROCK" && computerChoice == "SCISSORS"){
        playerScore++;
        updateScore();
    }else if (playerChoice == "SCISSORS" && computerChoice == "PAPER"){
        playerScore++;
        updateScore();
    }else if (playerChoice == "PAPER" && computerChoice == "ROCK"){
        playerScore++;
        updateScore();
    }else{
        computerScore++;
        updateScore();
    }
}

//button events
rockButton.addEventListener("click", () => {playRound(rock);console.log(playerScore+" "+computerScore)});
paperButton.addEventListener("click", () => {playRound(paper);console.log(playerScore+" "+computerScore)});
scissorsButton.addEventListener("click", () => {playRound(scissors);console.log(playerScore+" "+computerScore)});
