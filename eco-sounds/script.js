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

// audio

const audio = new Audio();
const audioBtn = document.querySelector('[data-js="audio-btn"]');
let isPlay = false;


audioBtn.addEventListener('click', (event) => {
    const element = event.target;
    toggleBtn(element);
    playAudio();
});

function toggleBtn(element) {
    element.classList.toggle('btn-play--pause');
}

function playAudio() {
   
    audio.src = './assets/audio/forest.mp3';
    audio.currentTime = 0;
    if (!isPlay) {
        audio.play();
        isPlay = true;

    } else {
        audio.pause();
        isPlay = false;
    }
}