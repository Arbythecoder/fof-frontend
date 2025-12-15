// Product Types
export interface Product {
  _id: string;
  name: string;
  description: string;
  shortDescription?: string;
  price: number;
  salePrice?: number;
  category: 'mocktail' | 'salad' | 'bundle';
  deliveryType: 'daily' | 'weekly' | 'party' | 'bottomless';
  images: string[];
  thumbnail: string;
  ingredients: string[];
  allergens: string[];
  nutritionFacts?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    sugar: number;
  };
  dietary: string[]; // 'vegan', 'gluten-free', 'sugar-free'
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviewCount: number;
  sizes?: Array<{
    size: string;
    price: number;
  }>;
  createdAt: string;
  updatedAt: string;
}

// User Types
export interface User {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  role: 'user' | 'admin';
  avatar?: string;
  addresses?: Address[];
  orders?: string[];
  wishlist?: string[];
  savedRecipes?: string[];
  loyaltyPoints?: number;
  createdAt: string;
}

export interface Address {
  _id: string;
  label: string; // 'Home', 'Office', etc.
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postcode: string;
  isDefault: boolean;
}

// Cart Types
export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
  customization?: RecipeCustomization;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
}

// Order Types
export interface Order {
  _id: string;
  orderNumber: string;
  user: string | User;
  items: CartItem[];
  deliveryAddress: Address;
  deliveryType: 'standard' | 'express' | 'scheduled';
  deliveryDate?: string;
  deliveryTime?: string;
  paymentMethod: 'card' | 'paypal';
  paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded';
  orderStatus: 'pending' | 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered' | 'cancelled';
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  specialInstructions?: string;
  createdAt: string;
  updatedAt: string;
}

// Subscription Types
export interface Subscription {
  _id: string;
  user: string | User;
  type: 'weekly' | 'bottomless';
  plan: {
    name: string;
    frequency: 'weekly' | 'daily';
    itemCount: number;
    size?: string;
  };
  items: Product[];
  deliveryAddress: Address;
  deliveryDay?: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  status: 'active' | 'paused' | 'cancelled';
  nextDelivery: string;
  price: number;
  discount: number;
  paymentMethod: 'card' | 'paypal';
  startDate: string;
  endDate?: string;
}

// Recipe Builder Types
export interface RecipeCustomization {
  name: string;
  base: string;
  flavors: string[];
  mixins: string[];
  toppings: string[];
  size: string;
  estimatedCalories: number;
  price: number;
}

export interface SavedRecipe extends RecipeCustomization {
  _id: string;
  user: string;
  createdAt: string;
  likes: number;
  isPublic: boolean;
}

// Event Booking Types
export interface EventBooking {
  _id: string;
  user?: string | User;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  eventType: 'wedding' | 'corporate' | 'birthday' | 'other';
  eventDate: string;
  eventTime: string;
  guestCount: number;
  location: string;
  services: string[];
  menuPreferences?: string;
  dietaryRequirements?: string;
  inspirationImages?: string[];
  specialRequests?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  estimatedPrice?: number;
  createdAt: string;
}

// Auth Types
export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  phone?: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

// Filter/Search Types
export interface ProductFilters {
  category?: 'mocktail' | 'salad' | 'bundle';
  deliveryType?: 'daily' | 'weekly' | 'party' | 'bottomless';
  minPrice?: number;
  maxPrice?: number;
  dietary?: string[];
  inStock?: boolean;
  featured?: boolean;
  search?: string;
  sortBy?: 'popular' | 'newest' | 'price-asc' | 'price-desc' | 'rating';
  page?: number;
  limit?: number;
}

// Newsletter Types
export interface NewsletterSubscriber {
  email: string;
  preferences?: {
    newProducts: boolean;
    recipes: boolean;
    events: boolean;
    specialOffers: boolean;
  };
}

// Contact Form Types
export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  orderId?: string;
}
