const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'YOU WON';
const RESULT_COMPUTER_WIN = 'YOU LOSE';

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS} ?`, '').toUpperCase();
    if (selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS) {
        alert(`Invalid choice ! We chose ${ROCK} for you !`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}

const getComputerChoice = () => {
    const randomValue = Math.random();
    if(randomValue < 0.34) {
        return ROCK
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (
        cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK)
    {
        return RESULT_PLAYER_WIN;
    } else {
        return RESULT_COMPUTER_WIN;
    }
}

startGameBtn.addEventListener('click', function() {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    let winner;
    if (playerSelection) {
        winner = getWinner(computerSelection, playerSelection);
    } else {
        winner = getWinner(computerSelection);
    }
    let message = `You picked ${playerSelection ? playerSelection : DEFAULT_USER_CHOICE}, computer picked ${computerSelection}, therefore you `;
    if (winner === RESULT_DRAW) {
        message = message + `had a draw.`
    } else if (winner === RESULT_PLAYER_WIN) {
        message = message + `won.`
    } else {
        message = message + `lost.`
    }
    alert(message);
    gameIsRunning = false;
});

const sumUp;