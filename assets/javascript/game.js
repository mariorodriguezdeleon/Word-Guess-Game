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
    
    COUNTER
    //helper function to iterate over array for troubleshooting
     for ( let i = 0; i < gameToGuess.length; i++){
         console.log(gameToGuess[i]);
     };
    
    console.log(gameToGuess);
    
}
    
function checkGuess(guess){
    
    gameToGuess.forEach(function(char, i){
        
        if (char === guess) {
            //iterate over array and find the index of the key pressed, potentially many
            //if found update the correct space in the stage
            //if not update the guesses and guesses left
            wordPlaceHolder [i] = guess;  
        }  
    })
    console.log(wordPlaceHolder);   
}
    
//function updateBlanks() {
//    //add logic to update blanks if the guesses are correct.  Do this 
//    //by iterating over the wordPlaceHolder array if a letter is valid
//    for (let i = 0; i < gameToGuess.length; i++) {
//        wordPlaceHolder[i] = ;
//    }
//    
//    wordBlanksEle.textContent = wordPlaceHolder.join(' ');
//}


// FUNCTION CALLS =================================================

generateRandomGameName(); //call the function to set random word to guess
    
printCharArray();
    
setStage();

// MAIN ===========================================================   
document.onkeydown = function(e) {
    
   checkGuess(e.key.toLowerCase());
       
}
    
})();