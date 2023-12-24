let computer_score = 0;
let player_score = 0;
let Round_winner = '';
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection){
      Round_winner = "It's a tie";
    }
    else if (computerSelection == 'paper'){
      computer_score++;
      Round_winner = "computer";
    }
    else if (computerSelection == 'scissors'){
      player_score++;
      Round_winner = "player";
    }
  }
function getComputerChoice(){
    let arr = ['rock', 'paper', 'scissors'];
    return(arr[(Math.floor(Math.random() * arr.length))]);
}
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
  }
  if (computer_score > player_score){
    console.log("Computer wins");
  }
  else if (player_score > computer_score){
    console.log("Player Wins");
  }
  else {
    console.log("It's a tie!");
  }
}

game();