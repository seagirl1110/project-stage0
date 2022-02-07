const url = 'https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo'

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

const main = async () => {
    const result = await getData();
    const collImages = result.results;

    const galleryContainer = document.querySelector('[data-js="gallery"]');

    collImages.forEach(image => {
        const img = document.createElement('img');
        img.classList.add('gallery__img');
        img.src = image.urls.regular;
        img.alt = 'gallery-image';
        galleryContainer.append(img);
    });
};

main();