import api from '../api';
import { LoginResponse, RegisterRequest, User } from './types';

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await api.post<LoginResponse>('auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw new Error('Login failed');
  }
};

export const register = async (data: RegisterRequest): Promise<User> => {
  try {
    const response = await api.post<User>('auth/register', data);
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error);
    throw new Error('Registration failed');
  }
};