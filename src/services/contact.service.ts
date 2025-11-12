import api from './api';
import { API_ENDPOINTS } from '../utils/constants';
import type { ContactMessage, ApiResponse } from '../types';

export const contactService = {
  // Send contact form message
  sendMessage: async (data: ContactMessage): Promise<ApiResponse<null>> => {
    const response = await api.post<ApiResponse<null>>(API_ENDPOINTS.CONTACT, data);
    return response.data;
  },
};
