var webpack = require('webpack');
const path = require('path');
module.exports = {
  //...
  resolve: {
    modules: [
      path.resolve(__dirname, '../Libraries'), 'node_modules',
    ],
  }
};
