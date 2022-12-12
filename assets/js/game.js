/**
 * Add an event listener to the document and run the main screen with user log-in
 */
document.addEventListener('DOMContentLoaded', function () {
  runMainScreen();
});


/**
 * Set up of game variables to vary display/hide
 */
let mainLoginScreen = document.getElementById("login-screen");
let getInstructions = document.getElementById("myModal");


function runMainScreen () {
  mainLoginScreen.style.display = "block";
  
}

