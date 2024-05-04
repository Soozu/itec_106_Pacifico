function startGame() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 0;
    let userGuess = null;

    while (userGuess !== randomNumber) {
        userGuess = prompt("Guess a number between 1 and 10:");

        
        if (userGuess === null) {
            alert("Game Over. Thanks for playing!");
            return; 
        }

        userGuess = parseInt(userGuess);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            alert("Invalid input: Please input a number between 1 - 10.");
        } else {
            attempts++;

            if (userGuess === randomNumber) {
                alert(`Congratulations! You've guessed the right number ${randomNumber} in ${attempts} attempts.`);
                return; 
            } else if (userGuess > randomNumber) {
                alert("Your guess is too high. Try again!");
            } else {
                alert("Your guess is too low. Try again!");
            }
        }
    }
}
