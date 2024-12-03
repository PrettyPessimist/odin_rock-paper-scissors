let cpuScore = 0;
let userScore = 0;

function getCPUChoice() {
    let cpuChoice = Math.floor(Math.random()*3)+1;
    return cpuChoice;
}

function getUserChoice(){
    let userAnsw = prompt("Rock, Paper, or Scissors?");
    userAnsw = userAnsw.toLowerCase();
    let userChoice = (userAnsw === "rock") ? 1 :
                     (userAnsw === "paper") ? 2 :
                     (userAnsw === "scissors") ? 3:
                     0;
    if(userChoice === 0){
        alert("You have wasted a turn, good job!");
        return userChoice;
    }
    return userChoice;
}

function playRound(){
    cpuChoice = getCPUChoice();
    userChoice = getUserChoice();
    let usrChoiceWord = (userChoice === 1) ? "Rock":
                        (userChoice === 2) ? "Paper":
                        (userChoice === 3) ? "Scissors":
                        "error";

    let cpuChoiceWord = (cpuChoice === 1) ? "Rock":
                        (cpuChoice === 2) ? "Paper":
                        (cpuChoice === 3) ? "Scissors":
                        "error";

    let result = 
    (userChoice === cpuChoice) ? "tie" :
    ((userChoice === 1 && cpuChoice === 3) || (userChoice === 2 && cpuChoice === 1) || (userChoice === 3 && cpuChoice === 2)) ? "user win":
    ((userChoice === 3 && cpuChoice === 1) || (userChoice === 1 && cpuChoice === 2) || (userChoice === 2 && cpuChoice === 3)) ? "computer win":
    "error";

    if(result ==="user win"){
        userScore = userScore + 1;
        return alert("You won! " + usrChoiceWord + " beats "+cpuChoiceWord);
    } else if(result === "computer win"){
        cpuScore = cpuScore + 1;
        return alert("You lost! " + cpuChoiceWord + " beats "+usrChoiceWord);
    } else if (result === "tie"){
        playRound();
    }
}




