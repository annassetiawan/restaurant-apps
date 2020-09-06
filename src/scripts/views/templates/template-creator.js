/* eslint-disable no-unused-expressions */
import CONFIG from '../../globals/config';
import locationIcon from '../../../assets/location.svg';
import starIcon from '../../../assets/star.svg';

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

const createDetail = () => '<h2>DETAIL</h2>';

export {
  createMenuItemTemplate, createDetail, createButtonTemplate,
};
