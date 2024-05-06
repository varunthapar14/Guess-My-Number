'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🫡';//this can change the value in real time 
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
// document.querySelector('.label-score').textContent = 10;

//to get the input feild in html we use value property
document.querySelector('.input-number').value = 20;
console.log(document.querySelector('.input-number').value);
*/
//outside because we want to initialize the surprise number only once
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
// document.querySelector('.number').textContent = secretNumber;
//handling click values
document.querySelector('.check').addEventListener('click', function () {//event handler
    const guess = Number(document.querySelector('.input-number').value);

    //when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = 'No Number😒';
        displayMessage('No Number😒');
    }
    //when player wins
    else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Guess💯💯';
        displayMessage('Correct Guess💯');
        // //as we are seleccting an element so we dont use dot like 
        // //we did previously and there is only one body
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        //checking for highscore
        if (score > highScore) {
            highScore = score;
            document.querySelector('.high-score').textContent = highScore;
        }
    }
    //refactoring our code
    else if (guess !== secretNumber) {
        if (score > 1) {
            //document.querySelector('.message').textContent = guess > secretNumber ? 'Too high📈' : 'Too Low📉';
            displayMessage(guess > secretNumber ? 'Too high📈' : 'Too Low📉');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            // document.querySelector('.message').textContent = 'You lost the game😂'
            displayMessage('You lost thr game😂');
            document.querySelector('.score').textContent = '0';
        }
    }
});
//     //guess is too high
//     else if (guess > secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = 'Too high📈';
//         score--;
//         document.querySelector('.score').textContent = score;
//     }
//     else {
//         document.querySelector('.message').textContent = 'You lost the game😂'
//         document.querySelector('.score').textContent = '0';
//     }
// }
// //guess is too low
// else if (guess < secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = 'Too Low📉';
//         score--;
//         document.querySelector('.score').textContent = score;
//     }
//     else {
//         document.querySelector('.message').textContent = 'You lost the game😂'
//         document.querySelector('.score').textContent = '0';
//     }
// }
// })

document.querySelector('.again').addEventListener('click', function () {
    score = 20;

    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start Guessing....';
    displayMessage('Start Guessing.....');

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';

    document.querySelector('.input-number').value = '';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';


});