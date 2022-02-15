const cards = document.querySelectorAll('[data-js="card"]');

cards.forEach((card) => {
    card.addEventListener('click', () => {
        console.log(card);
    })
})