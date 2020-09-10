import RestaurantSource from '../data/restaurant-source';

const reviews = (id) => {
  const showResponseMessage = (message = 'Check your internet connection') => {
    // eslint-disable-next-line no-alert
    alert(message);
  };

  // const getReviews = () => {
  //   const url = UrlParser.parseActiveUrlWithoutCombiner();
  //   const restaurants = RestaurantSource.detailRestaurant(url.id);
  //   if (restaurants.error) {
  //     showResponseMessage(restaurants.message);
  //   } else {

  //   }
  // };

  const renderAllReview = (restaurants) => {
    const reviewDetail = document.querySelector('.review_details');
    restaurants.forEach((restaurant) => {
      reviewDetail.innerHTML += `
          <div class="review_details_item">
          <div class="review_details_consumer">
          <div class="review_details_image">
          <img src="" alt="avatar-icon">
          <h3>${restaurant.name}</h3></div>
            <p>${restaurant.date}</p>
          </div>
          
            <div class="review_details_desc">
             
            <p>${restaurant.review}</p>
            </div>
           
          </div>
          `;
    });
  };

  const baseUrl = 'https://dicoding-restaurant-api.el.r.appspot.com/';

  const getReview = () => {
    fetch(`${baseUrl}/detail/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderAllReview(responseJson.restaurant);
        }
        console.log(responseJson);
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const reviewHandler = async (customerReviews) => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': '12345',
        },
        body: JSON.stringify(customerReviews),
      };
      const restaurants = await RestaurantSource.addReviews(options);

      showResponseMessage(restaurants.message);
      getReview();
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const buttonSave = document.querySelector('#buttonSave');
  const inputName = document.querySelector('#inputName');
  const inputReview = document.querySelector('#inputReview');

  buttonSave.addEventListener('click', () => {
    const customerReviews = {
      id,
      name: inputName.value,
      review: inputReview.value,
    };

    reviewHandler(customerReviews);
  });
};
export default reviews;
