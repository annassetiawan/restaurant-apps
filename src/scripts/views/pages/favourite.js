import FavoriteRestaurantIdb from '../../data/favouriterestaurant-idb';
import { createMenuItemTemplate, createFavouriteDetailTemplate, createEmptyItem } from '../templates/template-creator';
import hero from '../../../assets/hero.jpg';

const Favourite = {
  async render() {
    return `
    <div class="hero">
    
    <img class="lazyload" src=${hero} alt="hero">
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
    const restaurantContainer = document.querySelector('#restaurants');
    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createMenuItemTemplate(restaurant);
      });
    } else {
      restaurantContainer.innerHTML += createEmptyItem();
    }
  },
};

export default Favourite;
