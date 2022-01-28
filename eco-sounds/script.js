// active nav item

const navContainer = document.querySelector('[data-js="nav-container"]');
const navColl = navContainer.querySelectorAll('[data-js="nav-item"]');

navContainer.addEventListener('click', (event) => {
    const element = event.target;
    if (element.dataset.js === 'nav-item') {
        changeClassActive(element, 'nav-item--active');
        pauseAudio();
    }
});

function changeClassActive(element, className) {
    navColl.forEach((item) => item.classList.remove(className));
    element.classList.add(className);
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