/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favouriterestaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'cy6zhs7cstgkfvo96fd' });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'cy6zhs7cstgkfvo96fd' });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'cy6zhs7cstgkfvo96fd' });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant('cy6zhs7cstgkfvo96fd');

    expect(restaurant).toEqual({ id: 'cy6zhs7cstgkfvo96fd' });
    FavoriteRestaurantIdb.deleteRestaurant('cy6zhs7cstgkfvo96fd');
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'cy6zhs7cstgkfvo96fd' });

    await FavoriteRestaurantIdb.putRestaurant({ id: 'cy6zhs7cstgkfvo96fd' });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 'cy6zhs7cstgkfvo96fd' }]);

    FavoriteRestaurantIdb.deleteRestaurant('cy6zhs7cstgkfvo96fd');
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
