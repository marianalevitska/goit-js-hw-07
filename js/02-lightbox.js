import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);



function createGalleryItem(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        title="${description}"
        />
        </a>
    `;
    }).join('');
}

const lightBox = new SimpleLightbox('.gallery a', {
    docClose: false,
    captionsData: "title",
    captionPosition: 'bottom',
    captionDelay: 250,
});
// console.log(galleryItems);
