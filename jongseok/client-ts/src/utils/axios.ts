import axios from 'axios';

// create base url
export const API = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? (axios.defaults.baseURL = 'http://localhost:5000/v1')
      : (axios.defaults.baseURL = '/api/v1'),
});

// auto input axios config
export const setAuthToken = (token?: string) => {
  if (token) {
    API.defaults.headers.authorization = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.authorization;
  }
};
