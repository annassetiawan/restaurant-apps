/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favourite');
});

Scenario('unliking restaurants', async ({ I }) => {
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

  I.click(locate('.content .content__inner .content__details a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('.restaurant_not_found');
  I.see('No Favourite Restaurant', '.restaurant_not_found h3');
});
