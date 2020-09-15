/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { registerRoute } from 'workbox-routing/registerRoute';
import { NetworkFirst } from 'workbox-strategies/NetworkFirst';
import { CacheFirst } from 'workbox-strategies/CacheFirst';

precacheAndRoute(self.__WB_MANIFEST);
registerRoute(
  /https:\/\/dicoding-restaurant-api\.el\.r\.appspot\.com\/list/,
  new NetworkFirst({
    cacheName: 'restaurants',
  })
);
registerRoute(
  /https:\/\/dicoding-restaurant-api\.el\.r\.appspot\.com\/detail/,
  new NetworkFirst({
    cacheName: 'restaurants',
  })
);
registerRoute(
  /https:\/\/dicoding-restaurant-api\.el\.r\.appspot\.com\/images/,
  new NetworkFirst({
    cacheName: 'restaurants',
  })
);

registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new CacheFirst({
    cacheName: 'images',
  })
);
