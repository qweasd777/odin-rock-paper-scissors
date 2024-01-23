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

// fn to get player choice. Will keep prompting for valid choice
function getPlayerChoice() {
    let validChoice = false;
    
    while(!validChoice)
    {
        let choice = prompt("Rock, Paper or Scissors?");

        if(choice != null)
            choice = choice.toLowerCase();

        if(choice == "rock" || choice == "paper" || choice == "scissors")
        {
            validChoice = true;
            return choice;
        }
        else
        {
            alert("INVALID CHOICE!");
        }
        
    }

    return "-1";
}

function playRound(playerSelection, computerSelection) {
    let score = 0;

    console.log("You played " + playerSelection);
    console.log("CPU played " + computerSelection);
    
    if(computerSelection == playerSelection)
    {
        console.log("It's a tie!");
    }
    else
    {
        switch(playerSelection) {
            case "rock":
                if(computerSelection == "paper")
                {
                    console.log("You lose! Paper beats Rock!");
                    score--;
                }           
                else // CPU scissors
                {
                    console.log("You win! Rock beats Scissors!");
                    score++;
                }
                break;
            
            case "paper":
                if(computerSelection == "scissors")
                {
                    console.log("You lose! Scissors beats Paper!");
                    score--;
                }           
                else // CPU rock
                {
                    console.log("You win! Paper beats Rock!");
                    score++;
                }
                break;
    
            case "scissors": 
                if(computerSelection == "rock")
                {
                    console.log("You lose! Rock beats Scissors!");
                    score--;
                }           
                else // CPU paper
                {
                    console.log("You win! Scissors beats Paper!");
                    score++;
                }
            default:
        }
    }
    return score;
}

function game(maxRd) {
    let currentRd = 0;
    let totalScore = 0;

    while(currentRd < maxRd)
    {
        currentRd++;
        console.log("Round " + currentRd);        
        
        let score = 0;  // keep track of current rd's score

        // keep playing round until there's 1 winner
        while(score == 0) {
            const playerSelection = getPlayerChoice();
            const computerSelection = getComputerChoice();

            score = playRound(playerSelection, computerSelection);
        }

        if(score > 0)
            totalScore += score;
    }

    console.log("GAME OVER!");
    console.log("You won " + totalScore + " round(s).");

    if(totalScore >= 3)
        console.log("You're the winner!");
    else
        console.log("CPU wins!");
} 

//game(5);  // called on btn press in html