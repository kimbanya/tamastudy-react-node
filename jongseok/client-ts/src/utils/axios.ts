import axios from 'axios';

const hasToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return { authorization: `Bearer ${token}` };
  } else {
    return { authorization: null };
  }
};

// create base url
export const API = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? (axios.defaults.baseURL = 'http://localhost:5000/v1')
      : (axios.defaults.baseURL = '/api/v1'),
  headers: hasToken(),
});

// auto input axios config
export const setAuthToken = (token?: string) => {
  if (token) {
    console.log('Token이 존재합니다. from setAuthToken');
    axios.defaults.headers.authorization = `Bearer ${token}`;
  } else {
    console.log('Token이 존재하지 않습니다. from setAuthToken');
    delete axios.defaults.headers.authorization;
  }
};
