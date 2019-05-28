'use strict';

import galleryItems from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.gallery'),
  overlay: document.querySelector('.overlay'),
};

galleryItems.forEach(el => {
  const Item = createGalleryItem(el);
  const insertItem = appendGalleryItem(refs.gallery, Item);
});

refs.gallery.addEventListener('click', handleGalleryClick);

function createGalleryItem(element) {
  return ` <li class="gallery__item">
  <a
  class="gallery__link"
  href="${element.original}"
  >

  <img
    class="gallery__image"
    data-preview ="${element.preview}"
    data-source="${element.original}"  
    alt="${element.description}"
  />

  <span class="gallery__icon">
    <i class="material-icons">zoom_out_map</i>
  </span>

  </a>
  </li>  `;
}

function appendGalleryItem(parent, galleryEl) {
  parent.insertAdjacentHTML('beforeend', galleryEl);
}

function handleGalleryClick(event) {
  event.preventDefault();

  const modalImage = refs.overlay.querySelector('img');

  if (event.target.nodeName === 'IMG') {
    modalImage.src = event.target.dataset.source;
  }

  openModal();
}

function handleOverlayClick(event) {
  const modalImage = refs.overlay.querySelector('img');
  if (event.target.nodeName === 'IMG') {
    return;
  } else if (event.target.parentNode.dataset.action === 'prev-img') {
    for (let i = 0; i < galleryItems.length; i += 1) {
      if (modalImage.src === galleryItems[0].original) {
        break;
      }
      if (modalImage.src === galleryItems[i].original) {
        modalImage.src = galleryItems[i - 1].original;
        break;
      }
    }
  } else if (event.target.parentNode.dataset.action === 'next-img') {
    for (let i = 0; i < galleryItems.length; i += 1) {
      if (modalImage.src === galleryItems[galleryItems.length - 1].original) {
        break;
      }
      if (modalImage.src === galleryItems[i].original) {
        modalImage.src = galleryItems[i + 1].original;
        break;
      }
    }
  } else {
    closeModal();
  }
}

function openModal() {
  refs.overlay.classList.add('is-visible');
  refs.overlay.addEventListener('click', handleOverlayClick);
  window.addEventListener('keydown', handleKeyPress);
}

function closeModal() {
  refs.overlay.classList.remove('is-visible');
  refs.overlay.removeEventListener('click', handleOverlayClick);
  window.removeEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
  if (event.code !== 'Escape') {
    return;
  }
  closeModal();
}

///// lazy - load

const lazyLoad = target => {
  const options = {
    rootMargin: '50px 0px',
    threshold: 0.01,
  };

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const imageUrl = img.dataset.preview;
        img.setAttribute('src', imageUrl);
        observer.disconnect();
      }
    });
  }, options);

  io.observe(target);
};

const images = document.querySelectorAll('.gallery__image');

images.forEach(image => {
  lazyLoad(image);
});
