import i18nObj from './translate.js';

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
        changeClassActive(portfolioBtns, event.target, 'portfolio-btn--active');
        const season = event.target.dataset.i18n;
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
    }
}


// language-translater
const i18nColl = document.querySelectorAll('[data-i18n]');
const toggleLng = document.querySelector('[data-js="toggle-lng"]');
const lngBtn = toggleLng.querySelectorAll('[data-js="toggle-lng-item"]');

toggleLng.addEventListener('click', getTranslate);

function getTranslate(event) {
    if (event.target.dataset.js === 'toggle-lng-item') {
        changeClassActive(lngBtn, event.target, 'toggle-lng-item--active');
        const lng = event.target.dataset.lng;
        i18nColl.forEach((item) => {
            if (item.placeholder) {
                item.placeholder = i18nObj[lng][item.dataset.i18n];
                item.textContent = '';
            } else {
                item.textContent = i18nObj[lng][item.dataset.i18n]
            }
        });
    }
}


// item-active

function changeClassActive(coll, item, classActive) {
    coll.forEach((btn) => btn.classList.remove(classActive));
    item.classList.add(classActive);
}


// color-theme

const toggleTheme = document.querySelector('[data-js="toggle-theme"]');
const body = document.querySelector('[data-js="body"]');

toggleTheme.addEventListener('click', () => {
    body.classList.toggle('light-theme');
});