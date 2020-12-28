const redis = require('ioredis');
const { REDIS_HOST, REDIS_PORT } = require('../constants/REDIS_Service');
const RateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');

const redisClient = redis.createClient({
  enable_offline_queue: false,
  port: REDIS_PORT,
  host: REDIS_HOST,
});

const instantLimiter = new RateLimit({
  store: new RedisStore({
    client: redisClient,
  }),
  windowMs: 2 * 60 * 1000, // 2 minute window
  max: process.env.NODE_ENV !== 'production' ? Infinity : 5, // start blocking after 5 requests
  message:
    'Quick Limit Exceeded. Too many uploads from this IP, please try again in 2 minutes.',
});

const overallLimiter = new RateLimit({
  store: new RedisStore({
    client: redisClient,
  }),
  windowMs: 3 * 60 * 60 * 1000, // 3 hours window
  max: process.env.NODE_ENV !== 'production' ? Infinity : 60, // start blocking after 60 requests
  message:
    'Overall Limit Exceeded. Too many uploads from this IP, please try again in 3 hours.',
});

module.exports = { instantLimiter, overallLimiter };
