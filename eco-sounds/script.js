// active nav item

const navContainer = document.querySelector('[data-js="nav-container"]');
const navColl = navContainer.querySelectorAll('[data-js="nav-item"]');

navContainer.addEventListener('click', changeClassActive);

function changeClassActive(event) {
    const element = event.target;
    if (element.dataset.js === 'nav-item') {
        navColl.forEach((item) => item.classList.remove('nav-item--active'));
        element.classList.add('nav-item--active');
    }
}