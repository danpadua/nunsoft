const withPlugins = require('next-compose-plugins');
const withOptimizedImages  = require('next-optimized-images');
const withImages = require('next-images')

const nextConfiguration = {
};

module.exports = withPlugins([withOptimizedImages, withImages], nextConfiguration);
