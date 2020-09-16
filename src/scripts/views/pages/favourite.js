import FavoriteRestaurantIdb from '../../data/favouriterestaurant-idb';
import {
  createMenuItemTemplate,
  createFavouriteDetailTemplate,
} from '../templates/template-creator';

const Favourite = {
  async render() {
    return `
    <div class="hero">
    <div class="hero__overlay">
      <div class="hero__inner">
        <h1 class="hero__title">
          It’s not just <br />
          Food, it is an <br />
          Experience
        </h1>
        <p class="hero__tagline">
          Find your local favourites <br />
          restaurant
        </p>
      </div>
    </div>
  </div>
  <main id="mainContent">
  <div class="loader"></div>
  </main>
  <footer>
    <p>Copyright © 2020 - Hunger App</p>
  </footer>

     `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const content = document.querySelector('#mainContent');
    content.innerHTML += createFavouriteDetailTemplate();
    const loader = document.querySelector('.loader');
    loader.classList.add('hide');
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createMenuItemTemplate(restaurant);
    });
  },
};

export default Favourite;
