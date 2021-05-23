import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

import { restaurants } from '../DATA.json';

const hamburgerButtonElement = document.querySelector('#hamburger');
const hamburgerCloseElement = document.querySelector('#drawer__close');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('main');
const restoContent = document.querySelector('.resto__wrapper');

hamburgerButtonElement.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open');
  drawerElement.classList.remove('close');
  event.stopPropagation();
});

hamburgerCloseElement.addEventListener('click', (event) => {
  drawerElement.classList.remove('open');
  drawerElement.classList.toggle('close');
  event.stopPropagation();
});

mainElement.addEventListener('click', (event) => {
  drawerElement.classList.remove('open');
  drawerElement.classList.toggle('close');
  event.stopPropagation();
});

restaurants.forEach((restaurant) => {
  restoContent.innerHTML += `
    <article class="resto__item">
      <figure class="resto__image--wrapper">
        <img
        src="${restaurant.pictureId}"
        alt="${restaurant.name}"
        class="resto__image"
        />
      </figure>
      <div class="resto__content">
        <div class="resto__heading">
            <h2 class="resto__location">
            <span><i class="fas fa-map-marker-alt"></i></span>
            <span>${restaurant.city}</span>
            </h2>
            <h2 class="resto__star">
            <span><i class="fas fa-star"></i></span>
            <span>${restaurant.rating}</span>
            </h2>
        </div>
        <div class="resto__info">
            <h2 class="resto__name">${restaurant.name}</h2>
            <p class="resto__description">${restaurant.description}}</p>
        </div>
      </div>
      </article>
      `;
});
