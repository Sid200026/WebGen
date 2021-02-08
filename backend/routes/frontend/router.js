const express = require('express');
const path = require('path');
const router = express.Router();
const { frontendLimiter } = require('../../controller/rateLimitFrontend');
const { logger } = require('../../logger/logger');
const { addVisitor } = require('../../models/queries');

/************************** Sending the React App ************************* */

router.use('*', frontendLimiter);
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
  addVisitor()
    .then(() => {})
    .catch(() => {});
});

module.exports = { router };
