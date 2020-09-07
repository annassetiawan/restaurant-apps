/* eslint-disable no-unused-expressions */
import CONFIG from '../../globals/config';
import locationIcon from '../../../assets/location.svg';
import starIcon from '../../../assets/star.svg';
import arrowIcon from '../../../assets/leftarrow.svg';
import foodIcon from '../../../assets/food.svg';
import drinkIcon from '../../../assets/drink.svg';
import menuFoodIcon from '../../../assets/menufood.svg';
import menuDrinkIcon from '../../../assets/menudrink.svg';

const createButtonTemplate = (city) => ` 
<button id="button" class="button" data-name=${city}>${city}</button>`;

const createMenuItemTemplate = (restaurant) => `<div class="content hide active" data-name=${restaurant.city}>
    <div class="content__inner ">
      <div class="content__img" style="background: url(${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId});background-position: center;"> 
      </div>
      <div class="content__details">
        <div class="content__place">
        <img src=${locationIcon} alt="location-icon">
          <span>${restaurant.city}</span>
        </div>
        <div class="content__rating">
        <img src=${starIcon} alt="star-icon">
          <span>${restaurant.rating}</span>
        </div>
        <div class="content__name">
          <h1>${restaurant.name.length > 9 ? `${restaurant.name.slice(0, 9)} ...` : restaurant.name}</h1>
        </div>
        <div class="content__desc">
          <p>${restaurant.description.length > 20 ? `${restaurant.description.slice(0, 25)} ...` : restaurant.description}</p>
          </div>
          <a class="button button_details" href="${`#/detail/${restaurant.id}`}">See Details</a
      </div>
      
    </div>
  </div>`;

const createMenuFoodTemplate = (food) => `<div class="menu_details_foods_item">
  <img src=${menuFoodIcon} alt="menu-icon">
  <p>${food.name}</p>
</div>
<hr class="hrdetails">
`;

const createMenuDrinkTemplate = (drink) => `<div class="menu_details_foods_item">
  <img src=${menuDrinkIcon} alt="menu-icon">
  <p>${drink.name}</p>
</div>
<hr class="hrdetails">
`;

const createDetail = (restaurant) => `
<a href="#mainContent" class="skip-link">Menuju ke konten</a>
      <header class="header header__details">
        <div class="header__inner container">
          <div class="details__nav">
            <button class="button_back"><img src=${arrowIcon} alt="arrow-icon"></button>
          </div>  
        </div>
      </header>

      <div class="details__pic" style="background: url(${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId});background-position: center;">
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
        <div class="main_details container">
          <div class="button_list_inner button_details_content ">
            <button id="button" class="button all active_btn" >Menu</button>
            <button id="button" class="button all " >About</button>
            <button id="button" class="button all " >Reviews</button>
          </div>
          <div clas="menu_details container">
            <div class="menu_details_categories container">
              <img src=${foodIcon} alt="food-icon">
              <h2>Food</h2>
            </div>
          <div class="menu_details_foods container"></div>
          </div>
          <div clas="menu_details container">
            <div class="menu_details_categories container">
              <img src=${drinkIcon} alt="drink-icon">
              <h2>Drink</h2>
            </div>
          <div class="menu_details_drinks container"></div>
          </div>
        </div>
      </main>
      <footer>
        <p>Copyright © 2020 - Hunger App</p>
      </footer>
    `;

export {
  createMenuItemTemplate,
  createDetail,
  createButtonTemplate,
  createMenuFoodTemplate,
  createMenuDrinkTemplate,
};
