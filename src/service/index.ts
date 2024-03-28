import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api';

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    console.log('response', response);
    if (response.status === 200 && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { axios };
