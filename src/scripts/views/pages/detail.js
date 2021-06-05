/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import ReviewInitiator from '../../utils/review-initiator';
import { createRestaurantDetail } from '../templates/templates-creator';

const Detail = {
  async render() {
    return `
      <section class="detail__container">
        <!-- render -->
      </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.restoDetail(id);
    const restoWrapper = document.querySelector('.detail__container');
    restoWrapper.innerHTML = '';
    restoWrapper.innerHTML += createRestaurantDetail(restaurant);

    ReviewInitiator.init({
      id,
      name: document.querySelector('#review__name'),
      review: document.querySelector('#review__text'),
      form: document.querySelector('#review__form'),
    });
  },
};

export default Detail;
