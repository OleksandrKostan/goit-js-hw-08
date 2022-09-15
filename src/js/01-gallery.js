// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
// console.log(galleryItems);
const galleryItemsEl = document.querySelector('.gallery');

const selectorGallery = ({ preview, original, description }) =>
  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
const createGalleryMarkup = galleryItems.map(selectorGallery).join('');
galleryItemsEl.insertAdjacentHTML('afterbegin', createGalleryMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  caption: true,
  captionsData: 'alt',
});
