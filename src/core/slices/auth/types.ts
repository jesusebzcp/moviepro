export interface LoginArgs {
  identifier: string;
  password: string;
}

export interface AuthResponse {
  jwt: string;
  user: User;
}

export interface User {
  v: number;
  id: string;
  blocked: boolean;
  confirmed: boolean;
  createdAt: Date;
  email: string;
  userID: string;
  provider: string;
  role: Role;
  updatedAt: Date;
  username: string;
}

export interface Role {
  v: number;
  id: string;
  description: string;
  roleID: string;
  name: string;
  type: string;
}
