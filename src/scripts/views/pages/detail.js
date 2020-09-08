import {
  createDetail,
  createMenuFoodTemplate,
  createMenuDrinkTemplate,
  createReviewsTemplate,
} from '../templates/template-creator';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import buttonInitiatorDetails from '../../utils/button-details-initiator ';
import CONFIG from '../../globals/config';
import starIcon from '../../../assets/star.svg';

const Detail = {
  async render() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantSource.detailRestaurant(url.id);
    const { restaurant } = restaurants;
    return `<div class="details__pic" style="background: url(${CONFIG.BASE_IMAGE_URL}medium/${
      restaurant.pictureId
    });background-position: center;">
          <div class="details__overlay">
              <div class="hero__inner">
                <h1 class="">${restaurant.name}</h1>
                <p>${restaurant.address}</p>
                <p>Categories : ${restaurant.categories.map((category) => category.name)}</p>
                <div class="content__rating content__rating__details">
                  <img src=${starIcon} alt="star-icon">
                  <span>${restaurant.rating}</span>
                </div>
              </div>
          </div>
        </div>
        <main id="mainContent">
      
      </main>
      <footer>
        <p>Copyright © 2020 - Hunger App</p>
      </footer>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantSource.detailRestaurant(url.id);
    const content = document.querySelector('#mainContent');
    content.innerHTML += createDetail(restaurants.restaurant);
    buttonInitiatorDetails();
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
