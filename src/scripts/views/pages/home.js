import RestaurantSource from '../../data/restaurant-source';
import { createMenuItemTemplate, createButtonTemplate } from '../templates/template-creator';
import buttonInitiator from '../../utils/button-initiator';

const Home = {
  async render() {
    return `
      <section class="categories container">
      <h2>Location</h2>
      <p>Browse all the location</p>
      <div class="button_list_inner ">
      <button id="button" class="button all active_btn" >All</button>
      </div>
    </section>
    <hr class="container">
    <section class="container">
      <h2>Restaurant</h2>
      <p>List all of available restaurants</p>
      <div class="section_list" id="restaurants">
       
          <div class="loader"></div>
      
      </div>
     
    </section>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');
    const loader = document.querySelector('.loader');
    loader.classList.add('hide');
    console.log(restaurants);
    const buttonContainer = document.querySelector('.button_list_inner');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createMenuItemTemplate(restaurant);
    });
    const restaurantCity = restaurants.map((restaurant) => restaurant.city);
    const uniqueCity = [...new Set(restaurantCity)];

    uniqueCity.forEach((city) => {
      buttonContainer.innerHTML += createButtonTemplate(city);
    });
    buttonInitiator();
  },
};

export default Home;
