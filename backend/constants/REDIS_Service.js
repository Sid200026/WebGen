const dotenvfile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
require('dotenv').config({ path: dotenvfile });

const REDIS_URL = process.env.REDIS_URL;

const redisConfig = REDIS_URL;

const EMAIL_QUEUE_TYPES = {
  VERIFICATION_KEY: 'VERIFICATION_KEY',
  FAILURE_EMAIL: 'FAILURE_EMAIL',
  SUCCESS_EMAIL: 'SUCCESS_EMAIL',
};

module.exports = { redisConfig, EMAIL_QUEUE_TYPES };
