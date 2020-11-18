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

envKeys['process.env.NODE_ENV'] = JSON.stringify(process.env.NODE_ENV);

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
      ? path.join(__dirname, 'frontend', 'src', 'userIndex.jsx')
      : path.join(__dirname, 'frontend', 'src', 'index.jsx');

  const publicPath = env.type === 'user' ? path.join('public', 'images') : '/';

  envKeys['process.env.TYPE'] = JSON.stringify(env.type);
  envKeys['process.env.PUBLIC_URL'] = JSON.stringify(publicPath);

  return {
    entry: entryFile,
    output: {
      // bundle.txt is used to ensure that gmail allows sending it
      filename: env.type === 'user' ? 'bundle.txt' : 'bundle.js',
      path: outputPath,
      publicPath,
    },
    node: {
      fs: 'empty',
    },
    module: {
      rules: [
        {
          test: /redux$/,
          resolve: {
            mainFields: ['module', 'main', 'unpkg'],
          },
        },
        {
          test: /\.js(x?)$/,
          exclude: [/node_modules/],
          use: [{ loader: 'babel-loader' }],
        },
        {
          test: /\.js(x?)$/,
          exclude: [/node_modules/, /\user.(\w+).js(x?)/i],
          use: [{ loader: 'eslint-loader' }],
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
