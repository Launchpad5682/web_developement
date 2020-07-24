// random number generator 
function randomNumber(minNumber, maxNumber) {
    let randomDecimal = Math.random() * (maxNumber - minNumber + 1) + minNumber
    let randomInteger = Math.floor(randomDecimal)
    return randomInteger;
}

function computerPlay() {
    let n = randomNumber(0, 2);
    return (n === 0) ? "Rock" : (n === 1) ? "Paper" : "Scissors";
}

function playRound(playerSelection, computerSelection) {
    let playWon = true;
    if (playerSelection === "Rock") {
        return (computerSelection === "Scissors") ? playWon = false :
            (computerSelection === "Paper") ? playRound : 0;
    } else if (playerSelection === "Paper") {
        return (computerSelection === "Rock") ? playWon :
            (computerSelection === "Scissors") ? playWon = false : 0;
    } else if (playerSelection === "Scissors") {
        return (computerSelection === "Rock") ? playWon = false :
            (computerSelection === "Paper") ? playWon : 0;
    }
    console.log(playWon);
}

function endResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log(`You Won! with ${playerScore} : ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You Lost! with ${playerScore} : ${computerScore}`);
    } else {
        console.log(`It is draw with a score of ${playerScore}`);
    }
}

// calling game (main function)
let playerScore = 0,
    computerScore = 0,
    gameCount = 0;

function game(pick) {
    let playWon;
    let playerSelection = pick;
    //console.log(playerSelection);
    //console.log(pick);
    let computerSelection = computerPlay();
    //console.log(computerSelection);
    playWon = playRound(playerSelection, computerSelection);
    if (playWon) {
        playerScore++;
    } else {
        computerScore++;
    }
    console.log(`Score of the player: ${playerScore} / Score of the computer: ${computerScore}`);
    gameCount++;
    if (gameCount == 5) {
        endResult(playerScore, computerScore);
        playerScore = computerScore = gameCount = 0;
        return;
    }
}

/*helper function to check the event
function eg(event) {
    console.log(event);
    console.log(event.id);
    console.log(`called`);
}
 */

const buttons = document.querySelectorAll(`.btn`);
// here we can only keep an instance of the function so I'm calling this using function
buttons.forEach(button => button.addEventListener("click", () => game(button.id)));