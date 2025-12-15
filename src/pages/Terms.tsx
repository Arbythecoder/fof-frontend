import { motion } from 'framer-motion';
import BackToTop from '../components/common/BackToTop';

// Terms & Conditions page - legal agreement between FoF Drinks and customers
const Terms = () => {
  return (
    <div className="min-h-screen bg-cream-bg">
      {/* Hero Section - Page header */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gold-primary via-green-primary to-teal-accent">
        <div className="container-fof relative z-10 text-center text-white py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm mt-2 opacity-90">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-fof max-w-4xl">

          {/* Agreement to Terms - explains user acceptance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-4">
              Agreement to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms and Conditions ("Terms") govern your use of the FoF Drinks website and
              services. By accessing or using our website, placing an order, or using our services,
              you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you do not agree with these Terms, please do not use our website or services.
            </p>
          </motion.div>

          {/* Eligibility - who can use the service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-4">
              Eligibility
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You must be at least 18 years old to use our services. By using our website and
              placing orders, you represent that you are of legal age and have the legal capacity
              to enter into these Terms.
            </p>
          </motion.div>

          {/* Orders and Payments - how ordering works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-6">
              Orders and Payments
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Order Acceptance</h3>
                <p className="text-gray-600">
                  All orders are subject to acceptance by FoF Drinks. We reserve the right to refuse
                  or cancel any order for any reason, including product availability, errors in product
                  or pricing information, or suspected fraud.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Pricing</h3>
                <p className="text-gray-600">
                  All prices are in GBP (£) and are subject to change without notice. We strive to
                  display accurate prices, but errors may occur. If we discover a pricing error after
                  you've placed an order, we'll contact you for instructions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Payment</h3>
                <p className="text-gray-600">
                  Payment is due at the time of order. We accept major credit/debit cards and PayPal.
                  All payment information is processed securely by our third-party payment processors.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Order Confirmation</h3>
                <p className="text-gray-600">
                  Once your order is placed, you'll receive an email confirmation. This confirmation
                  does not constitute acceptance of your order - acceptance occurs when we dispatch
                  your products.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Delivery - delivery terms and conditions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-6">
              Delivery
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Delivery Areas</h3>
                <p className="text-gray-600">
                  We currently deliver to specific areas in and around London. Delivery availability
                  is confirmed during checkout based on your postcode.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Delivery Times</h3>
                <p className="text-gray-600">
                  We aim to deliver within the specified time window. However, delivery times are
                  estimates and may vary due to factors beyond our control. We are not liable for
                  delays caused by circumstances outside our reasonable control.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Failed Deliveries</h3>
                <p className="text-gray-600">
                  If you're not available to receive your delivery, we'll leave it in a safe place
                  as per your instructions. If we cannot deliver your order, we'll contact you to
                  arrange redelivery or a refund.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Risk of Loss</h3>
                <p className="text-gray-600">
                  Risk of loss and title for products pass to you upon delivery.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Subscriptions - terms for recurring orders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-6">
              Subscription Services
            </h2>

            <div className="space-y-4">
              <p className="text-gray-700">
                If you subscribe to our weekly plan or any recurring delivery service:
              </p>

              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gold-primary mr-2">•</span>
                  <span>
                    You authorize us to charge your payment method on a recurring basis for each
                    delivery period until you cancel.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-primary mr-2">•</span>
                  <span>
                    You can modify or cancel your subscription anytime from your account, but changes
                    must be made at least 48 hours before your next scheduled delivery.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-primary mr-2">•</span>
                  <span>
                    We may change subscription prices with 30 days' notice. Continued use after the
                    price change constitutes acceptance.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-primary mr-2">•</span>
                  <span>
                    There are no refunds for partial subscription periods if you cancel mid-cycle.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Product Information - freshness and quality */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-6">
              Product Information and Quality
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                We strive to provide accurate product descriptions, images, and nutritional
                information. However, we do not warrant that product descriptions or other content
                is accurate, complete, or error-free.
              </p>

              <p>
                All our products are made fresh daily. Slight variations in appearance, taste, and
                nutritional content may occur due to the natural variation in fresh ingredients.
              </p>

              <p>
                <strong>Allergen Information:</strong> We clearly label allergen information for all
                products. If you have allergies or dietary restrictions, please review product
                information carefully before ordering.
              </p>
            </div>
          </motion.div>

          {/* User Accounts - account responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-6">
              User Accounts
            </h2>

            <div className="space-y-3 text-gray-700">
              <p>
                To place orders, you must create an account. You are responsible for:
              </p>

              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-gold-primary mr-2">✓</span>
                  Maintaining the confidentiality of your account credentials
                </li>
                <li className="flex items-start">
                  <span className="text-gold-primary mr-2">✓</span>
                  All activities that occur under your account
                </li>
                <li className="flex items-start">
                  <span className="text-gold-primary mr-2">✓</span>
                  Notifying us immediately of any unauthorized access
                </li>
                <li className="flex items-start">
                  <span className="text-gold-primary mr-2">✓</span>
                  Providing accurate and current information
                </li>
              </ul>

              <p className="mt-4">
                We reserve the right to suspend or terminate accounts that violate these Terms or
                engage in fraudulent activity.
              </p>
            </div>
          </motion.div>

          {/* Intellectual Property - ownership rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-4">
              Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All content on our website, including text, graphics, logos, images, and software,
              is the property of FoF Drinks and protected by copyright and trademark laws. You may
              not reproduce, distribute, modify, or create derivative works without our express
              written permission.
            </p>
          </motion.div>

          {/* Limitation of Liability - legal protections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-6">
              Limitation of Liability
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                To the fullest extent permitted by law, FoF Drinks shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising from or
                related to your use of our services.
              </p>

              <p>
                Our total liability for any claims arising from your use of our services is limited
                to the amount you paid for the product or service giving rise to the claim.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-sm">
                  <strong>Note:</strong> Some jurisdictions do not allow limitations on liability,
                  so these limitations may not apply to you.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Changes to Terms - how we update terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-4">
              Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective
              immediately upon posting to our website. Your continued use of our services after
              changes are posted constitutes acceptance of the modified Terms. We encourage you
              to review these Terms periodically.
            </p>
          </motion.div>

          {/* Governing Law - jurisdiction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-4">
              Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by the laws of England and Wales. Any disputes arising from
              these Terms or your use of our services shall be subject to the exclusive jurisdiction
              of the courts of England and Wales.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 bg-gradient-to-br from-gold-primary/10 to-green-primary/10"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-4">
              Questions About These Terms?
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:hello@fofdrinks.co.uk" className="text-gold-primary hover:underline">
                  hello@fofdrinks.co.uk
                </a>
              </p>
              <p>
                <strong>Company:</strong> FoF Drinks
              </p>
              <p>
                <strong>Location:</strong> London, United Kingdom
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default Terms;
