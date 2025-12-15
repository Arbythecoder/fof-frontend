import { motion } from 'framer-motion';
import BackToTop from '../components/common/BackToTop';

const Shipping = () => {
  return (
    <div className="min-h-screen bg-cream-bg">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-accent via-green-primary to-gold-primary">
        <div className="container-fof relative z-10 text-center text-white py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
              Shipping Information
            </h1>
            <p className="text-xl">
              Everything you need to know about our delivery service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-fof max-w-4xl">
          {/* Delivery Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-6">
              Delivery Options
            </h2>

            <div className="space-y-6">
              {/* Daily Delivery */}
              <div className="border-l-4 border-gold-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">📅 Daily Delivery</h3>
                <p className="text-gray-600 mb-2">
                  Fresh products delivered to your door every morning between 7am-10am.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Order by 6pm for next-day delivery</li>
                  <li>Choose your preferred delivery day</li>
                  <li>Standard delivery fee applies</li>
                </ul>
              </div>

              {/* Weekly Plans */}
              <div className="border-l-4 border-teal-accent pl-6">
                <h3 className="text-xl font-semibold mb-2">📆 Weekly Plans</h3>
                <p className="text-gray-600 mb-2">
                  Subscribe to our weekly plan for convenient recurring deliveries.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Choose your weekly delivery day</li>
                  <li>Flexible - skip or pause anytime</li>
                  <li>Save 10% on weekly subscriptions</li>
                  <li>Update your order up to 48 hours before delivery</li>
                </ul>
              </div>

              {/* Party Packages */}
              <div className="border-l-4 border-green-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">🎉 Party Packages</h3>
                <p className="text-gray-600 mb-2">
                  Bulk orders for special events and celebrations.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Order at least 48 hours in advance</li>
                  <li>Delivered on your chosen date and time</li>
                  <li>Special packaging for events</li>
                  <li>Contact us for custom party packages</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Delivery Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-6">
              Delivery Areas
            </h2>
            <p className="text-gray-600 mb-4">
              We currently deliver across London and surrounding areas, including:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-gold-primary mr-2">✓</span> Central London
                </li>
                <li className="flex items-center">
                  <span className="text-gold-primary mr-2">✓</span> North London
                </li>
                <li className="flex items-center">
                  <span className="text-gold-primary mr-2">✓</span> South London
                </li>
                <li className="flex items-center">
                  <span className="text-gold-primary mr-2">✓</span> East London
                </li>
              </ul>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-gold-primary mr-2">✓</span> West London
                </li>
                <li className="flex items-center">
                  <span className="text-gold-primary mr-2">✓</span> Greater London
                </li>
                <li className="flex items-center">
                  <span className="text-gold-primary mr-2">✓</span> Selected postcodes outside London
                </li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> Enter your postcode at checkout to confirm we deliver to your area.
              </p>
            </div>
          </motion.div>

          {/* Delivery Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-6">
              How Delivery Works
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Place Your Order</h4>
                  <p className="text-gray-600">
                    Browse our products, add to cart, and checkout securely online.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">We Prepare Fresh</h4>
                  <p className="text-gray-600">
                    Your order is freshly prepared on the morning of delivery using premium ingredients.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Delivered to Your Door</h4>
                  <p className="text-gray-600">
                    Our delivery team brings your fresh order directly to your doorstep.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Enjoy!</h4>
                  <p className="text-gray-600">
                    Enjoy your delicious, fresh mocktails and salads!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-6">
              Important Information
            </h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">🏠 Missed Delivery</h4>
                <p className="text-gray-600">
                  If you're not home, we'll leave your order in a safe place as per your delivery instructions.
                  You can add specific instructions during checkout.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">📦 Packaging</h4>
                <p className="text-gray-600">
                  All products are delivered in eco-friendly, recyclable packaging to maintain freshness
                  and minimize environmental impact.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">🕐 Order Cutoff Times</h4>
                <p className="text-gray-600">
                  Orders must be placed by 6pm the day before for daily delivery. For weekly plans,
                  changes must be made at least 48 hours before your delivery day.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">💰 Delivery Cost</h4>
                <p className="text-gray-600">
                  Standard delivery fees apply to all orders. Check for special festive season promotions for FREE delivery offers!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default Shipping;
