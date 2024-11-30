import api from '../api';
import { UserResponse, UserRequest } from './types';
import { User } from '../auth/types';

export const getUsers = async (): Promise<UserResponse> => {
  try {
    const response = await api.get<UserResponse>('users');
    return response.data;
  } catch (error) {
    console.log("Error : " + error);
    throw new Error('Failed to fetch users');
  }
};

export const getUser = async (id: string): Promise<User> => {
  try {
    const response = await api.get<User>(`users/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error : " + error);
    throw new Error('Failed to fetch user');
  }
};

export const addUser = async (user: UserRequest): Promise<User> => {
  try {
    const response = await api.post<User>('users', user);
    return response.data;
  } catch (error) {
    console.log("Error : " + error);
    throw new Error('Failed to add user');
  }
};

export const updateUser = async (id: string, user: UserRequest): Promise<User> => {
  try {
    const response = await api.put<User>(`users/${id}`, user);
    return response.data;
  } catch (error) {
    console.log("Error : " + error);
    throw new Error('Failed to update user');
  }
};

export const deleteUser = async (id: string): Promise<void> => {
  try {
    await api.delete(`users/${id}`);
  } catch (error) {
    console.log("Error : " + error);
    throw new Error('Failed to delete user');
  }
};