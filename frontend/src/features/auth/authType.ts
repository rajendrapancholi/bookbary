// Define User interface
export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  role: string;
}

// Define AuthState interface
export interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
}
