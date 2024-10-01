// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // Ignore source map warnings for plotly.js
        webpackConfig.module.rules.push({
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          exclude: /node_modules\/plotly\.js/,
        });
        return webpackConfig;
      },
    },
  };
  