// hamburger-menu

const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', toggleMenu);
menu.addEventListener('click', closeMenu);

function toggleMenu() {
    hamburgerMenu.classList.toggle('hamburger-menu--open');
    menu.classList.toggle('menu--open');
}

function closeMenu(event) {
    if (event.target.classList.contains('menu__link')) {
        hamburgerMenu.classList.remove('hamburger-menu--open');
        menu.classList.remove('menu--open');
    }
}


// portfolio-seasonal-images

const portfolioBtnWrapper = document.querySelector('.portfolio__btn-wrapper');
const portfolioBtns = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio__img');

portfolioBtnWrapper.addEventListener('click', changeImage);

function changeImage(event) {
    if (event.target.classList.contains('portfolio-btn')) {
        portfolioBtns.forEach((btn) => btn.classList.remove('portfolio-btn--active'));
        event.target.classList.add('portfolio-btn--active');
        const season = event.target.dataset.season;
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
    }
}

