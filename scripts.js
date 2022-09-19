//Assigns a click event that activates game
let score1 = 0;
let score2 = 0;

document.querySelector('#rock').addEventListener('click', playerChoice1);
document.querySelector('#paper').addEventListener('click', playerChoice2);
document.querySelector('#scissors').addEventListener('click', playerChoice3);
 
let playerSelection;

function playerChoice1() {
    playerSelection = 'rock';
}

function playerChoice2() {
    playerSelection = 'paper';
}

function playerChoice3() {
    playerSelection = 'scissors';
}

const btn = document.querySelectorAll('.btn');

btn.forEach(btn => btn.addEventListener('click', game))

function game() {

//Assigns the computer choice functions to variables

        const computerSelection = getComputerChoice();

//This function selects a whole integer and assigns, permanently, a rock, paper, scissor designation on behalf of the pc

        function getComputerChoice() {
            const rndInt = Math.floor(Math.random() * 3) + 1

            if(rndInt === 1) {
                return("Rock")
            } else if (rndInt === 2) {
                return("Paper")
            } else {return("Scissors")}
        }

//This variable activates the comparison function

        const score = playRound(playerSelection, computerSelection)

//Prints results to console
        
        document.querySelector('.results').textContent = `Results: ${score}`;
        const you = document.querySelector('#score1');
        const comp = document.querySelector('#score2');
        

        if(score === "Victory!") {
            score1++
            you.textContent = score1
        } else if(score === "You Lose...") {
            score2++
            comp.textContent = score2
        }
        
        if(score1 === 3 || score2 === 3) {
            document.getElementById('rock').disabled = true;
            document.getElementById('paper').disabled = true;
            document.getElementById('scissors').disabled = true;
        }

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
    

 




















