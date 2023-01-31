let playBtn = document.getElementById("ply-button");
let introScreen = document.querySelector(".intro");
let errorMessage = document.getElementById("error-message");
const options = document.querySelectorAll(".selections button");
const playerImage = document.querySelector(".player-image");
const computerImage = document.querySelector(".computer-image");
const computerOptions = ["rock", "paper", "scissors"];
let displayResult = document.querySelector(".results");
let getInstructions = document.getElementById("instructions-btn");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let pScore = 0;
let cScore = 0;

/**
 * Verification of the user name input on the log-in screen */
 
document.getElementById("log-user").addEventListener("click", checkUsername);

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


/**
 * Reset score and remove disable attribute 
 * play again
 */ 
function gameRestart() {
  let playerScore = document.getElementById("player-score");
  let computerScore = document.getElementById("computer-score");
  let winModal = document.getElementById("gameWinModal");
  let loseModal = document.getElementById("gameLoseModal");
  pScore = 0;
  cScore = 0;
  
  rock.removeAttribute("disabled", "disabled");
  paper.removeAttribute("disabled", "disabled");
  scissors.removeAttribute("disabled", "disabled")
  
  winModal.classList.remove("show-modal");
  loseModal.classList.remove("show-modal");
  playerScore.innerText = 0;
  computerScore.innerText = 0;
}

/**
 * Input of username using by pressing enter key
 */
document.getElementById("user").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
      checkUsername();
  }
});

getInstructions.addEventListener("click", showInstructions);

function showInstructions() {
    let modal = document.getElementById("myModal");
    modal.classList.add("show-modal");
}

function closeInstructions() {
    let modal = document.getElementById("myModal");
    modal.classList.remove("show-modal");    
}

playBtn.addEventListener("click", getLogin);

function getLogin() {
    let modal = document.getElementById("loginModal");
    modal.classList.add("show-modal");
    errorMessage.style.display = "none"
}

/**Show game over menu modal when when max points are met  */

function gameWin() {
  let modal = document.getElementById("gameWinModal");
  modal.classList.add("show-modal");
}

function gameLose() {
  let modal = document.getElementById("gameLoseModal");
  modal.classList.add("show-modal");
}

/**function to fade out intro page 
 * Fade in game page
 */
function gameIntro() {
  
  playBtn.addEventListener("click", function () {
    introScreen.classList.add("fadeOut");
  }); 
}

/**
 * Run game function 
 * add eventlistener to all buttons through for loop method
 * return player selection image
 * return computer random selection image
 * 
 */
function runGame() {
  
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () {
      let computerNumber = Math.floor(Math.random() * 3);
      let computerSelection = computerOptions[computerNumber];
      checkWinner(this.id, computerSelection);
      playerImage.src = `assets/images/${this.id}.png`;
      computerImage.src = `assets/images/${computerSelection}.png`;
    });
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
    pScore = 0;
    cScore = 0;
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
    pScore = 0;
    cScore = 0;
  }
}

/**Game over function
 * Prevent actions when selections are clicked
 */
function gameOver() {
  
  rock.setAttribute("disabled", "disabled");
  paper.setAttribute("disabled", "disabled");
  scissors.setAttribute("disabled", "disabled");
}

/**Call Inner functions */
gameIntro();
runGame();
winGame();
loseGame();

