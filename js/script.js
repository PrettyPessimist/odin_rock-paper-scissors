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
    (userChoice === 0) ? "user error":
    "error";

    if(result ==="user win"){
        userScore = userScore + 1;
        return alert("You won! " + usrChoiceWord + " beats "+cpuChoiceWord);
    } else if(result === "computer win"){
        cpuScore = cpuScore + 1;
        return alert("You lost! " + cpuChoiceWord + " beats "+usrChoiceWord);
    } else if (result === "tie"){
        alert("You tied? Play again!");
        playRound();
    } else if (result == "user error"){
        cpuScore = cpuScore + 1;
        return alert("You lost! " + cpuChoiceWord + " beats your gibberish");
    }
}

function playGame(n){
    let round = 0;
    for (let x=0; x<=n-1; x++){
        round = round + 1;
        alert("Round "+round);
        playRound();
    } 
    if (round===n){
        if(userScore>cpuScore){
            alert(" Final Stats\n Rounds: "+round+"\n Your Wins: "+userScore+"\n Computer Wins: "+cpuScore+"\n Congrats, you won!");
            userScore=0;
            cpuScore=0;
        } else if(userScore<cpuScore){
            alert(" Final Stats\n Rounds: "+round+"\n Your Wins: "+userScore+"\n Computer Wins: "+cpuScore+"\n Bummer, you lost!");
            userScore=0;
            cpuScore=0;
        } else if(userScore===cpuScore){
            alert(" Final Stats\n Rounds: "+round+"\n Your Wins: "+userScore+"\n Computer Wins: "+cpuScore+"\n Damn, you two tied!");
            userScore=0;
            cpuScore=0;
        }
        
    }
}




