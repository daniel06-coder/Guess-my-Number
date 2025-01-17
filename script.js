'use strict';

// console.log( document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'corect number';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// console.log(document.querySelector('.guess').value = '200');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click', function ( ){
   const guess = Number(document.querySelector('.guess').value);
   console.log(typeof guess , guess);
  
//when there is no input
   if (!guess) {
    document.querySelector('.message').textContent = 'no number bro';

// when a player wins
   } else if (guess === secretNumber){
    document.querySelector('.message').textContent = 'CORRECT NUMBER ';

    document.querySelector('.number').textContent = secretNumber;

    // score++;
    // document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if(score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    } 


    //when it goes too high
   } else if (guess > secretNumber){
     if (score > 1) {
       document.querySelector('.message').textContent = 'Too high';
       score--;
       document.querySelector('.score').textContent = score;
       document.querySelector('body').style.backgroundColor =
         'rgb(243, 131, 26)';
     } else {
       document.querySelector('.message').textContent = 'You lost the game';
       document.querySelector('.score').textContent = 0;
       document.querySelector('body').style.backgroundColor = 'rgb(172, 0, 0)';
     }
   }
    //when it goes too low   
   else if(guess < secretNumber){
    if (score > 1){
         document.querySelector('.message').textContent = 'Too low';
         score--;
         document.querySelector('.score').textContent = score;
          document.querySelector('body').style.backgroundColor = 'rgb(243, 131, 26)';
    }else{
       document.querySelector('.message').textContent = 'You lost the game';
       document.querySelector('.score').textContent = 0; 
        document.querySelector('body').style.backgroundColor = 'rgb(172, 0, 0)';
    }
   }
})


document.querySelector('.again').addEventListener('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.guess').value = '';
       


     
 
})

// score = 20;
// document.querySelector('.message').textContent = 'Start guessing...';
// document.querySelector('.score').textContent = score;
// document.querySelector('.number').textContent = '?';
// document.querySelector('.guess').value = '';
// document.querySelector('body').style.backgroundColor = '#2196F3';
// document.querySelector('.number').style.width = '15rem';