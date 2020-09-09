import RestaurantSource from '../data/restaurant-source';

const buttonInitiatorDetails = (id) => {
  const buttons = document.querySelectorAll('#button');
  const contentsDetail = document.querySelectorAll('.details_content');

  const handleClick = (e) => {
    e.preventDefault();
    const { name } = e.currentTarget.dataset;
    // Buttons
    console.log(e.currentTarget.dataset.name);

    buttons.forEach((button) => button.classList.remove('active_btn'));
    e.currentTarget.classList.add('active_btn');
    contentsDetail.forEach((content) => content.classList.remove('active'));

    [...contentsDetail]
      .filter((content) => content.dataset.name === name)
      .map((content) => content.classList.add('active'));
  };

  buttons.forEach((button) => button.addEventListener('click', handleClick));

  const showResponseMessage = (message = 'Check your internet connection') => {
    // eslint-disable-next-line no-alert
    alert(message);
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

export default buttonInitiatorDetails;
