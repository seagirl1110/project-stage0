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

startGame();

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
    flipCardCount = 0;
    stepCount = 0;
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
        if (flipCardCount === cardCount) {
            setTimeout(() => finishGame(), 300)
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
    [firstCard, secondCard, cardsBlocked, hasFlippedCard] = [null, null, false, false];
}
function finishGame() {
    body.style.backgroundColor = '#6699FF';
    const gamerName = prompt('Введите ваше имя');
    const currentGamer = {};
    currentGamer[gamerName] = stepCount;
    resultBlock.classList.add('result--visible');
    currentScore.innerHTML = `Количество ходов, за которое Вы прошли игру: ${stepCount}`;
    getResults(currentGamer);
}

function getResults(gamer) {
    let results = JSON.parse(localStorage.getItem('score'));
    if (!Array.isArray(results)) {
        results = [];
    }
    results.push(gamer);
    localStorage.setItem('score', JSON.stringify(results));
    resultTable.innerHTML = `${results.sort((a, b) => Object.values(a) - Object.values(b)).map((el) => {
        return el === gamer ? `<li class="gamers__gamer gamers__gamer--current">${Object.keys(el)}: количество шагов - ${Object.values(el)}</li>` : `<li class="gamers__gamer">${Object.keys(el)}: количество шагов - ${Object.values(el)}</li>`
    })
    .slice(-10).join('')}`;
}