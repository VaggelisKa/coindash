module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            styles: './src/styles',
            components: './src/components',
            pages: './src/pages',
            images: './src/images',
            context: './src/context',
            helpers: './src/helpers'
          }
        }
      ]
    ]
  };
};
