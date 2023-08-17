function getComputerChoice () {
    const game_array = ['rock','paper','scissor'];
    choice = game_array[Math.floor(Math.random()*game_array.length)];
    return choice;
}

let win = 0
let lose = 0
let tie = 0


function playround (playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        result = "its a draw";
        tie += 1
      } else if (playerSelection === 'rock' ) {
        if (computerSelection === 'paper' ) {
            result = "you lose, paper covers rock ";
            lose += 1
        } else if (computerSelection === 'scissor') {
            result = "you win, rock breaks scissor";
            win += 1
        }
      } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock' ) {
            result = "you win, paper covers rock";
            win += 1 
        } else if (computerSelection === 'scissor') {
            result = "You lose, scissor cuts paper";
            lose += 1
        }
      } else if (playerSelection === 'scissor') {
        if (computerSelection === 'paper') {
            result = "you win, scissor cuts paper";
            win += 1
        }else if (computerSelection === 'rock') {
            result = "you lose, rock breaks scissor";
            lose += 1
        }
    }

    return result
}

function play () {
    for (let i=1; i<=5; i++) {
        let pick = prompt("please pick between rock, paper and scissor");
        playround(pick.toLowerCase(), getComputerChoice());
    }
    if (win > lose) {
        return `You have won by ${win}`;
    }else if (lose > win) {     
        return `You lost by ${lose} much`;
    }else if (lose === 0 && tie === 0) {
        return "FLawless Victory";
    }else {
        return "Tie"
    }
}


console.log(play())
console.log(`Win:${win}, Lose:${lose}, Draw:${tie}`)
