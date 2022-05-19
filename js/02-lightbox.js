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
        <a class="gallery__item" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
    `;
    }).join('');
};
let gallery = new SimpleLightbox(`
    <img
    src ="${e.target.dataset.source}">`);
gallery.on('show.simplelightbox', function (e) {
    if (e.target.nodeName !== "IMG") {
        return
    }
    e.preventDefault();

    onShow: () => {
        const listener = function (evt) {
            if (evt.key === "Escape") {
                document.removeEventListener('keydown', listener)
            }
            return lightbox.close();
        };
        document.addEventListener('keydown', listener);
    };
    lightbox.show();
});
// function onImageItemClick(e) {
//     if (e.target.nodeName !== "IMG") {
//         return
//     }
//     e.preventDefault();
//     const lageImage = e.target.dataset.source;
//     var lightbox = new SimpleLightbox(`
//     <img
//     src ="${e.target.dataset.source}">`,

//         {
//             onShow: () => {
//                 const listener = function (evt) {
//                     if (evt.key === "Escape") {
//                         document.removeEventListener('keydown', listener)
//                     }
//                     return lightbox.close();
//                 };
//                 document.addEventListener('keydown', listener)
//             },
//         }
//     )
//     lightbox.show()
// };
console.log(galleryItems);
