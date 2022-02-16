const cards = document.querySelectorAll('[data-js="card"]');

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})

function flipCard(evt) {   
    const elem = evt.currentTarget;
    elem.classList.add('card--flip');
}