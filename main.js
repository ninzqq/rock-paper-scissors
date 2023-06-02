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
    let score = 0;
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("It's a TIE");
        } else if (computerSelection === "scissors") {
            console.log("You WIN. Rock beats Scissors");
            score++;
        } else if ( computerSelection === "paper") {
            console.log("You LOSE. Paper beats Rock");
            score--;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            console.log("It's a TIE");
        } else if (computerSelection === "rock") {
            console.log("You WIN. Paper beats Rock");
            score++;
        } else if ( computerSelection === "scissors") {
            console.log("You LOSE. Scissors beats Paper");
            score--;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            console.log("It's a TIE");
        } else if (computerSelection === "paper") {
            console.log("You WIN. Scissors beats Paper");
            score++;
        } else if ( computerSelection === "rock") {
            console.log("You LOSE. Rock beats Scissors");
            score--;
        }
    }
    return score;
}

function game() {
    let player = 0;
    let computer = 0;
    let tie = 0;
    for (i = 0; i < 5; i++) {
        let score = playRound(playerSelection(), getComputerChoice());
        if (score === 1) {
            player++;
        } else if (score === -1) {
            computer++;
        } else {
            tie++;
        }
    }
    console.log("Player won " + player + " times");
    console.log("Computer won " + computer + " times");
    console.log("It was a TIE " + tie + " times");
}

game();