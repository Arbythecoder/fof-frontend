import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BackToTop from '../components/common/BackToTop';

const Returns = () => {
  return (
    <div className="min-h-screen bg-cream-bg">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gold-primary via-teal-accent to-green-primary">
        <div className="container-fof relative z-10 text-center text-white py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
              Returns & Refunds
            </h1>
            <p className="text-xl">
              Your satisfaction is our priority
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-fof max-w-4xl">
          {/* Our Promise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8 bg-gradient-to-br from-green-primary/10 to-gold-primary/10"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-4">
              Our Freshness Guarantee
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We're committed to delivering the freshest, highest-quality products to your door.
              If you're not completely satisfied with your order, we'll make it right.
            </p>
          </motion.div>

          {/* Return Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-6">
              Return Policy
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-2">✓</span>
                  Fresh Product Guarantee
                </h3>
                <p className="text-gray-600 ml-8">
                  All our mocktails and salads are made fresh daily. If your order arrives and
                  doesn't meet our high freshness standards, contact us immediately for a full refund
                  or replacement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-2">📦</span>
                  Damaged or Missing Items
                </h3>
                <p className="text-gray-600 ml-8">
                  If your order arrives damaged or items are missing, please contact us within 24 hours
                  of delivery with photos of the issue. We'll send a replacement or provide a full refund.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  Wrong Order Delivered
                </h3>
                <p className="text-gray-600 ml-8">
                  Received the wrong order? We sincerely apologize! Contact us immediately and we'll
                  arrange for the correct order to be delivered at no extra cost, plus a refund or
                  discount on your next order.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-2">🕐</span>
                  Late Delivery
                </h3>
                <p className="text-gray-600 ml-8">
                  We aim to deliver within our promised time window. If your order is significantly
                  late and you're no longer able to use the products, please contact us for a refund
                  or replacement order.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Refund Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-6">
              How to Request a Refund
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Contact Us Immediately</h4>
                  <p className="text-gray-600">
                    Email us at <a href="mailto:hello@fofdrinks.co.uk" className="text-gold-primary hover:underline">hello@fofdrinks.co.uk</a> or
                    use our Contact form within 24 hours of receiving your order.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Provide Details</h4>
                  <p className="text-gray-600">
                    Include your order number, description of the issue, and photos if applicable.
                    This helps us resolve your issue quickly.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">We Review Your Case</h4>
                  <p className="text-gray-600">
                    Our customer service team will review your request and respond within 24 hours
                    with a solution.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Receive Your Refund</h4>
                  <p className="text-gray-600">
                    Once approved, refunds are processed within 3-5 business days back to your
                    original payment method.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-6">
              Important Notes
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                <h4 className="font-semibold mb-2">⏱️ Time Limits</h4>
                <p className="text-gray-700">
                  Due to the fresh nature of our products, refund requests must be submitted within
                  24 hours of delivery. After this time, we cannot guarantee a refund.
                </p>
              </div>

              <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                <h4 className="font-semibold mb-2">📷 Photo Evidence</h4>
                <p className="text-gray-700">
                  For damaged or incorrect orders, please provide clear photos. This helps us improve
                  our service and process your refund faster.
                </p>
              </div>

              <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                <h4 className="font-semibold mb-2">🔄 Subscription Cancellations</h4>
                <p className="text-gray-700">
                  Weekly plan subscriptions can be cancelled anytime from your account. You must
                  cancel at least 48 hours before your next scheduled delivery to avoid being charged.
                </p>
              </div>

              <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                <h4 className="font-semibold mb-2">🚫 Non-Refundable Situations</h4>
                <p className="text-gray-700">
                  Refunds cannot be provided if: you were not available to receive the delivery and
                  it was left as per your instructions, you changed your mind after delivery, or
                  products were consumed before requesting a refund.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 text-center bg-gradient-to-br from-gold-primary/10 to-green-primary/10"
          >
            <h3 className="text-2xl font-heading font-bold mb-4">
              Need Help?
            </h3>
            <p className="text-gray-600 mb-6">
              Our customer service team is here to help resolve any issues with your order.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Customer Service
            </Link>
          </motion.div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default Returns;
