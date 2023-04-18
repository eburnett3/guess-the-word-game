const guessedLetter = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

button.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    message.innerText = "";

    const goodGuess = validateInput(guess);

    if (goodGuess) {
    
        makeGuess(guess);
    }
    letterInput.value = "";
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]]/;
    if (input.length === 0) {
        message.innerText = "Please, enter a letter";
    } else if (input.lenth > 1) {
        message.innerText = "Only enter one letter at a time";
    }   else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z";
    } else {
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You have already guessed that letter. Try again.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
}

console.log(goodGuess);