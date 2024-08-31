let timeLeft = 15;
let timerInterval;
let correctWord = 'exchange'; // The correct word to guess

document.getElementById('refreshButton').addEventListener('click', refreshWord);
document.getElementById('checkButton').addEventListener('click', checkWord);

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timeLeft').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('message').textContent = "Time's up! The word was " + correctWord;
        }
    }, 1000);
}

function refreshWord() {
    const words = ['exchange', 'trade', 'market', 'commerce'];
    correctWord = words[Math.floor(Math.random() * words.length)];
    const scrambled = correctWord.split('').sort(() => 0.5 - Math.random()).join(' ');
    document.getElementById('scrambledWord').textContent = scrambled;

    // Reset the timer
    timeLeft = 15;
    document.getElementById('timeLeft').textContent = timeLeft;
    clearInterval(timerInterval);
    startTimer();
    document.getElementById('message').textContent = ""; // Clear any previous messages
}

function checkWord() {
    const userInput = document.getElementById('userInput').value.trim();
    if (userInput.toLowerCase() === correctWord) {
        alert("Correct! You guessed the word!");
        clearInterval(timerInterval);
        document.getElementById('message').textContent = "Well done!";
    } else {
        document.getElementById('message').textContent = "Incorrect! Try again.";
    }
}

// Start the game with the first word
refreshWord();
