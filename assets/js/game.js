let playBtn = document.getElementById("ply-button");
let introScreen = document.querySelector(".intro");
const loginScreen = document.getElementById("login-screen");
let errorMessage = document.getElementById("error-message");
const restartPlay = document.getElementById("ply-again");
const gameReset = document.getElementById("modal-go")
let game = document.querySelectorAll(".game");
const options = document.querySelectorAll(".selections button");
const playerImage = document.querySelector(".player-image");
const computerImage = document.querySelector(".computer-image");
const computerOptions = ["rock", "paper", "scissors"];
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let displayResult = document.querySelector(".results");
let restartScreen = document.querySelector(".restart-game");
let resetBtn = document.querySelectorAll(".restart-game button");
let getInstructions = document.getElementById("instructions-icon");
const loadGame =document.getElementById("play-game")
let pScore = 0;
let cScore = 0;



/**
 * Verification of the user name input on the log-in screen */
 
document.getElementById("user-log").addEventListener("click", checkUsername);

function checkUsername() {
    let username = document.getElementById("user").value.trim();
    let game = document.querySelector(".game");
    let modal = document.getElementById("loginModal");

    if (username.length >= 1 && username.length <= 12) {
    game.classList.add("fadeIn");
    modal.classList.remove("show-modal");

    } else {
        errorMessage.style.display = "block";
        document.getElementById("user").focus();
        document.getElementById("user").value = "";
    }
}

getInstructions.addEventListener("click", showInstructions);

function showInstructions() {
    let modal = document.getElementById("myModal");
    modal.classList.add("show-modal");
    document.body.classList.add('greyout-background'); //grey out the background picture when modal pops-up.
}

function closeInstructions() {
    let modal = document.getElementById("myModal");
    modal.classList.remove("show-modal");
    document.body.classList.remove('greyout-background');
    
}

playBtn.addEventListener("click", getLogin);

function getLogin() {
    let modal = document.getElementById("loginModal");
    modal.classList.add("show-modal");
    errorMessage.style.display = "none"
    document.body.classList.add('greyout-background'); //grey out the background picture when modal pops-up.
}



/**Show game over menu modal when when max points are met  */

function gameWin() {
  let modal = document.getElementById("gameWinModal");
  modal.classList.add("show-modal");
  document.body.classList.add('greyout-background'); //grey out the background picture when modal pops-up.
}

function gameLose() {
  let modal = document.getElementById("gameLoseModal");
  modal.classList.add("show-modal");
  document.body.classList.add('greyout-background'); //grey out the background picture when modal pops-up.
}

function closeGameOverMenu() {
  let modal = document.getElementById("gameOverModal");
  let playBtn = document.getElementById("ply-button");
  let introScreen = document.querySelector(".intro");
  let game = document.querySelector(".game");

  playBtn.addEventListener("click", function () {
    introScreen.classList.add("fadeOut");
    game.classList.add("fadeIn");

  });

  modal.classList.remove("show-modal");
  
  document.body.classList.remove('greyout-background');
};


/**function to fade out intro page 
 * Fade in game page
 */
function gameIntro() {
  let playBtn = document.getElementById("ply-button");
  let introScreen = document.querySelector(".intro");
  

  playBtn.addEventListener("click", function () {
    introScreen.classList.add("fadeOut");
    login.classList.add("fadeIn");
  });
  
};
/**
 * Run game function 
 * add eventlistener to all buttons through for loop method
 * return player selection image
 * return computer random selection image
 * 
 */
function runGame() {
  const options = document.querySelectorAll(".selections button");
  const playerImage = document.querySelector(".player-image");
  const computerImage = document.querySelector(".computer-image");
  const computerOptions = ["rock", "paper", "scissors"];

  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () {
      let computerNumber = Math.floor(Math.random() * 3);
      let computerSelection = computerOptions[computerNumber];
      checkWinner(this.id, computerSelection);
      playerImage.src = `assets/images/${this.id}.png`;
      console.log(this.id)
      computerImage.src = `assets/images/${computerSelection}.png`;
    })
  }
}
/**Incerement score results */
function scoreResults() {
  let playerScore = document.getElementById("player-score");
  let computerScore = document.getElementById("computer-score");
  playerScore.innerText = pScore;
  computerScore.innerText = cScore;
}
/**
 * Determine rock, paper and scissors selection comparasion
 * Display result mesaage win, lose or draw
 * Increment scores
 * Call score result function
 * Call game winner function
 * Call game loser function
 */
function checkWinner(playerSelection, computerSelection) {
  let displayResult = document.querySelector(".results");
  if (playerSelection === computerSelection) {
    displayResult.textContent = "Draw";
    return;
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    displayResult.textContent = "Youu Wins!!";
    pScore++;
    scoreResults();
    winGame();
    loseGame();
    return;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    displayResult.textContent = "You lose!";
    cScore++;
    scoreResults();
    winGame();
    loseGame();
    return;
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    displayResult.textContent = "You lose!";
    cScore++;
    scoreResults();
    winGame();
    loseGame();
    return;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    displayResult.textContent = "Youu Win!!";
    pScore++;
    scoreResults();
    winGame();
    loseGame();
    return;
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    displayResult.textContent = "You lose!";
    cScore++;
    scoreResults();
    winGame();
    loseGame();
    return;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    displayResult.textContent = "Youu Win!!";
    pScore++;
    scoreResults();
    winGame();
    loseGame();
    return;
  }
}
/**Win game function
 * Stop click selection at max pscore value
 * Fade out match screen and fade in restart screen
 */
function winGame() {
  if (pScore === 12) {
    gameOver();
    gameWin();
  }
}

/**lose game function
 * Stop click selection at max cscore value
 * Fade out match screen and fade in restart screen
 */
function loseGame() {
  if (cScore === 12) {
    gameOver();
    gameLose();
  }
}
/**Game over function
 * Prevent actions when selections are clicked
 */
function gameOver() {
  let rock = document.getElementById("rock");
  let paper = document.getElementById("paper");
  let scissors = document.getElementById("scissors");

  rock.setAttribute("disabled", "disabled");
  paper.setAttribute("disabled", "disabled");
  scissors.setAttribute("disabled", "disabled");

}


function playAgain() {
  let modal = document.getElementById("gameWinModal");
  let modalLose = document.getElementById("gameLoseModal");
  const loginScreen = document.getElementById("login-screen");
  const removeGame = document.getElementById("game-remove")
  let rock = document.getElementById("rock");
  let paper = document.getElementById("paper");
  let scissors = document.getElementById("scissors");

  rock.removeAttribute("disabled", "disabled");
  paper.removeAttribute("disabled", "disabled");
  scissors.removeAttribute("disabled", "disabled");
  
  pScore = 0;
  cScore = 0;
  modal.classList.remove("show-modal");
  modalLose.classList.remove("show-modal");
  introScreen.classList.add("fadeIn");
  removeGame.style.display = "none";


  
} 

function main() {
  /**Call Inner functions */
  gameIntro();
  runGame();
  winGame();
  loseGame();
  
}

/**Call Inner functions */

gameIntro();
runGame();
winGame();
loseGame();

