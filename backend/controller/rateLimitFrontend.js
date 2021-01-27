const rateLimit = require('express-rate-limit');

const frontendLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 min window
  max: process.env.NODE_ENV !== 'production' ? Infinity : 100, // start blocking after 100 requests
  message:
    'Frontend Limit Exceeded. Too many requests from this IP, please try again in 5 mins.',
});

module.exports = { frontendLimiter };
