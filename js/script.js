let cpuScore = 0;
let usrScore = 0;
let userChoice = 0;
let finalCpuScore = 0;
let finalUserScore = 0;
let container = document.querySelector("#container");
let resultTxt = document.querySelector(".result");

container.addEventListener("click", (e) => {
    if (finalCpuScore !== 0 || finalUserScore !== 0){
        finalCpuScore = 0; finalUserScore = 0;
        usrScore = 0; cpuScore = 0;
    }

    let btn = e.target;
    switch(btn.id){
        case 'rock':
            userChoice = 1;
            break;
        case 'paper':
            userChoice = 2;
            break;
        case 'scissors':
            userChoice = 3;
            break;
    }{
        playRound();
    }
});

function getCPUChoice() {
    let cpuChoice = Math.floor(Math.random()*3)+1;
    return cpuChoice;
}

function playRound(){
    cpu = getCPUChoice();
    usr = userChoice;
    let result = 
    (usr === cpu) ? "tie" :
    ((usr === 1 && cpu === 3) || (usr === 2 && cpu === 1) || (usr === 3 && cpu === 2)) ? "user win":
    ((usr === 3 && cpu === 1) || (usr === 1 && cpu === 2) || (usr === 2 && cpu === 3)) ? "computer win":
    (usr === 0) ? "user error":
    "error";

    let usrChoice = (usr === 1) ? "Rock":
                        (usr === 2) ? "Paper":
                        (usr === 3) ? "Scissors":
                        "error";

    let cpuChoice = (cpu === 1) ? "Rock":
                        (cpu === 2) ? "Paper":
                        (cpu === 3) ? "Scissors":
                        "error";

    if(result == "tie"){
        alert("Tie! Play again!");
    } else if (result == "user win"){
        alert("You won! " + usrChoice + " beats " + cpuChoice);
        usrScore += 1;
    } else if (result == "computer win"){
        alert("You lost! " + cpuChoice + " beats " + usrChoice);
        cpuScore += 1;
    }

    if(usrScore < 5 && cpuScore < 5){ 
     resultTxt.textContent = ("User Score: " + usrScore + "\n Computer Score: " + cpuScore);
    } else if (usrScore >=5){
        finalUserScore = usrScore;
        finalCpuScore = cpuScore;
        usrScore = 0; cpuScore = 0;
        alert("YOU WON IT ALL!");
        return resultTxt.textContent = "Final Scores!" + "\n"
                                     + "User Score: " + finalUserScore + "\n" + "Computer Score: " + finalCpuScore;
    } else if (cpuScore >= 5){
        finalUserScore = usrScore;
        finalCpuScore = cpuScore;
        usrScore = 0; cpuScore = 0;
        alert("YOU LOST IT ALL!");
        return resultTxt.textContent = "You lost it all!" + "\n"
                                     + "User Score: " + finalUserScore + "\n" + "Computer Score: " + finalCpuScore;
    }
}



