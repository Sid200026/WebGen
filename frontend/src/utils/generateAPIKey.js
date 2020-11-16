import { encrypt } from './encrypt_decrypt';

export const generateAPIKey = () => {
  const currentTime = new Date().getTime();
  return encrypt(`${currentTime}`);
};
