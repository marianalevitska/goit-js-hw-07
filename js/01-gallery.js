import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onImageItemClick);

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
function onImageItemClick() {
    if (item.target.nodeName !== "IMG") {
        return
    }
    item.preventDefault();
    const lageImage = evt.target.dataset.source;
    const instance = basicLightbox.create(`
    <img
    src ="${evt.target.dataset.source}">`,
        {
            onShow: (instance) => {
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




// const pics = document.querySelector(".gallery");
// let modalWindow;

// const galleryClick = (evt) => {
//     evt.preventDefault();

//     const scrImg = evt.target.getAttribute("data-source");
//     if (scrImg) {
//         modalWindow.basicLightbox.create(`<img id="preview" scr="${scrImg}">`, {
//             onShow: () => pics.addEventListener('keydown', handleToggler),
//             onClose: () => pics.addEventListener('keydown', handleToggler),
//         });
//         modalWindow.show();
//     }
// };
// const handleToggler = (evt) => {
//     if (evt.key === 'Escape') {
//         modalWindow.close()
//     };
// };
// const newGallery = () => {
//     const imgHTML = galleryItems.map(
//         ({ original, preview, description }) => `
//         <li class="gallery_item">
//         <a class="gallery_link" href="${original}">
//         <img
//         class="gallery_img"
//         scr="${preview}"
//         alt="${description}"
//         data-source="${original}"
//         >
//         </a>
//         </li>`
//     )
//         .join("");
//     pics.innerHTML = imgHTML;
// };
// newGallery();
// pics.addEventListener("click", handleClick);


console.log(galleryItems);
