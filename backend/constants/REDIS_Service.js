const dotenvfile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
require('dotenv').config({ path: dotenvfile });

const REDIS_URL = process.env.REDIS_URL;

const redisConfig = REDIS_URL;

module.exports = { redisConfig };
