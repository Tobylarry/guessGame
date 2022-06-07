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
    
    randomNum = (Math.random() * 21).toFixed(0); // generate random number and fix to two decimal places
    randomNumber.textContent = `${Number(randomNum)}`; //convert to number
    let num = Number(number.value); // get number value
  
   if(!num){
       message.textContent = `🛑 No Number!`;
   }
   
   // Perform some operations if user input  == random number
   if(num == randomNum){
       scor > hScore ? hScore = scor : hScore = hScore;
       let maxx = hScore;
       root.style.background = 'green';
       number.style.background = 'green';
       number.style.color = '#eee';
       message.textContent = `🎉 Correct number!`;
       highScore.textContent = `🏅 High score: ${maxx}`;
       score.textContent = `💯 Score: ${scor}`;
   }
   else{
       scor--;
       //Help alternate if number is low or high and set display accordingly
        if(scor > 0) message.textContent = num > randomNum ? `📈 Too high!` : `📉 Too low!`;
        else{
        scor = 0;
        message.textContent = `🎇 You lost the game!`; 
       }
       //This line of codes helps to display score, change background color of body and user input
       score.textContent = `💯 Score: ${scor}`;
       root.style.background = '#222';
       number.style.background = '#222';
   }
   }


//This function helps us to reset the game
function reset(){
    location.reload();
}
