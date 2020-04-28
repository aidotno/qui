const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader'
      }
    ],
    include: path.resolve(__dirname, '../')
  });
  return config;
};
