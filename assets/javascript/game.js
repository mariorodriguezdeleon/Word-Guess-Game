(function(){
    
    
})();
"use strict";

// VARIABLES ======================================================
    
//list of games
let gameList = ["pac man", "galaga", 
                "centipede", "frogger", 
                "donkey kong", "dig dug", 
                "tempest", "q bert", 
                "joust", "mario bros", 
                "tapper"];
let gameToGuess = [];
let playerGuesses = [];
let wordPlaceHolder = [];
    
let wins = 0;
let losses = 0;
let guessesLeft = 10;

let COUNTER = {
    
    //ADD YOUR COUNTERS HERE!!
    
}

let wordBlanksEle = document.getElementById('lettersToGuess');

// FUNCTIONS ======================================================

//randomizes a word to guess and creates a char array of the word
function generateRandomGameName () {

    let indexOfRandomGame = Math.floor(Math.random() * gameList.length); //randomly generate the index of the word to guess

//    console.log(indexOfRandomGame); //print index to console for troubleshooting
    
    gameToGuess = gameList[indexOfRandomGame].split(''); //retrieve the game name and parse the string into an array

    // console.log(gameToGuess); //print array to troubleshoot parsing
}
    
function setStage() {
    
    for (let i = 0; i < gameToGuess.length; i++) {

        if ( gameToGuess[i] === ' ' ) {
            
            wordPlaceHolder[i] = ' ';
            
        } else {
            wordPlaceHolder[i] = '_ ';
        }
    }
    
    wordBlanksEle.textContent = wordPlaceHolder.join('');
    
    document.getElementById("guesses-left").textContent = guessesLeft;
}
    
function checkGuess(guess) {
    
    // add check to see if player still has guesses left
    if (guessesLeft === 0 ){
        triggerLoss();
        return;
    }
    
    // update Counters as required
    playerGuesses.push(guess);
    
    gameToGuess.forEach(function(char, i){
        
        if (char === guess) {
            wordPlaceHolder [i] = guess;  
        }  
        
        document.getElementById('lettersToGuess').textContent = wordPlaceHolder.join('');
        
        //check to see if the wordPlaceHolder === wordToGuess - if it does the player wins
        //triggerwin();
        
        // decrement guessesLeft
    })
    
    console.log(wordPlaceHolder);   
}
    
// Input validation
function isValid(guess) {
    //add regex to validate user input
    return /^[A-Za-z]$/.test(guess);
}
    
// Display Win
function triggerWin() {
  document.getElementById('game-won').classList.remove('hide');
}
    
// Display loss.
function triggerLoss() {
  document.getElementById('game-lose').classList.remove('hide');  
}
    
//helper function to troubleshoot game
function printCharArray() {
    
    //helper function to iterate over array for troubleshooting
     for ( let i = 0; i < gameToGuess.length; i++){
         console.log(gameToGuess[i]);
     };
    
    console.log(gameToGuess);  
}

// FUNCTION CALLS TO INITIALIZE GAME ==============================

generateRandomGameName(); //call the function to set random word to guess
    
printCharArray();
    
setStage(); //call function to set the stage

// MAIN ===========================================================  
    
document.onkeydown = function(e) {
    
    if (isValid(e.key)) {
        
        checkGuess(e.key.toLowerCase()); //could remove toLowerCase after validation
        
    }
}