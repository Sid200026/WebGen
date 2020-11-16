const CryptoJS = require('crypto-js');
const { encryption, decryption } = require('../services/protection/encrypt_decrypt');
const { protectAPI } = require('../services/protection/protection');

describe('Test Encryption Decryption', () => {
  test('Decrypted text should match original text', () => {
    const originalText = 'Hi how are you';
    const encryptedText = encryption(originalText);
    const decryptedText = decryption(encryptedText).toString(CryptoJS.enc.Utf8);
    expect(decryptedText).toBe(originalText);
  });
});

describe('Protect API Function should accept within range of 2 seconds', () => {
  test('Function should return true', () => {
    const encryptedText = encryption(`${new Date().getTime()}`);
    const response = protectAPI(encryptedText);
    expect(response).toBe(true);
  });
});

describe('Protect API Function should reject outside range of 2 seconds', () => {
  test('Function should return false', () => {
    const encryptedText = encryption(`${new Date().getTime() - 2.1 * 1000}`); // -2.1 seconds from current time
    const response = protectAPI(encryptedText);
    expect(response).toBe(false);
  });
});
