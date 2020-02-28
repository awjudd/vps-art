const path = require('path')

module.exports = ({ config, mode }) => {

  config.module.rules.push({
    test: /\.css$/,
    loaders: [
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          config: {
            path: './.storybook/',
          },
        },
      },
    ],

    include: path.resolve(__dirname, '../storybook/'),
  });

  return {
    ...config,
    resolve: {
      alias: {
        '@': path.dirname(path.resolve(__dirname) + '/../../')
      }
    }
  };
};

/*module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../../')
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.dirname(path.resolve(__dirname) + '../')
    }
  }
}
*/
