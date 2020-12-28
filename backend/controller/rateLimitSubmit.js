const redis = require('ioredis');
const { REDIS_HOST, REDIS_PORT } = require('../constants/REDIS_Service');
const RateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');

const redisClient = redis.createClient({
  enable_offline_queue: false,
  port: REDIS_PORT,
  host: REDIS_HOST,
});

const submitLimiter = new RateLimit({
  store: new RedisStore({
    client: redisClient,
  }),
  windowMs: 6 * 60 * 60 * 1000, // 6 hours window
  max: process.env.NODE_ENV !== 'production' ? Infinity : 4, // start blocking after 4 requests
  message:
    'Submit Limit Exceeded. Too many submits from this IP, please try again in 6 hours.',
});

module.exports = { submitLimiter };
