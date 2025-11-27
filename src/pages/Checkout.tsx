import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useAuth } from '../contexts/AuthContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotal, clearCart } = useCartStore();
  const { user } = useAuth();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [loading, setLoading] = useState(false);
  const [postcodeError, setPostcodeError] = useState('');

  // Form state
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
    notes: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=/checkout');
    }
  }, [user, navigate]);

  // UK Postcode validation (formats: SW1A 1AA, E1 6AN, etc.)
  const validateUKPostcode = (postcode: string): boolean => {
    const ukPostcodeRegex = /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i;
    return ukPostcodeRegex.test(postcode.trim());
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate UK postcode
    if (!validateUKPostcode(shippingInfo.postcode)) {
      setPostcodeError('Please enter a valid UK postcode (e.g., SW1A 1AA)');
      return;
    }

    setPostcodeError('');
    setStep(2);
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Clear cart immediately after successful order
    clearCart();

    // Go to step 3 (confirmation)
    setStep(3);
    setLoading(false);
  };

  const handleOrderComplete = () => {
    clearCart();
    navigate('/');
  };

  if (items.length === 0 && step !== 3) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-bg">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-heading font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some delicious items to get started!</p>
          <button
            onClick={() => navigate('/products')}
            className="btn-primary"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-bg py-12">
      <div className="container-fof max-w-6xl">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= s
                      ? 'bg-gold-primary text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-16 sm:w-24 h-1 ${
                      step > s ? 'bg-gold-primary' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8 sm:gap-16 mt-4 text-sm text-gray-600">
            <span className={step >= 1 ? 'text-gold-primary font-medium' : ''}>Shipping</span>
            <span className={step >= 2 ? 'text-gold-primary font-medium' : ''}>Payment</span>
            <span className={step >= 3 ? 'text-gold-primary font-medium' : ''}>Confirm</span>
          </div>
        </div>

        {/* Step 1: Shipping Information */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">Shipping Information</h2>

                <form onSubmit={handleShippingSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="input-field"
                        value={shippingInfo.fullName}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, fullName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="input-field"
                        value={shippingInfo.email}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="input-field"
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      required
                      className="input-field"
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        className="input-field"
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        UK Postcode *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., SW1A 1AA"
                        className={`input-field ${postcodeError ? 'border-red-500' : ''}`}
                        value={shippingInfo.postcode}
                        onChange={(e) => {
                          setShippingInfo({ ...shippingInfo, postcode: e.target.value.toUpperCase() });
                          setPostcodeError('');
                        }}
                      />
                      {postcodeError && (
                        <p className="text-red-500 text-sm mt-1">{postcodeError}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      className="input-field"
                      value={shippingInfo.notes}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, notes: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Continue to Payment
                  </button>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="card p-6 sticky top-24">
                <h3 className="text-xl font-heading font-bold mb-4">Order Summary</h3>
                <div className="space-y-3 mb-4">
                  {items.map((item, index) => (
                    <div key={item.product._id || `item-${index}`} className="flex gap-3">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                        🍹
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.product.name}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        <p className="text-sm font-bold text-gold-primary">
                          £{((item.product.salePrice || item.product.price) * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>£{getTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>Total</span>
                    <span className="text-gold-primary">£{getTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 2: Payment */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">Payment Method</h2>

                <form onSubmit={handlePaymentSubmit} className="space-y-6">
                  {/* Payment Method Selection */}
                  <div className="space-y-3">
                    <div
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 border-2 rounded-fof cursor-pointer transition-all ${
                        paymentMethod === 'card'
                          ? 'border-gold-primary bg-gold-primary/5'
                          : 'border-gray-200 hover:border-gold-primary/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center">
                          {paymentMethod === 'card' && (
                            <div className="w-3 h-3 rounded-full bg-gold-primary"></div>
                          )}
                        </div>
                        <span className="font-medium">💳 Credit / Debit Card</span>
                      </div>
                    </div>

                    <div
                      onClick={() => setPaymentMethod('paypal')}
                      className={`p-4 border-2 rounded-fof cursor-pointer transition-all ${
                        paymentMethod === 'paypal'
                          ? 'border-gold-primary bg-gold-primary/5'
                          : 'border-gray-200 hover:border-gold-primary/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center">
                          {paymentMethod === 'paypal' && (
                            <div className="w-3 h-3 rounded-full bg-gold-primary"></div>
                          )}
                        </div>
                        <span className="font-medium">💰 PayPal</span>
                      </div>
                    </div>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="space-y-4 pt-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="input-field"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="input-field"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            className="input-field"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn-outline flex-1"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary flex-1"
                    >
                      {loading ? 'Processing...' : 'Place Order'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Order Summary (same as step 1) */}
            <div>
              <div className="card p-6 sticky top-24">
                <h3 className="text-xl font-heading font-bold mb-4">Order Summary</h3>
                <div className="space-y-3 mb-4">
                  {items.map((item, index) => (
                    <div key={item.product._id || `item-${index}`} className="flex gap-3">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                        🍹
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.product.name}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        <p className="text-sm font-bold text-gold-primary">
                          £{((item.product.salePrice || item.product.price) * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>£{getTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>Total</span>
                    <span className="text-gold-primary">£{getTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="card p-12">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-3xl font-heading font-bold mb-4">Order Confirmed!</h2>
              <p className="text-gray-600 mb-2">
                Welcome, <strong className="text-gold-primary">{shippingInfo.fullName}</strong>! 🎉
              </p>
              <p className="text-gray-600 mb-8">
                Thank you for your order! We've sent a confirmation email to{' '}
                <strong>{shippingInfo.email}</strong>
              </p>

              <div className="bg-green-50 border border-green-200 rounded-fof p-6 mb-8 text-left">
                <h3 className="font-bold mb-3">Order Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order Number:</span>
                    <span className="font-medium">#{Math.floor(Math.random() * 100000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Delivery:</span>
                    <span className="font-medium">2-3 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Paid:</span>
                    <span className="font-medium text-gold-primary">£{getTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleOrderComplete}
                className="btn-primary px-8"
              >
                Continue Shopping
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
