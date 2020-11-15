const dotenvfile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
require('dotenv').config({ path: dotenvfile });

const EMAIL = process.env.EMAIL_USER;
const PASSWORD = process.env.EMAIL_PASSWORD;

const emailConfig = {
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
};

module.exports = { emailConfig };
