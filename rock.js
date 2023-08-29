function getComputerChoice () {
    const game_array = ['rock','paper','scissor'];
    choice = game_array[Math.floor(Math.random()*game_array.length)];
    return choice;
}

const body = document.querySelector('body');

let player = 0;
let computer = 0;
let tie = 0;


function reset () {
    player = 0;
    computer = 0;
    tie = 0;
}

function playround (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      result = "its a draw";
      tie += 1
    } else if (playerSelection === 'rock' ) {
      if (computerSelection === 'paper' ) {
          result = "you lose, paper covers rock ";
          computer += 1;
      } else if (computerSelection === 'scissor') {
          result = "you win, rock breaks scissor";
          player += 1;
      }
    } else if (playerSelection === 'paper') {
      if (computerSelection === 'rock' ) {
          result = "you win, paper covers rock";
          player += 1; 
      } else if (computerSelection === 'scissor') {
          result = "You lose, scissor cuts paper";
          computer += 1;
      }
    } else if (playerSelection === 'scissor') {
      if (computerSelection === 'paper') {
          result = "you win, scissor cuts paper";
          player += 1;
      }else if (computerSelection === 'rock') {
          result = "you lose, rock breaks scissor";
          computer += 1;
      }
  }
  const div = document.createElement('div');
  if (player === 5 || computer === 5) {
      if (player > computer) {
        div.textContent = `You won , the results are your score ${player} to computer score ${computer}`;
        div.style.padding = `10px`;
        body.appendChild(div);
        reset();
      } else if ( computer > player) {
        div.textContent = `you lost , the results  are your score ${player} to computer score ${computer}`;
        div.style.color = `red`;
        div.style.padding = `12px`;
        body.appendChild(div);
        reset();
      }
    }
    
}

function logValue(e) {
    console.log(playround(this.classList.value, getComputerChoice()));
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', logValue));



