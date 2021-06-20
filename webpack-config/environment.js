const path = require('path');

module.exports = {
  paths: {
    source: path.resolve(__dirname, '../src/'),
    output: path.resolve(__dirname, '../dist/'),
    node_modules: path.resolve(__dirname, '../node_modules/'),
  },
  server: {
    host: 'localhost',
    port: 8000,
  },
  limits: {
    images: 8192,
    fonts: 8192,
  },
};
