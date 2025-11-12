import api from './api';
import { API_ENDPOINTS } from '../utils/constants';
import type { Product, ProductFilters, PaginatedResponse } from '../types';

export const productsService = {
  // Get all products with filters
  getProducts: async (filters?: ProductFilters): Promise<PaginatedResponse<Product>> => {
    const response = await api.get<PaginatedResponse<Product>>(API_ENDPOINTS.PRODUCTS, {
      params: filters,
    });
    return response.data;
  },

  // Get single product by ID
  getProductById: async (id: string): Promise<Product> => {
    const response = await api.get<{ product: Product }>(API_ENDPOINTS.PRODUCT_BY_ID(id));
    return response.data.product;
  },

  // Get featured products
  getFeaturedProducts: async (): Promise<Product[]> => {
    const response = await api.get<{ products: Product[] }>(API_ENDPOINTS.FEATURED_PRODUCTS);
    return response.data.products;
  },

  // Search products
  searchProducts: async (query: string, filters?: ProductFilters): Promise<PaginatedResponse<Product>> => {
    const response = await api.get<PaginatedResponse<Product>>(API_ENDPOINTS.PRODUCTS, {
      params: {
        search: query,
        ...filters,
      },
    });
    return response.data;
  },
};
