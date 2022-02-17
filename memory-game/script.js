const cards = document.querySelectorAll('[data-js="card"]');
let hasFlippedCard = false;
let cardsBlocked = false;
let firstCard;
let secondCard;

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})

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
        checkForMatch();
    }
}

function checkForMatch() {
    firstCard.dataset.animal === secondCard.dataset.animal ? disableCards() : unflipCards()
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