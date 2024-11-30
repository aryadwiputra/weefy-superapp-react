import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1/cms/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor untuk menambahkan token ke header
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;