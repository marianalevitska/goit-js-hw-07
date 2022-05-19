import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onImageItemClick);
galleryContainer.addEventListener('click', galleryClick);

function createGalleryItem(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
    </div> `;
    }).join('');
}
function onImageItemClick(e) {
    if (e.target.nodeName !== "IMG") {
        return
    }
    e.preventDefault();
    const lageImage = e.target.dataset.source;
    const instance = basicLightbox.create(`
    <img
    src ="${e.target.dataset.source}">`,

        {
            onShow: () => {
                const listener = function (evt) {
                    if (evt.key === "Escape") {
                        document.removeEventListener('keydown', listener)
                    }
                    return instance.close();
                };
                document.addEventListener('keydown', listener)
            },
        }
    )
    instance.show()
};

console.log(galleryItems);
