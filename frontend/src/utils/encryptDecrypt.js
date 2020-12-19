import { encrypt, decrypt } from 'crypto-js/aes';
import enc from 'crypto-js/enc-utf8';

const secretKey = process.env.SECRET_KEY || 'random@123';

const encryption = (text) => encrypt(text, secretKey).toString();

const decryption = (text) => decrypt(text, secretKey).toString(enc);

export { encryption as encrypt, decryption as decrypt };
