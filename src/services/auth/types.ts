export interface User {
    id: string;
    name: string;
    email: string;
  }
  
  export interface LoginResponse {
    user: User;
    token: string;
  }
  
  export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
  }