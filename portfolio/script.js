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

