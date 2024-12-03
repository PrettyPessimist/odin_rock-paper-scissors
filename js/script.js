

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




