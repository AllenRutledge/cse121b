const key = '3f79cee320msh29aebb39e2b35e9p176c7cjsndd5ecc00589d'
const getRandomWord = async () => {
    const url = 'https://wordsapiv1.p.rapidapi.com/words/?random=true&lettersMax=10';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Use json() instead of text() for JSON response
        console.log(result);
        return result.word; // Assuming you want the word itself
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to handle it in the calling function
    }
};
// Global variables
let word = '';
let tries = 7;
let guesses = [];
// Elements from the HTML
const wordDisplay = document.querySelector('.word');
const triesDisplay = document.querySelector('.tries');
const guessesDisplay = document.querySelector('.guesses');
// Function to initialize a new hangman game
const startNewGame = async () => {
    try {
        word = await getRandomWord();
        tries = 7;
        guesses = [];
        updateDisplay();
    } catch (error) {
        console.error(error);
    }
};
// Function to update the display
const updateDisplay = () => {
    // Check if word is defined
    if (!word) {
        return;
    }
    let updatedDisplay = '';
    for (let char of word.toUpperCase()) {
        // Display spaces, hyphens, apostrophes, and numbers from the beginning
        if (char === ' ' || char === '-' || char === "'" || char === "." || !isNaN(parseInt(char))) {
            updatedDisplay += char + ' ';
        } else {
            if (guesses.includes(char)) {
                updatedDisplay += char + ' ';
            } else {
                updatedDisplay += '_ ';
            }
        }
    }
    wordDisplay.textContent = updatedDisplay.trim();
    triesDisplay.textContent = tries;
    guessesDisplay.textContent = guesses.join(' ');
};
// Function to check if the player has won
const checkWin = () => !wordDisplay.textContent.includes('_');
// Function to handle user guesses
const handleGuess = (letter) => {
    letter = letter.toUpperCase();
    if (!guesses.includes(letter)) {
        guesses.push(letter);
        if (!word.toUpperCase().includes(letter)) {
            tries--;
        }
        updateDisplay();
        // Check for win or lose
        if (checkWin()) {
            alert(`You win! The word was: ${word}`);
            startNewGame();
        } else if (tries === 0) {
            alert(`You lose! The word was: ${word}`);
            startNewGame();
        }
    }
};
// Event listener for keypress
document.addEventListener('keypress', (event) => {
    const key = String.fromCharCode(event.charCode).toUpperCase();
    if (/^[A-Z]$/.test(key)) {
        handleGuess(key);
    }
});
// Start a new game when the page loads
document.addEventListener('DOMContentLoaded', startNewGame);