import { createDetail, createMenuFoodTemplate, createMenuDrinkTemplate } from '../templates/template-creator';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import buttonInitiator from '../../utils/button-initiator';

const Detail = {
  async render() {
    const body = document.querySelector('body');
    while (body.firstChild) {
      body.firstChild.remove();
    }
    const div = document.createElement('div');
    div.classList.add('body');
    body.appendChild(div);
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    div.innerHTML += createDetail(restaurant.restaurant);
  },

  async afterRender() {
    buttonInitiator();
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantSource.detailRestaurant(url.id);
    const menuDetailFood = document.querySelector('.menu_details_foods');
    const menuDetailDrink = document.querySelector('.menu_details_drinks');
    const { foods } = restaurants.restaurant.menus;
    const { drinks } = restaurants.restaurant.menus;
    // const listFoods = foods.map((e) => e.name);
    // console.log(listFoods);
    console.log(foods);
    foods.forEach((food) => {
      menuDetailFood.innerHTML += createMenuFoodTemplate(food);
    });
    drinks.forEach((drink) => {
      menuDetailDrink.innerHTML += createMenuDrinkTemplate(drink);
    });
  },

};

export default Detail;
