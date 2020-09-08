import {
  createDetail,
  createMenuFoodTemplate,
  createMenuDrinkTemplate,
  createReviewsTemplate,
} from '../templates/template-creator';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import buttonInitiatorDetails from '../../utils/button-details-initiator ';

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
    buttonInitiatorDetails();
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantSource.detailRestaurant(url.id);
    const menuDetailFood = document.querySelector('.menu_details_foods');
    const menuDetailDrink = document.querySelector('.menu_details_drinks');
    const reviewDetail = document.querySelector('.review_details');
    const { foods } = restaurants.restaurant.menus;
    const { drinks } = restaurants.restaurant.menus;
    const { consumerReviews } = restaurants.restaurant;
    foods.forEach((food) => {
      menuDetailFood.innerHTML += createMenuFoodTemplate(food);
    });
    drinks.forEach((drink) => {
      menuDetailDrink.innerHTML += createMenuDrinkTemplate(drink);
    });
    consumerReviews.forEach((review) => {
      reviewDetail.innerHTML += createReviewsTemplate(review);
    });
  },
};

export default Detail;
