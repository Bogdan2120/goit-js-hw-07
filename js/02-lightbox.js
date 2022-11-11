import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
};

const getItemTemplate = ({
  preview,
  original,
  description,
}) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;

function render() {
  const item = galleryItems.map(getItemTemplate);

  refs.gallery.insertAdjacentHTML("beforeend", item.join(""));
}

render();

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
