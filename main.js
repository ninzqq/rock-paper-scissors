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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("It's a TIE");
        } else if (computerSelection === "scissors") {
            console.log("You WIN. Rock beats Scissors");
        } else if ( computerSelection === "paper") {
            console.log("You LOSE. Paper beats Rock");
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            console.log("It's a TIE");
        } else if (computerSelection === "rock") {
            console.log("You WIN. Paper beats Rock");
        } else if ( computerSelection === "scissors") {
            console.log("You LOSE. Scissors beats Paper");
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            console.log("It's a TIE");
        } else if (computerSelection === "paper") {
            console.log("You WIN. Scissors beats Paper");
        } else if ( computerSelection === "rock") {
            console.log("You LOSE. Rock beats Scissors");
        }
    }

}



