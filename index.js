//Activate strict mode
'use strict';

//HTML elements to be used for interation
let message = document.querySelector('.message');
let check = document.querySelector('.check');
let number = document.querySelector('.number');
let randomNumber = document.querySelector('.randomNumber');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highScore');
let root = document.querySelector('.root');
let resetGame = document.querySelector('.resetGame');


//This expression returns a random number when the check button is clicked
let randomNum;
let scor = 20;
let hScore = 0;

//This code listens to the click event and performs some instruction using the checkNumber method
check.addEventListener('click', checkNumber);
resetGame.addEventListener('click', reset);

//This function compare the user input and random number for a match
//It also help with updating score, guess number, message display and highscore
function checkNumber() {
    randomNum = (Math.random() * 21).toFixed(0);
    randomNumber.textContent = `${randomNum}`;
   let num = Number(number.value);
  
   
   if(!num){
       message.textContent = `🛑 No Number!`;
   }
   else if(num < 0 || num > 20){
      message.textContent = `⚠ Guess a number between 0 and 20`;
   }
   else{
    scor --;
   if(num === randomNum){
       root.style.background = 'green';
       number.style.background = 'green';
       number.style.color = '#eee';
       message.textContent = `🎉 Correct number!`;
       scor > hScore ? highScore.textContent = `🏅 Highscore: ${scor}` : highScore.textContent = `🏅 Highscore: ${hScore}`;
   }
  
   else if(num < randomNum){
        root.style.background = 'black';
        if(scor > 0) {
        message.textContent = `📉 Too low!`;
        score.textContent = `💯 Score: ${scor}`;
        } else{
        scor = 0;
        message.textContent = `🎇 You lost the game!`;
        score.textContent = `💯 Score: ${scor}`;
       }
   }else{
       root.style.background = 'black';
       if(scor > 0) {
        message.textContent = `📈 Too high!`;
        score.textContent = `💯 Score: ${scor}`;
        } else{
        scor = 0;
        message.textContent = `🎇 You lost the game!`;
        score.textContent = `💯 Score: ${scor}`;
       }
   }}
}

//This function helps us to reset the game
function reset(){
    location.reload();
}