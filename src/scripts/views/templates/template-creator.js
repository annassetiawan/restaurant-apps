/* eslint-disable no-unused-expressions */
import CONFIG from '../../globals/config';
import locationIcon from '../../../assets/location.svg';
import starIcon from '../../../assets/star.svg';
import foodIcon from '../../../assets/food.svg';
import drinkIcon from '../../../assets/drink.svg';
import menuFoodIcon from '../../../assets/menufood.svg';
import menuDrinkIcon from '../../../assets/menudrink.svg';
import avatarIcon from '../../../assets/avatar.svg';

const createFormTemplate = () => `
<div class="form-group-container">
<label for="inputName">Name</label>
<input id="inputName" type="text" class="form-control" placeholder="Your Name">
<label for="inputReview">Reviews</label>
<textarea id="inputReview" name="subject" placeholder="Write something.." style="height:200px"></textarea>
    
<button id="buttonSave" class="btn btn-success">Submit</button>
</div>
`;

const createHomeDetailTemplate = () => `
<section class="categories container">
    <h2>Location</h2>
    <p>Choose your location</p>
  <div class="button_list_inner ">
    <button id="button" class="button all active_btn" >All</button>
  </div>
</section>
  <hr class="container">
<section class="container">
  <h2>Restaurant</h2>
  <p>Lets find some places to eat</p>
    <div class="section_list" id="restaurants"></div>
</section>
`;

const createFavouriteDetailTemplate = () => `
<section class="container">
  <h2>Your Favourite Restaurant</h2>
  <p>Lets find some places to eat</p>
    <div class="section_list" id="restaurants">
   
    </div>
</section>
`;

const createButtonTemplate = (city) => ` 
<button id="button" class="button" data-name=${city}>${city}</button>`;

const createMenuItemTemplate = (restaurant) => `<div class="content hide active" data-name=${
  restaurant.city
}>
    <div class="content__inner ">
      <div class="content__img" style="background: url(${CONFIG.BASE_IMAGE_URL}small/${
  restaurant.pictureId
});background-position: center;"> 
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
          <h1>${
            restaurant.name.length > 9 ? `${restaurant.name.slice(0, 9)} ...` : restaurant.name
          }</h1>
        </div>
        <div class="content__desc">
          <p>${
            restaurant.description.length > 20
              ? `${restaurant.description.slice(0, 25)} ...`
              : restaurant.description
          }</p>
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
const createReviewsTemplate = (review) => `<div class="review_details_item">
<div class="review_details_consumer">
<div class="review_details_image">
<img src=${avatarIcon} alt="avatar-icon">
<h3>${review.name}</h3></div>
  <p>${review.date}</p>
</div>
  <div class="review_details_desc">
   
  <p>${review.review}</p>
  </div>
 
</div>
`;

const createMenuDrinkTemplate = (drink) => `<div class="menu_details_foods_item">
  <img src=${menuDrinkIcon} alt="menu-icon">
  <p>${drink.name}</p>
</div>
<hr class="hrdetails">
`;

const createDetail = (restaurant) => `
        <div class="main_details container">
          <div class="button_list_inner button_details_content ">
            <button id="button" class="button all active_btn" data-name="menu">Menu</button>
            <button id="button" class="button all " data-name="about">About</button>
          </div>
          <div class="menu_content details_content hide active" data-name="menu">
            <div clas="menu_details container">
              <div class="menu_details_categories container">
                <img src=${foodIcon} alt="food-icon">
                <h2>Food</h2>
              </div>
            <div class="menu_details_foods"></div>
            </div>
            <div clas="menu_details container">
              <div class="menu_details_categories container">
                <img src=${drinkIcon} alt="drink-icon">
                <h2>Drink</h2>
              </div>
              <div class="menu_details_drinks"></div>
            </div>
          </div>
          <div class="about_content details_content hide" data-name="about">
         <h2>About</h2>
         <p>${restaurant.description}</p>
         <h2>Reviews</h2>
         <div class="review_details">
         
         </div>
         <div class="review_details_forms">
         
         </div>
        </div>
      
    `;

const createLikeButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
       <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;

export {
  createMenuItemTemplate,
  createDetail,
  createButtonTemplate,
  createMenuFoodTemplate,
  createMenuDrinkTemplate,
  createReviewsTemplate,
  createHomeDetailTemplate,
  createFormTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createFavouriteDetailTemplate,
};
