// Sample product data with real image paths
// Replace these with actual products from your MongoDB database

export type DeliveryType = 'daily' | 'weekly' | 'party' | 'bottomless';

export interface ProductData {
  id: number;
  name: string;
  category: 'mocktail' | 'salad';
  deliveryType: DeliveryType;
  description: string;
  price: number;
  salePrice?: number;
  image: string; // Path to image in public folder
  rating: number;
  reviews: number;
  badge?: 'sale' | 'new' | 'popular';
  emoji: string; // Fallback emoji when image not available
}

export const sampleProducts: ProductData[] = [
  // Daily Delivery Products
  {
    id: 1,
    name: 'Passion Fruit Paradise',
    category: 'mocktail',
    deliveryType: 'daily',
    description: 'Tropical blend of passion fruit, mango, and fresh mint - Perfect for daily refreshment',
    price: 7.50,
    salePrice: 5.00,
    image: '/images/mocktails1.jpg',
    rating: 5,
    reviews: 24,
    badge: 'sale',
    emoji: '🍹',
  },
  {
    id: 2,
    name: 'Berry Bliss',
    category: 'mocktail',
    deliveryType: 'daily',
    description: 'Fresh berries with sparkling water and mint - Daily delivery available',
    price: 6.50,
    image: '/images/mocktails2.jpg',
    rating: 5,
    reviews: 32,
    badge: 'new',
    emoji: '🍹',
  },

  // Weekly Delivery Products
  {
    id: 3,
    name: 'Tropical Sunset Weekly Pack',
    category: 'mocktail',
    deliveryType: 'weekly',
    description: 'Orange, pineapple, and coconut water - 7 bottles for the week',
    price: 42.00,
    salePrice: 35.00,
    image: '/images/mocktails3.jpg',
    rating: 5,
    reviews: 18,
    badge: 'popular',
    emoji: '🍹',
  },
  {
    id: 4,
    name: 'Citrus Splash Weekly Bundle',
    category: 'mocktail',
    deliveryType: 'weekly',
    description: 'Refreshing citrus blend with ginger - Weekly subscription available',
    price: 38.00,
    salePrice: 32.00,
    image: '/images/mocktails4.jpg',
    rating: 5,
    reviews: 28,
    badge: 'popular',
    emoji: '🍹',
  },

  // Party Delivery Products
  {
    id: 5,
    name: 'Party Mix - Deluxe Package',
    category: 'mocktail',
    deliveryType: 'party',
    description: 'Assorted mocktails perfect for parties (10+ servings) - Garden fresh, berry bliss & more',
    price: 65.00,
    salePrice: 55.00,
    image: '/images/mocktails5.jpg',
    rating: 5,
    reviews: 21,
    badge: 'popular',
    emoji: '🥳',
  },
  {
    id: 6,
    name: 'Celebration Party Pack',
    category: 'mocktail',
    deliveryType: 'party',
    description: 'Premium selection for special events (15+ servings) - Strawberry, mango & tropical flavors',
    price: 89.00,
    image: '/images/mocktails6.jpg',
    rating: 5,
    reviews: 35,
    badge: 'new',
    emoji: '🎉',
  },

  // Bottomless Delivery Products
  {
    id: 7,
    name: 'Bottomless Mango Tango',
    category: 'mocktail',
    deliveryType: 'bottomless',
    description: 'Unlimited mango mocktails for your event - Sweet mango with passion fruit and mint',
    price: 120.00,
    image: '/images/mocktails7.jpg',
    rating: 5,
    reviews: 19,
    badge: 'popular',
    emoji: '♾️',
  },
  {
    id: 8,
    name: 'Bottomless Refreshment Package',
    category: 'mocktail',
    deliveryType: 'bottomless',
    description: 'Unlimited mocktail refills for your party - Mixed flavors available',
    price: 150.00,
    salePrice: 130.00,
    image: '/images/mocktails8.jpg',
    rating: 5,
    reviews: 27,
    badge: 'sale',
    emoji: '♾️',
  },

  // FRESH SALAD PRODUCTS - Daily Delivery
  {
    id: 9,
    name: 'Garden Fresh Caesar Salad',
    category: 'salad',
    deliveryType: 'daily',
    description: 'Crisp romaine lettuce, parmesan, croutons with homemade Caesar dressing',
    price: 8.50,
    salePrice: 6.50,
    image: '/images/image_1.jpg',
    rating: 5,
    reviews: 42,
    badge: 'popular',
    emoji: '🥗',
  },
  {
    id: 10,
    name: 'Mediterranean Power Bowl',
    category: 'salad',
    deliveryType: 'daily',
    description: 'Quinoa, chickpeas, cucumber, tomatoes, feta cheese, olives with lemon tahini dressing',
    price: 9.50,
    image: '/images/image_2.jpg',
    rating: 5,
    reviews: 38,
    badge: 'new',
    emoji: '🥗',
  },
  {
    id: 11,
    name: 'Asian Fusion Crunch',
    category: 'salad',
    deliveryType: 'daily',
    description: 'Mixed greens, edamame, carrots, cabbage, sesame seeds with ginger dressing',
    price: 8.00,
    image: '/images/image_3.jpg',
    rating: 5,
    reviews: 31,
    badge: 'sale',
    emoji: '🥗',
  },

  // SALAD Weekly Packages
  {
    id: 12,
    name: 'Weekly Wellness Salad Pack',
    category: 'salad',
    deliveryType: 'weekly',
    description: '7 gourmet salads - Perfect for healthy lunch throughout the week',
    price: 55.00,
    salePrice: 48.00,
    image: '/images/image_4.jpg',
    rating: 5,
    reviews: 26,
    badge: 'popular',
    emoji: '🥗',
  },
  {
    id: 13,
    name: 'Office Lunch Weekly Bundle',
    category: 'salad',
    deliveryType: 'weekly',
    description: 'Mixed variety salads for 5 working days - Fresh daily ingredients',
    price: 42.00,
    salePrice: 38.00,
    image: '/images/image_5.jpg',
    rating: 5,
    reviews: 19,
    badge: 'new',
    emoji: '🥗',
  },

  // SALAD Party Packages
  {
    id: 14,
    name: 'Party Salad Platter - Deluxe',
    category: 'salad',
    deliveryType: 'party',
    description: 'Serves 15-20 people - Assorted gourmet salads perfect for events',
    price: 75.00,
    salePrice: 65.00,
    image: '/images/image_6.jpg',
    rating: 5,
    reviews: 33,
    badge: 'popular',
    emoji: '🎉',
  },
  {
    id: 15,
    name: 'Corporate Event Salad Bar',
    category: 'salad',
    deliveryType: 'party',
    description: 'Complete salad bar setup for 25+ guests - Build your own salad station',
    price: 120.00,
    image: '/images/chef.jpg',
    rating: 5,
    reviews: 28,
    badge: 'new',
    emoji: '🎉',
  },
];

// Function to check if image exists, fallback to emoji
export const getProductImage = (product: ProductData): { type: 'image' | 'emoji'; src: string } => {
  // In production, you would check if the image file exists
  // For now, we'll use a simple check
  const img = new Image();
  img.src = product.image;

  // Return emoji as fallback until real images are added
  return {
    type: 'emoji',
    src: product.emoji,
  };
};

// Export for use in components
export default sampleProducts;
