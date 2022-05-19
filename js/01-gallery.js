import { galleryItems } from './gallery-items.js';
// Change code below this line
const pics = document.querySelector(".gallery");
let modalWindow;

const galleryClick = (evt) => {
    evt.preventDefault();

    const scrImg = evt.target.getAttribute("data-source");
    if (scrImg) {
        modalWindow.basicLightbox.create(`<img id="preview" scr="${scrimg}">`, {
            onShow: () => pics.addEventListener("keydown", handleToggler),
            onClose: () => pics.addEventListener("keydown", handleToggler),
        });
        modalWindow.show();
    }
};
const handleToggler = (evt) => {
    if (evt.key === "Escape") modalWindow.close();
};
const newGallery = () => {
    const imgHTML = galleryItems.map(
        ({ original, preview, description }) => `
        <li class="gallery_item">
        <a class="gallery_link" href="${original}">
        <img
        class="gallery_img"
        scr="${preview}"
        alt="${description}"
        data-source="${original}"
        >
        </a>
        </li>`
    )
        .join("");
    pics.innerHTML = imgHTML;
};
newGallery();
pics.addEventListener("click", handleClick);

pics.addEventListener("click", galleryClick);
// console.log(galleryItems);
