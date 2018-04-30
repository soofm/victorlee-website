// const ReactStrap = require('react-strap');

require('html-loader!./index.html');
require('./styles/app.scss');

function importAll(r) {
  const images = {};
  r.keys().array.forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));
