import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DrinkSelector from '../components/product/DrinkSelector';
import type { DrinkOption } from '../components/product/DrinkSelector';
import BackToTop from '../components/common/BackToTop';
import QuantitySelector from '../components/product/QuantitySelector';
import GiftOptions from '../components/checkout/GiftOptions';
import { useCartStore } from '../store/cartStore';
import type { Product } from '../types';

const CustomOrder = () => {
  const navigate = useNavigate();
  const { addToCart } = useCartStore();

  // Form state
  const [selectedDrinks, setSelectedDrinks] = useState<DrinkOption[]>([]);
  const [quantity, setQuantity] = useState<number | string>(2);
  const [isGift, setIsGift] = useState(false);
  const [giftMessage, setGiftMessage] = useState('');
  const [receiverDetails, setReceiverDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
  });

  // Calculate total price
  const calculateTotal = () => {
    if (selectedDrinks.length === 0 || !quantity) return 0;

    const avgPricePerLitre = selectedDrinks.reduce((sum, drink) => sum + drink.pricePerLitre, 0) / selectedDrinks.length;
    const quantityNum = typeof quantity === 'string' ? parseFloat(quantity) || 0 : quantity;

    let total = avgPricePerLitre * quantityNum;

    // Apply 10% discount for 2 or more different drinks
    if (selectedDrinks.length >= 2) {
      total = total * 0.9; // 10% off
    }

    return total;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedDrinks.length === 0) {
      alert('Please select at least one drink');
      return;
    }

    if (!quantity) {
      alert('Please select a quantity');
      return;
    }

    if (isGift && !receiverDetails.fullName) {
      alert('Please fill in receiver details for gift orders');
      return;
    }

    // Create custom order item
    const drinksText = selectedDrinks.map(d => d.name).join(', ');
    const quantityNum = typeof quantity === 'string' ? parseFloat(quantity) : quantity;

    const customProduct: Product = {
      _id: `custom-${Date.now()}`,
      name: `Custom Order: ${drinksText} (${quantityNum}L)`,
      description: `${selectedDrinks.length >= 2 ? '🎉 10% Combo Discount Applied! ' : ''}${isGift ? '🎁 Gift Order' : ''}`,
      price: calculateTotal(),
      category: 'mocktail',
      deliveryType: 'daily',
      images: ['/images/mocktails1.jpg'],
      thumbnail: '/images/mocktails1.jpg',
      ingredients: selectedDrinks.map(d => d.name),
      allergens: [],
      dietary: [],
      inStock: true,
      featured: false,
      rating: 5,
      reviewCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    addToCart(customProduct, 1);

    // Navigate to checkout
    navigate('/checkout');
  };

  const hasComboDiscount = selectedDrinks.length >= 2;

  return (
    <div className="min-h-screen bg-cream-bg py-12">
      <div className="container-fof max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            🎄 Christmas Custom Order
          </h1>
          <p className="text-lg text-gray-600">
            Create your perfect drink order with our festive selection
          </p>
          {hasComboDiscount && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mt-4 inline-block bg-gradient-to-r from-red-600 to-green-600 text-white px-6 py-2 rounded-full font-bold"
            >
              🎉 10% Combo Discount Active!
            </motion.div>
          )}
        </motion.div>

        {/* Order Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Drink Selection */}
            <div>
              <DrinkSelector
                selectedDrinks={selectedDrinks}
                onDrinksChange={setSelectedDrinks}
              />
              <p className="mt-2 text-xs text-gray-600">
                💡 <strong>Combo Offer:</strong> Select 2 or more different drinks to get 10% off!
              </p>
            </div>

            {/* Quantity Selection */}
            <QuantitySelector
              quantity={quantity}
              onQuantityChange={setQuantity}
            />

            {/* Gift Options */}
            <GiftOptions
              isGift={isGift}
              onGiftToggle={setIsGift}
              giftMessage={giftMessage}
              onGiftMessageChange={setGiftMessage}
              receiverDetails={receiverDetails}
              onReceiverDetailsChange={setReceiverDetails}
            />

            {/* Price Summary */}
            <div className="bg-gradient-to-r from-gold-primary/10 to-green-light/10 p-6 rounded-lg border-2 border-gold-primary/30">
              <h3 className="text-lg font-heading font-bold mb-4">Order Summary</h3>

              <div className="space-y-2">
                {selectedDrinks.length > 0 && (
                  <div className="flex justify-between text-sm">
                    <span>Selected Drinks:</span>
                    <span className="font-medium">{selectedDrinks.map(d => d.name).join(', ')}</span>
                  </div>
                )}
                {quantity && (
                  <div className="flex justify-between text-sm">
                    <span>Quantity:</span>
                    <span className="font-medium">{quantity} Litres</span>
                  </div>
                )}
                {hasComboDiscount && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Combo Discount (10%):</span>
                    <span className="font-bold">-£{(calculateTotal() / 0.9 * 0.1).toFixed(2)}</span>
                  </div>
                )}
                {isGift && (
                  <div className="flex justify-between text-sm">
                    <span>🎁 Gift Wrapping:</span>
                    <span className="text-green-600 font-bold">FREE</span>
                  </div>
                )}
                <div className="pt-3 border-t-2 border-gold-primary/30 flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-gold-primary">£{calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={selectedDrinks.length === 0 || !quantity}
              className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {selectedDrinks.length === 0
                ? 'Select Drinks to Continue'
                : !quantity
                ? 'Select Quantity to Continue'
                : 'Add to Cart & Checkout'}
            </button>
          </form>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid md:grid-cols-3 gap-4"
        >
          <div className="card p-4 text-center">
            <div className="text-3xl mb-2">🎁</div>
            <h3 className="font-bold mb-1">Free Gift Wrapping</h3>
            <p className="text-xs text-gray-600">Make it special for someone</p>
          </div>
          <div className="card p-4 text-center">
            <div className="text-3xl mb-2">🚚</div>
            <h3 className="font-bold mb-1">Fast Delivery</h3>
            <p className="text-xs text-gray-600">Dec 23-24 & Dec 26-Jan 2</p>
          </div>
          <div className="card p-4 text-center">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="font-bold mb-1">Combo Discounts</h3>
            <p className="text-xs text-gray-600">10% off for 2+ drinks</p>
          </div>
        </motion.div>
      </div>
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default CustomOrder;
