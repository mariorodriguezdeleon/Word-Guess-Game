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
    
let yourGuesses = "";

let guessesLeft = 0;

// FUNCTIONS ======================================================

    //randomizes a word to guess and creates a char array of the word
function generateRandomGameName () {

    let indexOfRandomGame = Math.floor(Math.random() * gameList.length); //randomly generate the index of the word to guess

//    console.log(indexOfRandomGame); //print index to console for troubleshooting
    
    gameToGuess = gameList[indexOfRandomGame].split(''); //retrieve the game name and parse the string into an array

    // console.log(gameToGuess); //print array to troubleshoot parsing
}
    
    //sets stage of the game
function setStage() {
    //set stage code here
}
    
    //helper function to troubleshoot game
function printCharArray() {
    
    //helper function to iterate over array for troubleshooting
     for ( let i = 0; i < gameToGuess.length; i++){
         console.log(gameToGuess[i]);
     };
    
    console.log(gameToGuess);
    
}

// FUNCTION CALLS =================================================

generateRandomGameName(); //call the function to set random word to guess
    
printCharArray();

// MAIN ===========================================================   
document.onkeyup = function(event) {
    
    let userInput = event.key.toLowerCase();
    
    
    
}
    
})();