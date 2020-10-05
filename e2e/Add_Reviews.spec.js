/* eslint-disable no-undef */
const assert = require('assert');

Feature('Add Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('add a review on restaurant', async ({ I }) => {
  I.seeElement('.content');
  I.click(locate('.content .content__inner .content__details a').first());
  I.click(locate('.button_details_content .button').last());
  I.seeElement('.form-group-container');

  const nameInput = 'Testing Codecept';
  const reviewInput = 'test 5';

  I.fillField('#inputName', nameInput);
  I.fillField('#inputReview', reviewInput);
  I.click('.btn-success');

  const lastReview = locate('.review_details_item .review_details_desc').last();
  const lastReviewMessage = await I.grabTextFrom(lastReview);

  assert.strictEqual(lastReviewMessage, reviewInput);
});
