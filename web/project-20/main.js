
let randomNumber = Math.floor(Math.random() * 100);
let tries = 0;

// console.log(randomNumber);

function checkGuess() {
    let guess = document.getElementById('guess').value;
    let message = document.getElementById('message');
    tries++;

    if (guess == randomNumber) {
        message.innerHTML = 'Congratulations! You guessed the correct number in ' + tries + ' attempts!';
    } else if (guess < randomNumber) {
        message.innerHTML = 'Too low! Try again!';
    } else {
        message.innerHTML = 'Too high! Try again!';
    }
    
}