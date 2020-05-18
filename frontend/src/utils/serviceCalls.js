import axios from 'axios';

const logErrorToExpress = (err) => {
  return axios.post('/api/log/', { message: err });
};

export { logErrorToExpress };
