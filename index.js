const cards = Array.from(document.querySelectorAll('.memory-card'));
const timerElement = document.getElementById('timer');
const finishModal = document.getElementById('finish-modal');
const resultMessage = document.getElementById('result-message');
const retryButton = document.getElementById('retry-button');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard = null;
let secondCard = null;
let matchesFound = 0;
let secondsElapsed = 0;
let gameStarted = false;
let timerInterval = null;

function formatTime(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function startTimer() {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    secondsElapsed += 1;
    timerElement.textContent = formatTime(secondsElapsed);
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function resetTimer() {
  stopTimer();
  secondsElapsed = 0;
  timerElement.textContent = formatTime(secondsElapsed);
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!gameStarted) {
    gameStarted = true;
    startTimer();
  }

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  hasFlippedCard = false;
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  const isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  matchesFound += 1;
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  if (matchesFound === cards.length / 2) {
    finishGame();
    return;
  }

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 900);
}

function finishGame() {
  stopTimer();
  resultMessage.textContent = `¡Felicidades! Completaste el juego en ${formatTime(secondsElapsed)}.`;
  finishModal.classList.remove('hidden');
  resetBoard();
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffleCards() {
  cards.forEach((card) => {
    const randomPosition = Math.floor(Math.random() * cards.length);
    card.style.order = randomPosition;
    card.classList.remove('flip');
    card.removeEventListener('click', flipCard);
    card.addEventListener('click', flipCard);
  });
}

function retryGame() {
  finishModal.classList.add('hidden');
  matchesFound = 0;
  gameStarted = false;
  resetBoard();
  resetTimer();
  shuffleCards();
}

retryButton.addEventListener('click', retryGame);
shuffleCards();