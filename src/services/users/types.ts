import { User } from '../auth/types';

export interface UserResponse {
  users: User[];
}

export interface UserRequest {
  name: string;
  email: string;
}