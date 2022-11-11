import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

//getItemTemplate
const getItemTemplate = ({
  preview,
  original,
  description,
}) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;

//ModalImg
const createModalImg = (url) => {
  const instance = basicLightbox.create(`<img src="${url}" height="auto"/>`, {
    onShow: (instance) => {
      instance.element().querySelector("img").onclick = instance.close;
      document.onkeyup = (e) => {
        if (e.code !== "Escape") {
          return;
        }
        instance.close();
      };
    },
  });

  instance.show();
};

function render() {
  const item = galleryItems.map(getItemTemplate);

  refs.gallery.insertAdjacentHTML("beforeend", item.join(""));
}

const onImgClick = (e) => {
  if (e.target === e.currentTarget) {
    return;
  }
  e.preventDefault();

  const urlModalImg = e.target.dataset.source;

  createModalImg(urlModalImg);
};

render();

refs.gallery.addEventListener("click", onImgClick);
