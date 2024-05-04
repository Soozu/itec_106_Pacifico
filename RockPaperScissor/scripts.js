let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('player-pick').innerText = playerChoice.toUpperCase();
    document.getElementById('computer-pick').innerText = computerChoice.toUpperCase();
    
    if (playerChoice === computerChoice) {
        showResult('It\'s a TIE');
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
        playerScore++;
        showResult('You Win');
    } else {
        computerScore++;
        showResult('You Lose');
    }

    updateScore();
}

function updateScore() {
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;
}

function showResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.innerText = result;
    if (result === 'You Win') {
        resultElement.style.color = 'green';
    } else if (result === 'You Lose') {
        resultElement.style.color = 'red';
    } else {
        resultElement.style.color = 'black'; // Change text color to black for tie
    }
}
