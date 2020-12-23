import axios from 'axios';
import { generateAPIKey } from './generateAPIKey';

const logErrorToExpress = (err) => {
  const apiKey = generateAPIKey();
  return axios.post('/api/log/', { message: err, apiKey });
};

const postRequest = (path, data) => {
  const apiKey = generateAPIKey();
  return axios.post(path, { ...data, apiKey });
};

const getRequest = (path) => {
  return axios.get(path);
};

export { logErrorToExpress, postRequest, getRequest };
