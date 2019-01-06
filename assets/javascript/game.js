(function(){
"use strict";

// VARIABLES ======================================================
    
    //list of games
let gameList = ["pac man", "galaga", 
                "centipede", "frogger", 
                "donkey kong", "dig dug", 
                "tempest", "q*bert", 
                "joust", "mario bros.", 
                "tapper"];

let gameToGuess = [];
    
let wins = 0;
    
let losses = 0;
    
let playerGuesses = [];

let guessesLeft = 0;
    
let wordBlanksEle = document.getElementById('lettersToGuess');
    
let wordPlaceHolder = [];
    
let COUNTER = {
    
    //ADD YOUR COUNTERS HERE!!
    
}

// FUNCTIONS ======================================================

    //randomizes a word to guess and creates a char array of the word
function generateRandomGameName () {

    let indexOfRandomGame = Math.floor(Math.random() * gameList.length); //randomly generate the index of the word to guess

//    console.log(indexOfRandomGame); //print index to console for troubleshooting
    
    gameToGuess = gameList[indexOfRandomGame].split(''); //retrieve the game name and parse the string into an array

    // console.log(gameToGuess); //print array to troubleshoot parsing
}
    
function setStage() {
    //set stage code here
    for (let i = 0; i < gameToGuess.length; i++) {
        wordPlaceHolder[i] = ' _ ';
    }
    
    wordBlanksEle.textContent = wordPlaceHolder.join(' ');
}
    
    //helper function to troubleshoot game
function printCharArray() {
    
    //helper function to iterate over array for troubleshooting
     for ( let i = 0; i < gameToGuess.length; i++){
         console.log(gameToGuess[i]);
     };
    
    console.log(gameToGuess);
    
}
    
function checkGuess(guess){
    
    // add function to check if the player still has guesses left======
    
    // update Counters as required ====
    
    gameToGuess.forEach(function(char, i){
        
        if (char === guess) {
            //iterate over array and find the index of the key pressed, potentially many
            //if found update the correct space in the stage
            //if not update the guesses and guesses left
            wordPlaceHolder [i] = guess;  
        }  
        
        document.getElementById('lettersToGuess').textContent = wordPlaceHolder.join('');
        
        //check to see if the wordPlaceHolder === wordToGuess - if it does the player wins
        //triggerwin();
        
        // decrement guessesLeft
    })
    console.log(wordPlaceHolder);   
}
        
// Display Win
function triggerWin() {
  document.getElementById('game-won').classList.remove('hide');
}
// Display loss.
function triggerLoss() {
  document.getElementById('game-lose').classList.remove('hide');  
}
    
function isValid(guess) {
    //add regex to validate user input
    return /^[A-Za-z]$/.test(guess);
}


// FUNCTION CALLS =================================================

generateRandomGameName(); //call the function to set random word to guess
    
printCharArray();
    
setStage();

// MAIN ===========================================================   
document.onkeydown = function(e) {
    
    if (isValid(e.key)) {
        
        checkGuess(e.key.toLowerCase()); //could remove toLowerCase after validation
        
    }
}
    
})();