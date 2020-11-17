const dotenvfile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
require('dotenv').config({ path: dotenvfile });

const USER = process.env.DATABASE_USER;
const PASSWORD = process.env.DATABASE_PASSWORD;
const NAME = process.env.DATABASE_PASSWORD;
const HOST = process.env.DATABSE_HOST;
const PORT = process.env.DATABASE_PORT;

const dbConfig = {
  user: USER,
  host: HOST,
  database: NAME,
  password: PASSWORD,
  port: PORT,
};

module.exports = { dbConfig };
