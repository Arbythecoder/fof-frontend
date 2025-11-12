import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, Product, RecipeCustomization } from '../types';

interface CartStore {
  items: CartItem[];
  isOpen: boolean;

  // Actions
  addToCart: (product: Product, quantity?: number, customization?: RecipeCustomization) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  // Computed
  getTotalItems: () => number;
  getSubtotal: () => number;
  getDeliveryFee: () => number;
  getTotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      // Add item to cart
      addToCart: (product, quantity = 1, customization) => {
        set((state) => {
          // Check if item already exists
          const existingItemIndex = state.items.findIndex(
            (item) => item.product._id === product._id && !customization
          );

          if (existingItemIndex > -1 && !customization) {
            // Update quantity if item exists (and not custom)
            const newItems = [...state.items];
            newItems[existingItemIndex].quantity += quantity;
            return { items: newItems };
          } else {
            // Add new item
            return {
              items: [
                ...state.items,
                {
                  product,
                  quantity,
                  customization,
                },
              ],
            };
          }
        });
      },

      // Remove item from cart
      removeFromCart: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.product._id !== productId),
        }));
      },

      // Update item quantity
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.product._id === productId
              ? { ...item, quantity }
              : item
          ),
        }));
      },

      // Clear entire cart
      clearCart: () => {
        set({ items: [] });
      },

      // Open cart drawer
      openCart: () => {
        set({ isOpen: true });
      },

      // Close cart drawer
      closeCart: () => {
        set({ isOpen: false });
      },

      // Toggle cart drawer
      toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }));
      },

      // Get total number of items
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      // Get subtotal
      getSubtotal: () => {
        return get().items.reduce((total, item) => {
          const price = item.customization
            ? item.customization.price
            : item.product.salePrice || item.product.price;
          return total + price * item.quantity;
        }, 0);
      },

      // Get delivery fee
      getDeliveryFee: () => {
        const subtotal = get().getSubtotal();
        // Free delivery over £20
        return subtotal >= 20 ? 0 : 3.99;
      },

      // Get total
      getTotal: () => {
        return get().getSubtotal() + get().getDeliveryFee();
      },
    }),
    {
      name: 'fof-cart-storage', // localStorage key
    }
  )
);
