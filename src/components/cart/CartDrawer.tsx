import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';

const CartDrawer = () => {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getSubtotal,
    getDeliveryFee,
    getTotal,
  } = useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-heading font-bold">
                Cart ({getTotalItems()})
              </h2>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-gray-600 mb-4">Your cart is empty</p>
                  <Link
                    to="/products"
                    onClick={closeCart}
                    className="btn-primary inline-block"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <motion.div
                      key={`${item.product._id}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="card p-4 relative"
                    >
                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.product._id)}
                        className="absolute top-2 right-2 p-1 hover:bg-red-50 rounded-full transition-colors text-red-500"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>

                      <div className="flex gap-4">
                        {/* Product Image */}
                        <div className="w-20 h-20 bg-gradient-to-br from-gold-primary/20 to-green-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">
                            {item.product.category === 'mocktail' ? '🍹' : '🥗'}
                          </span>
                        </div>

                        {/* Product Info */}
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">
                            {item.customization?.name || item.product.name}
                          </h3>
                          {item.customization && (
                            <p className="text-xs text-gray-500 mb-2">
                              Custom Recipe
                            </p>
                          )}

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3">
                            <div className="flex items-center border-2 border-gray-200 rounded-lg">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.product._id,
                                    item.quantity - 1
                                  )
                                }
                                className="px-3 py-1 hover:bg-gray-100 transition-colors"
                              >
                                -
                              </button>
                              <span className="px-3 py-1 border-x-2 border-gray-200">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.product._id,
                                    item.quantity + 1
                                  )
                                }
                                className="px-3 py-1 hover:bg-gray-100 transition-colors"
                              >
                                +
                              </button>
                            </div>

                            <div className="text-lg font-bold text-gold-primary">
                              £
                              {(
                                (item.customization?.price ||
                                  item.product.salePrice ||
                                  item.product.price) * item.quantity
                              ).toFixed(2)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer (Summary & Checkout) */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 p-6 bg-cream-bg">
                {/* Summary */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>£{getSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery</span>
                    <span>
                      {getDeliveryFee() === 0
                        ? 'FREE'
                        : `£${getDeliveryFee().toFixed(2)}`}
                    </span>
                  </div>
                  {getDeliveryFee() > 0 && (
                    <div className="text-xs text-green-primary">
                      Spend £{(20 - getSubtotal()).toFixed(2)} more for free
                      delivery!
                    </div>
                  )}
                  <div className="flex justify-between text-xl font-bold pt-2 border-t-2 border-gray-200">
                    <span>Total</span>
                    <span className="text-gold-primary">
                      £{getTotal().toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link
                  to="/checkout"
                  onClick={closeCart}
                  className="btn-primary w-full block text-center"
                >
                  Proceed to Checkout
                </Link>
                <button
                  onClick={closeCart}
                  className="w-full text-center text-sm text-gray-600 hover:text-gray-900 mt-3"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
