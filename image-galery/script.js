const search = document.querySelector('[data-js="search"]');
const searchBtn = document.querySelector('[data-js="search-btn"]');

search.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {getResult()}
})
searchBtn.addEventListener('click', getResult);

getResult();

async function getResult() {
    const result = await getData();
    const collImages = result.results;
    const galleryContainer = document.querySelector('[data-js="gallery"]');
    addImage(collImages, galleryContainer);
}

async function getData() {
    const url = getUrl(search.value);
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

function getUrl(value) {
    if (value.length > 0) {
        url = `https://api.unsplash.com/search/photos?query=${value}&per_page=12&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;
    } else {
        url = 'https://api.unsplash.com/search/photos?query=spring&per_page=12&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    }
    return url;
}

function addImage(collImage, container) {
    container.innerHTML = '';
    collImage.forEach(image => {
        const img = document.createElement('img');
        img.classList.add('gallery__img');
        img.src = image.urls.regular;
        img.alt = 'gallery-image';
        container.append(img);
    });
}