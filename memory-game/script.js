const cards = document.querySelectorAll('[data-js="card"]');
let hasFlippedCard = false;
let firstCard;
let secondCard;

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})

function flipCard(evt) {
    const elem = evt.currentTarget;
    elem.classList.add('card--flip');
    if (!hasFlippedCard) {
        firstCard = elem;
        hasFlippedCard = true;
    } else {
        secondCard = elem;
        hasFlippedCard = false;
        checkForMatch();
    }
}

function checkForMatch() {
    if (firstCard.dataset.animal === secondCard.dataset.animal) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('card--flip');
        secondCard.classList.remove('card--flip');
    }, 1500)
}