//global variables

var wordOptions = ["Pretty In Pink", "Jaws", "Fight Club", "Breakfast Club", "The Sixth Sense", "Casablanca", "Vertigo", "The Birds", "The Godfather", "Psyco"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksandSuccesses = [];
var wrongLetters = [];
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//functions
function startGame(){
  selectedWord=wordOptions[Math.floor(Math.random()*wordOptions.length)];
  lettersinWord = selectedWord.split('');
  numBlanks = lettersinWord.length;

  // reset
  guessesLeft = 9;
  wrongLetters = [];
  blanksandSuccesses = [];

  // populate blanks and successes with the right number of blanks.
  for(var i=0; i<numBlanks; i++){
    blanksandSuccesses.push("_");
  }
//change html to reflct round contitions
document.getElementById('wordToGuess').innerHTML = blanksandSuccesses.join("  ");
document.getElementById('numGuesses').innerHTML= guessesLeft;
document.getElementById('winCounter').innerHTML= winCount;
document.getElementById('lossCounter').innerHTML= lossCount;


  console.log(selectedWord);
  console.log(lettersinWord);
  console.log(numBlanks);
  console.log(blanksandSuccesses);

}
function checkLetters(letter){

  var isLetterInWord = false;
  for(var i = 0; i<numBlanks; i++){
    if(selectedWord[i] == letter){
      isLetterInWord = true;

    }
  }
  if(isLetterInWord){
  for(var i = 0; i<numBlanks; i++){
    if(selectedWord[i] == letter){
      blanksandSuccesses[i] = letter;
    }
    }
  }
  else{
    wrongLetters.push(letter);
    guessesLeft--;
  }
    console.log(blanksandSuccesses);


}

function roundComplete(){

  console.log("Win Count: "+ winCount + " | lossCount: " + lossCount + " | guessesLeft: " + guessesLeft);

  document.getElementById('numGuesses').innerHTML = guessesLeft;
  document.getElementById('wordToGuess').innerHTML = blanksandSuccesses.join(" ");
  document.getElementById('letGuesses').innerHTML = wrongLetters.join(' ');


  if(lettersinWord.toString() == blanksandSuccesses.toString()){
    winCount++;
    alert("you Won");

    document.getElementById('winCounter').innerHTML = winCount;
    startGame();
  }
    else if (guessesLeft == 0){
      lossCount++;
      alert("you lost!")
      document.getElementById('lossCounter').innerHTML = lossCount;
      startGame();
    }

}

//main process

startGame();
//register key clicks
document.onkeyup = function(event){
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(letterGuessed);
  checkLetters(letterGuessed);
  roundComplete();
}
