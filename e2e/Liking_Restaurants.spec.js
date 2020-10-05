/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favourite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.restaurant_not_found');
  I.see('No Favourite Restaurant', '.restaurant_not_found h3');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('No Favourite Restaurant', '.restaurant_not_found h3');

  I.amOnPage('/');

  I.seeElement('.content');
  const restaurantName = locate('.content .content__inner .content__details .content__name h1').first();
  const firstRestaurantTitle = await I.grabTextFrom(restaurantName);
  I.click(locate('.content .content__inner .content__details a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('.content');
  const likedRestaurantTitle = await I.grabTextFrom('.content__name h1');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
