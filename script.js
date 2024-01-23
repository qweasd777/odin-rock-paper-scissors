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
        const choice = prompt("Rock, Paper or Scissors?").toLowerCase();

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
                }           
                else // CPU scissors
                {
                    console.log("You win! Rock beats Scissors!");
                }
                break;
            
            case "paper":
                if(computerSelection == "scissors")
                {
                    console.log("You lose! Scissors beats Paper!");
                }           
                else // CPU rock
                {
                    console.log("You win! Paper beats Rock!");
                }
                break;
    
            case "scissors": 
                if(computerSelection == "rock")
                {
                    console.log("You lose! Rock beats Scissors!");
                }           
                else // CPU paper
                {
                    console.log("You win! Scissors beats Paper!");
                }
            default:
        }
    }
}
   
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);