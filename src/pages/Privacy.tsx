import { motion } from 'framer-motion';
import BackToTop from '../components/common/BackToTop';

// Privacy Policy page - explains how we collect, use, and protect customer data
const Privacy = () => {
  return (
    <div className="min-h-screen bg-cream-bg">
      {/* Hero Section - Page header with gradient background */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-primary via-gold-primary to-teal-accent">
        <div className="container-fof relative z-10 text-center text-white py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl">
              How we protect your personal information
            </p>
            <p className="text-sm mt-2 opacity-90">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Privacy policy sections */}
      <section className="section-padding">
        <div className="container-fof max-w-4xl">

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At FoF Drinks ("we", "our", or "us"), we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy Policy explains how we
              collect, use, share, and protect your data when you use our website and services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our website and services, you agree to the collection and use of information
              in accordance with this policy.
            </p>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-6">
              Information We Collect
            </h2>

            <div className="space-y-4">
              {/* Personal Information - data users provide during registration/orders */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                <p className="text-gray-600 mb-2">
                  When you create an account or place an order, we collect:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Delivery address</li>
                  <li>Payment information (processed securely by our payment providers)</li>
                  <li>Order history and preferences</li>
                </ul>
              </div>

              {/* Usage Data - automatically collected browsing information */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Usage Data</h3>
                <p className="text-gray-600 mb-2">
                  We automatically collect certain information when you visit our website:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website and search terms used</li>
                  <li>Device information and operating system</li>
                </ul>
              </div>

              {/* Cookies - small files stored on user's device for functionality */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Cookies and Tracking</h3>
                <p className="text-gray-600">
                  We use cookies and similar technologies to enhance your experience, analyze site
                  usage, and assist in our marketing efforts. You can control cookie settings through
                  your browser preferences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* How We Use Your Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-6">
              How We Use Your Information
            </h2>

            <div className="space-y-3">
              {/* List of ways we use customer data */}
              <div className="flex items-start">
                <span className="text-gold-primary text-xl mr-3">✓</span>
                <p className="text-gray-600">
                  <strong>Process Orders:</strong> To fulfill your orders, process payments, and
                  arrange deliveries.
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-gold-primary text-xl mr-3">✓</span>
                <p className="text-gray-600">
                  <strong>Communication:</strong> To send order confirmations, delivery updates, and
                  respond to your inquiries.
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-gold-primary text-xl mr-3">✓</span>
                <p className="text-gray-600">
                  <strong>Improve Services:</strong> To analyze usage patterns and improve our
                  website, products, and services.
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-gold-primary text-xl mr-3">✓</span>
                <p className="text-gray-600">
                  <strong>Marketing:</strong> To send promotional offers and newsletters (only if
                  you've opted in). You can unsubscribe anytime.
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-gold-primary text-xl mr-3">✓</span>
                <p className="text-gray-600">
                  <strong>Security:</strong> To detect and prevent fraud, abuse, and security
                  incidents.
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-gold-primary text-xl mr-3">✓</span>
                <p className="text-gray-600">
                  <strong>Legal Compliance:</strong> To comply with legal obligations and enforce
                  our terms and policies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Data Sharing - who we share data with and why */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-6">
              How We Share Your Information
            </h2>

            <p className="text-gray-700 mb-4">
              We do not sell your personal information. We may share your data with:
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Service Providers</h4>
                <p className="text-gray-600 text-sm">
                  We work with trusted third-party companies to process payments, deliver orders,
                  host our website, and provide customer support. They only access information
                  necessary to perform their services.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Legal Requirements</h4>
                <p className="text-gray-600 text-sm">
                  We may disclose your information if required by law, court order, or to protect
                  our rights, safety, or the rights of others.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Business Transfers</h4>
                <p className="text-gray-600 text-sm">
                  If we're involved in a merger, acquisition, or sale of assets, your information
                  may be transferred as part of that transaction.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Data Security - how we protect customer information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-6">
              Data Security
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <p className="text-gray-700 text-sm">
                <strong>Note:</strong> While we strive to protect your data, no method of transmission
                over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>
          </motion.div>

          {/* Your Rights - what users can do with their data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-green-primary mb-6">
              Your Rights
            </h2>

            <p className="text-gray-700 mb-4">
              You have the following rights regarding your personal information:
            </p>

            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-gold-primary text-2xl mr-3">→</span>
                <div>
                  <strong>Access:</strong>
                  <span className="text-gray-600"> Request a copy of your personal data we hold.</span>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-gold-primary text-2xl mr-3">→</span>
                <div>
                  <strong>Correction:</strong>
                  <span className="text-gray-600"> Update or correct inaccurate information.</span>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-gold-primary text-2xl mr-3">→</span>
                <div>
                  <strong>Deletion:</strong>
                  <span className="text-gray-600"> Request deletion of your personal data (subject to legal requirements).</span>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-gold-primary text-2xl mr-3">→</span>
                <div>
                  <strong>Opt-Out:</strong>
                  <span className="text-gray-600"> Unsubscribe from marketing communications at any time.</span>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-gold-primary text-2xl mr-3">→</span>
                <div>
                  <strong>Data Portability:</strong>
                  <span className="text-gray-600"> Request a copy of your data in a machine-readable format.</span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mt-6">
              To exercise these rights, please contact us at{' '}
              <a href="mailto:hello@fofdrinks.co.uk" className="text-gold-primary hover:underline">
                hello@fofdrinks.co.uk
              </a>
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
              Questions About Privacy?
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or how we handle your data,
              please contact us:
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

export default Privacy;
