import axios from 'axios';
import { User } from './types/User';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1/cms/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUsers = async (): Promise<User[]> => {
  return api.get('/users');
};