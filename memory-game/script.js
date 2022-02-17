const body = document.querySelector('body');
const resultBlock = body.querySelector('[data-js="result-block"]')
const score = resultBlock.querySelector('[data-js="score"]');

const cards = body.querySelectorAll('[data-js="card"]');

let hasFlippedCard = false;
let cardsBlocked = false;
let firstCard;
let secondCard;

const cardCount = 6;
let flipCardCount = 0;
let stepCount = 0;

shuffle();

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})

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
    score.innerHTML = `Количество ходов, за которое Вы прошли игру: ${stepCount}`;
}