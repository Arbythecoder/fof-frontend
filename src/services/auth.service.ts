import api from './api';
import { API_ENDPOINTS, STORAGE_KEYS } from '../utils/constants';
import type { AuthResponse, LoginCredentials, RegisterData, User } from '../types';

export const authService = {
  // Login
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await api.post<any>(API_ENDPOINTS.LOGIN, credentials);

    // Backend returns { status, token, data: { user } }
    const token = response.data.token;
    const user = response.data.data?.user || response.data.user;

    console.log('Login response:', response.data);
    console.log('Extracted token:', token);
    console.log('Extracted user:', user);

    // Save token and user to localStorage
    if (token && user) {
      localStorage.setItem(STORAGE_KEYS.TOKEN, token);
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    }

    return { token, user };
  },

  // Register
  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await api.post<any>(API_ENDPOINTS.REGISTER, data);

    // Backend returns { status, token, data: { user } }
    const token = response.data.token;
    const user = response.data.data?.user || response.data.user;

    console.log('Register response:', response.data);
    console.log('Extracted token:', token);
    console.log('Extracted user:', user);

    // Save token and user to localStorage
    if (token && user) {
      localStorage.setItem(STORAGE_KEYS.TOKEN, token);
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    }

    return { token, user };
  },

  // Logout
  logout: (): void => {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.CART);
  },

  // Get current user
  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem(STORAGE_KEYS.USER);
    return userStr ? JSON.parse(userStr) : null;
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(STORAGE_KEYS.TOKEN);
  },

  // Get token
  getToken: (): string | null => {
    return localStorage.getItem(STORAGE_KEYS.TOKEN);
  },

  // Fetch user profile
  fetchUserProfile: async (): Promise<User> => {
    const response = await api.get<{ user: User }>(API_ENDPOINTS.ME);
    return response.data.user;
  },

  // Update profile
  updateProfile: async (data: Partial<User>): Promise<User> => {
    const response = await api.put<{ user: User }>(API_ENDPOINTS.ME, data);

    // Update localStorage
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(response.data.user));

    return response.data.user;
  },

  // Forgot password
  forgotPassword: async (email: string): Promise<void> => {
    await api.post(API_ENDPOINTS.FORGOT_PASSWORD, { email });
  },

  // Reset password
  resetPassword: async (token: string, password: string): Promise<void> => {
    await api.post(API_ENDPOINTS.RESET_PASSWORD, { token, password });
  },
};
