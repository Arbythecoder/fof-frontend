import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { authService } from '../services/auth.service';
import type { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    console.log('AuthContext: Checking for existing user...');
    const currentUser = authService.getCurrentUser();
    console.log('AuthContext: Current user from localStorage:', currentUser);
    if (currentUser) {
      setUser(currentUser);
      console.log('AuthContext: User restored from localStorage');
    } else {
      console.log('AuthContext: No user found in localStorage');
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    console.log('AuthContext: Login called with email:', email);
    const response = await authService.login({ email, password });
    console.log('AuthContext: Login response received:', response);
    setUser(response.user);
    console.log('AuthContext: User state updated');
  };

  const register = async (data: any) => {
    console.log('AuthContext: Register called with data:', { ...data, password: '***' });
    const response = await authService.register(data);
    console.log('AuthContext: Register response received:', response);
    setUser(response.user);
    console.log('AuthContext: User state updated after registration');
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
