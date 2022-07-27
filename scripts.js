 function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = playerChoice();
        const computerSelection = getComputerChoice();

        function getComputerChoice() {
            const rndInt = Math.floor(Math.random() * 3) + 1

            if(rndInt === 1) {
                return("Rock")
            } else if (rndInt === 2) {
                return("Paper")
            } else {return("Scissors")}
        }

        function playerChoice() {
            choice = prompt("Enter rock, paper, scissors").toLowerCase();
            return(choice)
        }

        const score = playRound(playerSelection, computerSelection)
        
        console.log(score);

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




















