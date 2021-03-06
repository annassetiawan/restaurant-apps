import RestaurantSource from '../../data/restaurant-source';
import { createMenuItemTemplate, createButtonTemplate, createHomeDetailTemplate } from '../templates/template-creator';
import buttonInitiator from '../../utils/button-initiator';
import hero from '../../../assets/hero.jpg';

const Home = {
  async render() {
    return `  
  
    <div class="hero">
    <img class="lazyload" data-src=${hero} 
    srcset="imgs/hero-small.jpg 480w, imgs/hero-large.jpg 800w"
    sizes="(max-width: 600px) 480px, 800px"
    alt="hero">
    
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
    let fontAwesomeScriptElement = document.querySelector('script[src="https://use.fontawesome.com/b070c8f1df.js"]');

    if (!fontAwesomeScriptElement) {
      fontAwesomeScriptElement = document.createElement('script');
      fontAwesomeScriptElement.src = 'https://use.fontawesome.com/b070c8f1df.js';
      document.body.appendChild(fontAwesomeScriptElement);
    }

    const restaurants = await RestaurantSource.listRestaurants();

    const content = document.querySelector('#mainContent');

    content.innerHTML += createHomeDetailTemplate();
    const loader = document.querySelector('.loader');
    loader.classList.add('hide');
    const restaurantContainer = document.querySelector('#restaurants');
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
