/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
Feature('Liking Movies');

Before((I) => {
  I.amOnPage('/#/favourite');
});

Scenario('showing empty liked movies', (I) => {
  I.seeElement('.movie_not_found');
  I.see('No Favorite Restaurant', '.movie_not_found h3');
});
