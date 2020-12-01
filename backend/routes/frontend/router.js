const express = require('express');
const path = require('path');
const router = express.Router();
const { logger } = require('../../logger/logger');

/************************** Sending the React App ************************* */

router.route('*').get((_req, res, next) => {
  const options = {
    root: path.join(__dirname, '../../views'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
    },
    cacheControl: true,
  };
  // Send the React App when the route is BASE_URL/
  res.sendFile('index.html', options, (err) => {
    if (err) {
      logger.error(err);
      next(err);
    }
  });
});

module.exports = { router };
