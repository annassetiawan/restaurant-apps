import RestaurantSource from '../../data/restaurant-source';
import createMenuItemTemplate from '../templates/template-creator';
import buttonInitiator from '../../utils/button-initiator';

const Home = {
  async render() {
    return `
      <section class="categories container">
      <h2>Location</h2>
      <p>Browse all the location</p>
      <div class="button_list_inner ">
        <button class="button all active_btn" >All</button>
        <button class="button" data-name="Gorontalo">Gorontalo</button>
        <button class="button" data-name="Bali">Bali</button>
        <button class="button"data-name="Samarinda">Samarinda</button>
        <button class="button" data-name="Aceh">Aceh</button>
        <button class="button" data-name="Ternate">Ternate</button>
        <button class="button" data-name="Surabaya">Surabaya</button>
        <button class="button" data-name="Balikpapan">Balikpapan</button>
        <button class="button" data-name="Medan">Medan</button>
        <button class="button" data-name="Bandung">Bandung</button>
        <button class="button" data-name="Malang">Malang</button>
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
    // restaurantContainer.innerHTML += createMenuItemTemplate(restaurants);
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createMenuItemTemplate(restaurant);
    });

    buttonInitiator();
  },
};

export default Home;
