import { i18nObj } from './translate.js';

// hamburger-menu

const hamburgerMenu = document.querySelector('[data-js="hamburger-menu"]');
const menu = document.querySelector('[data-js="menu"]');

hamburgerMenu.addEventListener('click', toggleMenu);
menu.addEventListener('click', closeMenu);

function toggleMenu() {
    hamburgerMenu.classList.toggle('hamburger-menu--open');
    menu.classList.toggle('menu--open');
}

function closeMenu(event) {
    if (event.target.dataset.js === 'menu-link') {
        hamburgerMenu.classList.remove('hamburger-menu--open');
        menu.classList.remove('menu--open');
    }
}


// portfolio-seasonal-images

const portfolioBtnWrapper = document.querySelector('[data-js="portfolio-btn-wrapper"]');
const portfolioBtns = portfolioBtnWrapper.querySelectorAll('[data-js="portfolio-btn"]');
const portfolioImages = document.querySelectorAll('[data-js="portfolio-img"]');

portfolioBtnWrapper.addEventListener('click', changeImage);

function changeImage(event) {
    if (event.target.dataset.js === 'portfolio-btn') {
        portfolioBtns.forEach((btn) => btn.classList.remove('portfolio-btn--active'));
        event.target.classList.add('portfolio-btn--active');
        const season = event.target.dataset.i18n;
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
    }
}


// language-translater
const i18nColl = document.querySelectorAll('[data-i18n]');
const toggleLng = document.querySelector('[data-js="toggle-lng"]');
const lngBtn = toggleLng.querySelectorAll('[data-js="toggle-lng-item"]');

toggleLng.addEventListener('click', getTranslate);

function getTranslate (event) {
    if (event.target.dataset.js === 'toggle-lng-item') {
        lngBtn.forEach((btn) => btn.classList.remove('toggle-lng-item--active'));
        event.target.classList.add('toggle-lng-item--active');
        const lng = event.target.dataset.lng;
        i18nColl.forEach((item) => item.textContent = i18nObj[lng][item.dataset.i18n]);
    }
}