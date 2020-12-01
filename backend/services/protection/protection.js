const CryptoJS = require('crypto-js');
const { encryption, decryption } = require('./encrypt_decrypt');

/**
 * We need to protect the REST API endpoints from external use
 * Bot protection will be done by Google Re-Captcha
 * The frontend will pass a apiKey parameter for every API request
 * It will be the current date encrypted based on a secretKey
 * The backend will validate the apiKey parameter and decide whether to accept or reject the request
 */

const MaxValidDifference = 6000; // 6 seconds

// Returns false if invalid request
const protectAPI = (encryptedText, lessSecure = false) => {
  try {
    const decryptedText = decryption(encryptedText).toString(CryptoJS.enc.Utf8);
    const currentTime = new Date().getTime();
    const requestTimeStamp = parseInt(decryptedText);
    if (isNaN(requestTimeStamp || currentTime < requestTimeStamp)) {
      return false;
    }
    if (lessSecure) {
      return requestTimeStamp < currentTime;
    }
    const timeDifference = currentTime - requestTimeStamp;
    return timeDifference <= MaxValidDifference;
  } catch (_err) {
    return false;
  }
};

module.exports = { protectAPI };
