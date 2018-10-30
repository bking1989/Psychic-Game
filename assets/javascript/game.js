window.onload = function(e) {
    // Define global variables used below

    //Array for possible letters
    var possibleLetters = [];

    //Use for loop to fill array with all letters
    for (var i = 65; i < 91; i++) {
        possibleLetters.push(String.fromCharCode(i).toLocaleLowerCase());
    }

    //Get a random number between 1 and 26
    var randomNumber = Math.ceil(Math.random() * 26); 

    //Choose a random letter using said random number
    var chosenLetter = possibleLetters[randomNumber];

    //Define the win counter that will keep track
    var totalWins = document.getElementById("totalWins");
    var winCounter = 0;
    totalWins.innerHTML += winCounter;

    //Define the lose counter that will keep track
    var totalLosses = document.getElementById("totalLosses");
    var loseCounter = 0;
    totalLosses.innerHTML += loseCounter;

    //Define how many guesses left and make it keep track
    var rmGuesses = document.getElementById("rmGuesses");
    var guessCounter = 20;
    rmGuesses.innerHTML += guessCounter;

    //Define a way for the game to talk to the player

    var cpuResponse = document.getElementById("cpuResponse");

    //Actual game function begins here, with user keypress

    document.onkeyup = function(event) {
        //Record user input
        var userChoice = event.key.toLocaleLowerCase();

        //Compare the user input to the randomized character
        if (guessCounter < 1) { //If the guesses run out, they get game over
            cpuResponse.innerHTML = "Sorry, you ran out of tries! Game over!"
        } else if (userChoice == chosenLetter) { //If they get it right, game resets
            winCounter++;
            totalWins.innerHTML = "Wins: " + winCounter;
            cpuResponse.innerHTML = "You guessed it! Congratulations! Play again?"
            var randomNumber = Math.ceil(Math.random() * 26);
            chosenLetter = possibleLetters[randomNumber]; 
            guessCounter = 20;
            rmGuesses.innerHTML = "Guesses Left: " + guessCounter;
        } else if (userChoice !== chosenLetter) { //If they get it wrong, guesses drop by one
            guessCounter--;
            rmGuesses.innerHTML = "Guesses Left: " + guessCounter;
            loseCounter++;
            totalLosses.innerHTML = "Losses: " + loseCounter;
            cpuResponse.innerHTML = "Nope, that wasn't it! Try again!"
        }
    }
}