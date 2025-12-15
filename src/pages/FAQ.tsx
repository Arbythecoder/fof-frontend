import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../components/common/BackToTop';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Orders & Delivery',
      questions: [
        {
          q: 'How do I place an order?',
          a: 'You can place an order by browsing our products, adding items to your cart, and proceeding to checkout. You\'ll need to create an account or log in to complete your purchase.',
        },
        {
          q: 'What are your delivery times?',
          a: 'We offer daily delivery, weekly plans, and special party packages. Daily deliveries are made between 7am-10am. Weekly plans are delivered on your chosen day. Check our Shipping Info page for more details.',
        },
        {
          q: 'Do you deliver to my area?',
          a: 'We currently deliver across London and surrounding areas. Enter your postcode at checkout to confirm if we deliver to your location.',
        },
        {
          q: 'What if I\'m not home during delivery?',
          a: 'Our delivery team will leave your order in a safe place if you\'re not home. You can add delivery instructions during checkout to specify where you\'d like us to leave your order.',
        },
      ],
    },
    {
      category: 'Products',
      questions: [
        {
          q: 'Are your mocktails and salads fresh?',
          a: 'Absolutely! All our products are made fresh daily using premium ingredients. We never use artificial preservatives or flavors.',
        },
        {
          q: 'Can I customize my order?',
          a: 'Yes! Use our Recipe Builder to create your perfect custom mocktail. You can choose your base, flavors, mix-ins, toppings, and size.',
        },
        {
          q: 'Do you cater for dietary requirements?',
          a: 'Yes! All our products are clearly labeled with allergen and dietary information. We offer vegan, gluten-free, and nut-free options.',
        },
        {
          q: 'How long do your products stay fresh?',
          a: 'Our mocktails are best consumed within 48 hours of delivery. Salads should be consumed within 24 hours for optimal freshness.',
        },
      ],
    },
    {
      category: 'Subscriptions & Plans',
      questions: [
        {
          q: 'How do weekly plans work?',
          a: 'Choose your preferred drinks, select your delivery day, and we\'ll deliver fresh products every week. You can pause, modify, or cancel your plan anytime from your account.',
        },
        {
          q: 'Can I skip a week?',
          a: 'Yes! Log into your account and manage your subscription. You can skip weeks or pause your plan at any time.',
        },
        {
          q: 'Is there a minimum commitment?',
          a: 'No! There\'s no minimum commitment. You can cancel your subscription at any time with no penalties.',
        },
      ],
    },
    {
      category: 'Events & Catering',
      questions: [
        {
          q: 'Do you cater for events?',
          a: 'Yes! We offer premium mocktail bar and fresh salad catering for weddings, corporate events, birthdays, and more. Visit our Events page to book.',
        },
        {
          q: 'What\'s included in event packages?',
          a: 'Our event packages include professional bartenders, all equipment and setup, custom menu design, and full cleanup. We handle everything!',
        },
        {
          q: 'How far in advance should I book?',
          a: 'We recommend booking at least 2-3 weeks in advance for small events and 4-6 weeks for large events to ensure availability.',
        },
      ],
    },
    {
      category: 'Payment & Pricing',
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit/debit cards and PayPal. All payments are processed securely.',
        },
        {
          q: 'Do you offer discounts?',
          a: 'Yes! We offer discounts on weekly plans and bulk orders. Sign up for our newsletter to receive exclusive offers and promotions.',
        },
        {
          q: 'Is delivery free?',
          a: 'Yes! We offer FREE delivery on all orders across our delivery zones.',
        },
      ],
    },
    {
      category: 'Account & Support',
      questions: [
        {
          q: 'How do I track my order?',
          a: 'Once your order is placed, you\'ll receive a confirmation email. You can track your order status in the "My Orders" section of your account.',
        },
        {
          q: 'How do I update my account details?',
          a: 'Log into your account and click on "My Profile" to update your personal information, delivery address, and payment methods.',
        },
        {
          q: 'How do I contact customer support?',
          a: 'You can reach us via our Contact page, email us at hello@fofdrinks.co.uk, or call us during business hours. We typically respond within 24 hours.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-cream-bg">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-primary via-gold-primary to-teal-accent">
        <div className="container-fof relative z-10 text-center text-white py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl">
              Find answers to common questions about our products and services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container-fof max-w-4xl">
          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-heading font-bold text-green-primary mb-4">
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={questionIndex}
                        className="card overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setOpenIndex(isOpen ? null : globalIndex)
                          }
                          className="w-full text-left p-6 flex justify-between items-center hover:bg-gold-primary/5 transition-colors"
                        >
                          <span className="font-semibold text-lg pr-4">
                            {faq.q}
                          </span>
                          <svg
                            className={`w-6 h-6 flex-shrink-0 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-6 pb-6"
                          >
                            <p className="text-gray-600 leading-relaxed">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Still Have Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 card p-8 text-center bg-gradient-to-br from-gold-primary/10 to-green-primary/10"
          >
            <h3 className="text-2xl font-heading font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our team is here to help!
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default FAQ;
