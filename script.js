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

function getHumanChoice(){
    let playerChoice = prompt("Make your choice.");
    let finalChoice = playerChoice.toUpperCase();
    
    return finalChoice;
};

function playRound(){
    const computerChoice = getComputerChoice();
    const playerChoice = getHumanChoice();

    if (computerChoice == playerChoice){
        return "DRAW";
    }else if (playerChoice == "ROCK" && computerChoice == "SCISSORS"){
        return "PLAYER";
    }else if (playerChoice == "SCISSORS" && computerChoice == "PAPER"){
        return "PLAYER";
    }else if (playerChoice == "PAPER" && computerChoice == "ROCK"){
        return "PLAYER";
    }else{
        return "COMPUTER";
    }
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore <= 5 || computerScore <= 5){
        let round = playRound();
        if(round == "PLAYER"){
            alert("Player won");
            playerScore++;
        }else if(round == "COMPUTER"){
            alert("Computer won");
            computerScore++;
        }else{
            alert("draw");
            computerScore++;
            playerScore++;
        }
    }
}

playGame();