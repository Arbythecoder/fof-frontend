// API Base URL
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/api/auth/login',
  REGISTER: '/api/auth/register',
  LOGOUT: '/api/auth/logout',
  ME: '/api/auth/me',
  FORGOT_PASSWORD: '/api/auth/forgot-password',
  RESET_PASSWORD: '/api/auth/reset-password',

  // Products
  PRODUCTS: '/api/products',
  PRODUCT_BY_ID: (id: string) => `/api/products/${id}`,
  FEATURED_PRODUCTS: '/api/products/featured',

  // Orders
  ORDERS: '/api/orders',
  ORDER_BY_ID: (id: string) => `/api/orders/${id}`,
  USER_ORDERS: '/api/orders/user',

  // Subscriptions
  SUBSCRIPTIONS: '/api/subscriptions',
  SUBSCRIPTION_BY_ID: (id: string) => `/api/subscriptions/${id}`,
  USER_SUBSCRIPTIONS: '/api/subscriptions/user',

  // Cart
  CART: '/api/cart',
  ADD_TO_CART: '/api/cart/add',
  UPDATE_CART: '/api/cart/update',
  REMOVE_FROM_CART: '/api/cart/remove',
  CLEAR_CART: '/api/cart/clear',

  // Events
  EVENTS: '/api/events',
  EVENT_BY_ID: (id: string) => `/api/events/${id}`,

  // Newsletter
  NEWSLETTER_SUBSCRIBE: '/api/newsletter/subscribe',

  // Contact
  CONTACT: '/api/contact',

  // Recipes
  RECIPES: '/api/recipes',
  RECIPE_BY_ID: (id: string) => `/api/recipes/${id}`,
  USER_RECIPES: '/api/recipes/user',
  COMMUNITY_RECIPES: '/api/recipes/community',
};

// Local Storage Keys
export const STORAGE_KEYS = {
  TOKEN: 'fof_auth_token',
  USER: 'fof_user',
  CART: 'fof_cart',
  THEME: 'fof_theme',
};

// Product Categories
export const PRODUCT_CATEGORIES = {
  MOCKTAIL: 'mocktail',
  SALAD: 'salad',
  BUNDLE: 'bundle',
} as const;

// Delivery Types
export const DELIVERY_TYPES = {
  DAILY: 'daily',
  WEEKLY: 'weekly',
  PARTY: 'party',
  BOTTOMLESS: 'bottomless',
} as const;

// Dietary Options
export const DIETARY_OPTIONS = [
  'vegan',
  'vegetarian',
  'gluten-free',
  'dairy-free',
  'sugar-free',
  'nut-free',
] as const;

// Order Status
export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PREPARING: 'preparing',
  OUT_FOR_DELIVERY: 'out-for-delivery',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
} as const;

// Payment Methods
export const PAYMENT_METHODS = {
  CARD: 'card',
  PAYPAL: 'paypal',
} as const;

// Recipe Builder Options
export const RECIPE_OPTIONS = {
  BASES: [
    { id: 'sprite', name: 'Sprite', price: 0 },
    { id: 'soda', name: 'Soda Water', price: 0 },
    { id: 'tonic', name: 'Tonic Water', price: 0.5 },
    { id: 'juice-apple', name: 'Apple Juice', price: 1 },
    { id: 'juice-orange', name: 'Orange Juice', price: 1 },
    { id: 'juice-cranberry', name: 'Cranberry Juice', price: 1 },
  ],
  FLAVORS: [
    { id: 'passion-fruit', name: 'Passion Fruit', price: 1.5, calories: 20 },
    { id: 'mint', name: 'Fresh Mint', price: 0.5, calories: 5 },
    { id: 'lime', name: 'Lime', price: 0.5, calories: 10 },
    { id: 'ginger', name: 'Ginger', price: 1, calories: 15 },
    { id: 'cucumber', name: 'Cucumber', price: 0.75, calories: 8 },
    { id: 'strawberry', name: 'Strawberry', price: 1.5, calories: 25 },
    { id: 'mango', name: 'Mango', price: 1.5, calories: 30 },
    { id: 'pineapple', name: 'Pineapple', price: 1.5, calories: 28 },
  ],
  MIXINS: [
    { id: 'chia', name: 'Chia Seeds', price: 1, calories: 40 },
    { id: 'berries', name: 'Mixed Berries', price: 2, calories: 35 },
    { id: 'cucumber-slice', name: 'Cucumber Slices', price: 0.5, calories: 5 },
    { id: 'citrus', name: 'Citrus Segments', price: 1, calories: 20 },
  ],
  TOPPINGS: [
    { id: 'mint-leaf', name: 'Mint Leaf', price: 0.25, calories: 0 },
    { id: 'lime-wheel', name: 'Lime Wheel', price: 0.25, calories: 2 },
    { id: 'edible-flower', name: 'Edible Flowers', price: 0.5, calories: 0 },
    { id: 'orange-peel', name: 'Orange Peel Twist', price: 0.25, calories: 1 },
  ],
  SIZES: [
    { id: '330ml', name: '330ml', price: 0 },
    { id: '500ml', name: '500ml', price: 1 },
    { id: '1l', name: '1 Litre', price: 3 },
    { id: '5l', name: '5 Litres (Bottomless)', price: 12 },
  ],
};

// Social Media Links
export const SOCIAL_LINKS = {
  INSTAGRAM: 'https://instagram.com/fofdrinks',
  FACEBOOK: 'https://facebook.com/fofdrinks',
  TWITTER: 'https://twitter.com/fofdrinks',
  TIKTOK: 'https://tiktok.com/@fofdrinks',
};

// Contact Info
export const CONTACT_INFO = {
  EMAIL: 'hello@fofdrinks.co.uk',
  PHONE: '+44 xxx xxx xxxx',
  ADDRESS: 'London, United Kingdom',
  HOURS: 'Mon-Sat: 8am-8pm',
};

// Free Delivery Threshold
export const FREE_DELIVERY_THRESHOLD = 20;

// Delivery Fees
export const DELIVERY_FEES = {
  STANDARD: 0, // Free over £20
  EXPRESS: 5,
  SCHEDULED: 2,
};

// Default Pagination
export const DEFAULT_PAGE_SIZE = 12;

// Image Placeholder
export const PLACEHOLDER_IMAGE = '/placeholder-product.jpg';

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN: 'Welcome back! 🎉',
  REGISTER: 'Account created successfully! Welcome to FoF! 🥳',
  LOGOUT: 'See you soon! 👋',
  ADD_TO_CART: 'Added to cart! 🛒',
  ORDER_PLACED: 'Order placed successfully! 🎊',
  SUBSCRIPTION_CREATED: 'Subscription activated! 🔄',
  RECIPE_SAVED: 'Recipe saved! 💾',
  MESSAGE_SENT: 'Message sent! We\'ll get back to you soon! 📧',
};

// Error Messages
export const ERROR_MESSAGES = {
  GENERIC: 'Oops! Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'Please login to continue.',
  NOT_FOUND: 'Page not found.',
  SERVER_ERROR: 'Server error. Please try again later.',
};
