 //A basic console RPS game.

 function game() {

//This for loop runs the game five times

    for (i = 0; i < 5; i++) {

//Assigns the computer choic and player choice functions to variables

        let playerSelection = playerChoice();
        const computerSelection = getComputerChoice();

//This function selects a whole integer on behalf of the pc

        function getComputerChoice() {
            const rndInt = Math.floor(Math.random() * 3) + 1

            if(rndInt === 1) {
                return("Rock")
            } else if (rndInt === 2) {
                return("Paper")
            } else {return("Scissors")}
        }

//This function prompts and returns player choice

        function playerChoice() {
            choice = prompt("Enter rock, paper, scissors").toLowerCase();
            return(choice)
        }

//The variable score activates the comparison function

        const score = playRound(playerSelection, computerSelection)

//Prints results to console

        console.log(score);

//Comparison logic for game

        function playRound() {
            if (playerSelection == "rock" && computerSelection == "Paper") {
                return("You Lose...") 
            } else if (playerSelection == "rock" && computerSelection == "Scissors") {
                return("Victory!")
            } else if (playerSelection == "rock" && computerSelection == "Rock"){
                return("It's a draw.")
            } else if (playerSelection == "scissors" && computerSelection == "Rock") {
                return("You Lose..")
            } else if (playerSelection == "scissors" && computerSelection == "Paper") {
                return("Victory!")
            } else if (playerSelection == "scissors" && computerSelection == "Scissors"){
                return("It's a draw.")
            } else if (playerSelection == "paper" && computerSelection == "Scissors") {
                return("You Lose..")
            } else if (playerSelection == "paper" && computerSelection == "Rock") {
                return("Victory!")
            } else if (playerSelection == "paper" && computerSelection == "Paper"){
                return("It's a draw.")
            }
        }
    }
}




















