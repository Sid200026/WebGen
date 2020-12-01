const CryptoJS = require('crypto-js');
const dotenvfile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
require('dotenv').config({ path: dotenvfile });

const secretKey = process.env.SECRET_KEY || 'random@123';

const encryption = (text) => CryptoJS.AES.encrypt(text, secretKey).toString();

const decryption = (text) => CryptoJS.AES.decrypt(text, secretKey);

module.exports = { encryption, decryption };
