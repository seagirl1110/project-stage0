const body = document.querySelector('body');

const cards = body.querySelectorAll('[data-js="card"]');

const resultBlock = body.querySelector('[data-js="result-block"]')
const currentScore = resultBlock.querySelector('[data-js="current-score"]');
const resultTable = resultBlock.querySelector('[data-js="result-table"]');

const restart = body.querySelector('[data-js="restart"]')

let hasFlippedCard = false;
let cardsBlocked = false;
let firstCard;
let secondCard;

const cardCount = cards.length;
let flipCardCount = 0;
let stepCount = 0;

shuffle();

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})

restart.addEventListener('click', startGame);

function startGame() {
    resultBlock.classList.remove('result--visible');
    body.style.backgroundColor = '#99CCFF';
    cards.forEach((card) => {
        card.classList.remove('card--flip');
        card.addEventListener('click', flipCard);
    });
    resetCards();
    shuffle();
}

function shuffle() {
    cards.forEach((card) => {
        let numRandom = Math.floor(Math.random() * 30);
        card.style.order = numRandom;
    })
}

function flipCard(evt) {
    if (cardsBlocked) return;
    const elem = evt.currentTarget;
    if (elem === firstCard) return;
    elem.classList.add('card--flip');
    if (!hasFlippedCard) {
        firstCard = elem;
        hasFlippedCard = true;
    } else {
        secondCard = elem;
        hasFlippedCard = false;
        cardsBlocked = true;
        stepCount += 1;
        checkForMatch();
    }
}

function checkForMatch() {
    if (firstCard.dataset.animal === secondCard.dataset.animal) {
        disableCards();
        flipCardCount += 2;
        console.log(flipCardCount);
        if (flipCardCount === cardCount) {
            finishGame();
        }
    } else { unflipCards() }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetCards();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('card--flip');
        secondCard.classList.remove('card--flip');
        resetCards();
    }, 1000)
}

function resetCards() {
    [firstCard, secondCard, cardsBlocked] = [null, null, false];
}

function finishGame() {
    body.style.backgroundColor = '#6699FF';
    resultBlock.classList.add('result--visible');
    currentScore.innerHTML = `Количество ходов, за которое Вы прошли игру: ${stepCount}`;
    getResults();
}

function getResults() {
    let results = JSON.parse(localStorage.getItem('score'));
    if (!Array.isArray(results)) {
        results = [];
    }
    results.push(stepCount);
    localStorage.setItem('score', JSON.stringify(results));
    resultTable.innerHTML = `${results.map((el, index) => `Игрок ${index + 1}: количество шагов - ${el}`).slice(-10).join('<br>')}`;
}