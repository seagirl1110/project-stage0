// active nav item

const navContainer = document.querySelector('[data-js="nav-container"]');
const navColl = navContainer.querySelectorAll('[data-js="nav-item"]');

navContainer.addEventListener('click', (event) => {
    const element = event.target;
    if (element.dataset.js === 'nav-item') {
        changeClassActive(element, 'nav-item--active');
        pauseAudio();
        changeImage(element.dataset.bird);
    }
});

function changeClassActive(element, className) {
    navColl.forEach((item) => item.classList.remove(className));
    element.classList.add(className);
}


// toggle background-image

const main = document.querySelector('[data-js="main"]');

function changeImage(bird = 'forest') {
    const path = `./assets/img/${bird}.jpg`;
    main.style.backgroundImage = `url(${path})`;
}


// audio

const audio = new Audio();
const audioBtn = document.querySelector('[data-js="audio-btn"]');
let isPlay = false;


audioBtn.addEventListener('click', (event) => {
    const element = event.target;
    const bird = document.querySelector('.nav-item--active');
    if (!isPlay) {
        playAudio(bird.dataset.bird);
    } else { pauseAudio() }
});

function playAudio(bird = 'forest') {
    audio.src = `./assets/audio/${bird}.mp3`;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    audioBtn.classList.add('btn-play--pause');
}

function pauseAudio() {
    audio.pause();
    isPlay = false;
    audioBtn.classList.remove('btn-play--pause');
}