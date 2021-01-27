const rateLimit = require('express-rate-limit');

const submitLimiter = rateLimit({
  windowMs: 6 * 60 * 60 * 1000, // 6 hours window
  max: process.env.NODE_ENV !== 'production' ? Infinity : 4, // start blocking after 4 requests
  message:
    'Submit Limit Exceeded. Too many submits from this IP, please try again in 6 hours.',
});

module.exports = { submitLimiter };
