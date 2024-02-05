// fn to return random no. btwn min (inclusive) and max (exclusive)
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function getComputerChoice() {
    const choice = getRandInt(0, 3);

    switch(choice) {
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2:
        default:
            return "scissors";
    }
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let score = 0;
    let roundResultText = "> You played " + playerSelection + "<br>" 
                        + "> CPU played " + computerSelection + "<br>";
    
    if(computerSelection == playerSelection)
    {
        roundResultText += "<br>It's a tie!";
    }
    else
    {
        switch(playerSelection) {
            case "rock":
                if(computerSelection == "paper")
                {
                    roundResultText += "<br>You lose! Paper beats Rock!";
                    score--;
                }           
                else // CPU scissors
                {
                    roundResultText += "<br>You win! Rock beats Scissors!";
                    score++;
                }
                break;
            
            case "paper":
                if(computerSelection == "scissors")
                {
                    roundResultText += "<br>You lose! Scissors beats Paper!";
                    score--;
                }           
                else // CPU rock
                {
                    roundResultText += "<br>You win! Paper beats Rock!";
                    score++;
                }
                break;
    
            case "scissors": 
                if(computerSelection == "rock")
                {
                    roundResultText += "<br>You lose! Rock beats Scissors!";
                    score--;
                }           
                else // CPU paper
                {
                    roundResultText += "<br>You win! Scissors beats Paper!";
                    score++;
                }
            default:
        }
    }
    
    roundResult.innerHTML = roundResultText;

    return score;
}

function checkWinner(updateScore) {
    if(updateScore > 0)         // Player wins the round
    {
        playerScore++;
        // display player won the rd
        // update player score display
        ui_playerScore.textContent = playerScoreUIText + playerScore;
    } 
    else if(updateScore < 0)    // CPU wins the round
    {
        cpuScore++;
        // display cpu won the rd
        // update cpu score display
        ui_cpuScore.textContent = cpuScoreUIText + cpuScore;
    }
    else                        // Tie
    {
        // display tie 
    }


    if(playerScore >= 5 || cpuScore >= 5)
    {
        // display game over
        // announce winner (whoever has 5 pts)
        // show restart btn
        roundResult.innerHTML += "<br><br>GAME OVER!";
        btn_restart.style.display = "block";
    }
} 


const btn_rock = document.querySelector('#btn_rock');
const btn_paper = document.querySelector('#btn_paper');
const btn_scissors = document.querySelector('#btn_scissors');
const btn_restart = document.querySelector('#btn_restart');
const ui_playerScore = document.querySelector('#ui_playerScore');
const ui_cpuScore = document.querySelector('#ui_cpuScore');
const roundResult = document.querySelector('#roundResult');

// INIT
const playerScoreUIText = "YOU: ";
const cpuScoreUIText = "CPU: ";
let playerScore = 0;
let cpuScore = 0;

function initGame() {
    playerScore = 0;
    cpuScore = 0;
    ui_playerScore.textContent = playerScoreUIText + playerScore;
    ui_cpuScore.textContent = cpuScoreUIText + cpuScore;
    roundResult.innerHTML = "";
    btn_restart.style.display = "none";
}
// INIT
initGame();

// BUTTONS
btn_rock.addEventListener('click', () => {      
    if(playerScore >= 5 || cpuScore >= 5)
        return; 

    const updateScore = playRound("rock");    
    checkWinner(updateScore);
});

btn_paper.addEventListener('click', () => {   
    if(playerScore >= 5 || cpuScore >= 5)
        return; 

    const updateScore = playRound("paper");    
    checkWinner(updateScore);
});

btn_scissors.addEventListener('click', () => {   
    if(playerScore >= 5 || cpuScore >= 5)
        return; 

    const updateScore = playRound("scissors");    
    checkWinner(updateScore);
});

btn_restart.addEventListener('click', () => {  
    initGame();
});