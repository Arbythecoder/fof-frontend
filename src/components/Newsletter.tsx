import { motion } from 'framer-motion';
import { useState } from 'react';
import { EnvelopeIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import api from '../services/api';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await api.post('/api/newsletter/subscribe', { email });
      setSuccess(true);
      setEmail('');
    } catch (err: any) {
      const errorMessage = err?.response?.data?.message || 'Failed to subscribe. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section className="section-padding bg-gradient-to-br from-green-primary via-green-dark to-green-primary">
        <div className="container-fof">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <CheckCircleIcon className="w-20 h-20 text-gold-primary mx-auto mb-6" />
            <h3 className="text-3xl font-heading font-bold text-white mb-4">
              You're In!
            </h3>
            <p className="text-gray-200 text-lg">
              Thank you for subscribing! You'll receive exclusive offers, new recipe alerts, and healthy living tips.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gradient-to-br from-green-primary via-green-dark to-green-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gold-light rounded-full blur-3xl"></div>
      </div>

      <div className="container-fof relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gold-primary/20 rounded-full mb-6"
          >
            <EnvelopeIcon className="w-8 h-8 text-gold-primary" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Stay Fresh & Healthy
          </h2>
          <p className="text-gray-200 text-lg mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive deals, new recipes, and healthy living tips delivered straight to your inbox.
          </p>

          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-primary shadow-lg"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`px-8 py-4 bg-gold-primary hover:bg-gold-dark text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-red-300 text-sm"
              >
                {error}
              </motion.p>
            )}
          </form>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: '🎁', text: 'Exclusive Offers' },
              { icon: '📖', text: 'New Recipes' },
              { icon: '💚', text: 'Health Tips' },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center justify-center gap-2 text-white/90"
              >
                <span className="text-2xl">{benefit.icon}</span>
                <span className="font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Privacy Note */}
          <p className="mt-8 text-gray-300 text-sm">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
