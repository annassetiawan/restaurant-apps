// eslint-disable-next-line import/no-extraneous-dependencies
const sharp = require('sharp');
const path = require('path');

const destination = path.resolve(__dirname, 'dist/imgs');

// mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
sharp(`${destination}/hero.jpg`)
  .resize(800)
  .toFile(path.resolve(__dirname, `${destination}/hero-large.jpg`));

// mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
sharp(`${destination}/hero.jpg`)
  .resize(480)
  .toFile(path.resolve(__dirname, `${destination}/hero-small.jpg`));
