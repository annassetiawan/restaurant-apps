/* eslint-disable no-unused-expressions */
import CONFIG from '../../globals/config';
import locationIcon from '../../../assets/location.svg';
import starIcon from '../../../assets/star.svg';

const createMenuItemTemplate = (restaurant) => `<div class="content hide active" data-name=${restaurant.city}>
    <div class="content__inner ">
      <div class="content__img">
        <img src=${restaurant.pictureId ? `${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}` : 'https://fakeimg.pl/350x500/?text=NOIMAGE'} alt='${restaurant.name}' />
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
          <h1>${restaurant.name.length > 11 ? `${restaurant.name.slice(0, 11)} ...` : restaurant.name}</h1>
        </div>
        <div class="content__desc">
          <p>${restaurant.description.length > 20 ? `${restaurant.description.slice(0, 25)} ...` : restaurant.description}</p>
          </div>
          <button class="button button_details" >See Details</button>
      </div>
      
    </div>
  </div>`;

export default createMenuItemTemplate;
