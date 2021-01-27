import { encrypt } from './encryptDecrypt';

export const generateAPIKey = () => {
  const currentTime = new Date().getTime();
  return encrypt(`${currentTime}`);
};
