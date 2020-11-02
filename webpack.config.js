const path = require('path');
const webpack = require('webpack');

// Use .env in development mode, .env.production in production mode
const dotenvfile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';

// call dotenv and it will return an Object with a parsed key
const environ = require('dotenv').config({ path: dotenvfile }).parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(environ).reduce((prev, next) => {
  // eslint-disable-next-line no-param-reassign
  prev[`process.env.${next}`] = JSON.stringify(environ[next]);
  return prev;
}, {});

envKeys.NODE_ENV = JSON.stringify(process.env.NODE_ENV);

module.exports = (env) => {
  // We can have two prod types
  // 1. app -> To generate the build for the app
  // 2. user -> To generate the build for users
  const outputPath =
    env.type === 'user'
      ? path.resolve(__dirname, 'backend', 'user', 'build')
      : path.resolve(__dirname, 'backend', 'public', 'build');
  const entryFile =
    env.type === 'user'
      ? path.join(__dirname, 'frontend', 'src', 'user.jsx')
      : path.join(__dirname, 'frontend', 'src', 'index.jsx');

  return {
    entry: entryFile,
    output: {
      filename: 'bundle.js',
      path: outputPath,
    },
    node: {
      fs: 'empty',
    },
    module: {
      rules: [
        {
          test: /\.js(x?)$/,
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }],
        },
        {
          test: [/\.s[ac]ss$/i, /\.css$/i],
          use: [
            // style-loader
            { loader: 'style-loader' },
            // css-loader
            { loader: 'css-loader' },
            // sass-loader
            { loader: 'sass-loader' },
          ],
        },
      ],
    },
    plugins: [new webpack.DefinePlugin(envKeys)],
  };
};
