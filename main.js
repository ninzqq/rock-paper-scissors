function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];

    let choice = choices[Math.floor(Math.random() * choices.length)];

    //console.log("Computer's choice: " + choice);
    return choice.toLowerCase();
}

function playerSelection() {
    let choice = prompt("Rock, Paper or Scissors: ").toString();
    //console.log(choice);
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        playerSelection();
    }

    return choice;
}

let score = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            document.getElementById("result").innerHTML = "It's a TIE";
        } else if (computerSelection === "scissors") {
            document.getElementById("result").innerHTML = "You WIN. Rock beats Scissors"
            score++;
            document.getElementById("playerScore").innerHTML = score.toString();
        } else if ( computerSelection === "paper") {
            document.getElementById("result").innerHTML = "You LOSE. Paper beats Rock";
            score--;
            document.getElementById("playerScore").innerHTML = score.toString();
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            document.getElementById("result").innerHTML = "It's a TIE";
        } else if (computerSelection === "rock") {
            document.getElementById("result").innerHTML = "You WIN. Paper beats Rock";
            score++;
            document.getElementById("playerScore").innerHTML = score.toString();
        } else if ( computerSelection === "scissors") {
            document.getElementById("result").innerHTML = "You LOSE. Scissors beats Paper";
            score--;
            document.getElementById("playerScore").innerHTML = score.toString();
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            document.getElementById("result").innerHTML = "It's a TIE";
        } else if (computerSelection === "paper") {
            document.getElementById("result").innerHTML = "You WIN. Scissors beats Paper";
            score++;
            document.getElementById("playerScore").innerHTML = score.toString();
        } else if ( computerSelection === "rock") {
            document.getElementById("result").innerHTML = "You LOSE. Rock beats Scissors";
            score--;
            document.getElementById("playerScore").innerHTML = score.toString();
        }
    }
    return score;
}

function rock() {
    playRound('rock', getComputerChoice());
}

function paper() {
    playRound('paper', getComputerChoice());
}

function scissors() {
    playRound('scissors', getComputerChoice());
}

//game();