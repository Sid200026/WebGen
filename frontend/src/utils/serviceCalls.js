import axios from 'axios';
import { generateAPIKey } from './generateAPIKey';

const logErrorToExpress = (err) => {
  const apiKey = generateAPIKey();
  return axios.post('/api/log/', { message: err, apiKey });
};

export { logErrorToExpress };
