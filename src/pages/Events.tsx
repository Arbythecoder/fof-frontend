import { motion } from 'framer-motion';
import { useState } from 'react';

const Events = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    eventType: 'wedding',
    eventDate: '',
    eventTime: '',
    guestCount: '',
    location: '',
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend API
    console.log('Event booking submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const eventTypes = [
    { value: 'wedding', label: 'Wedding', icon: '💒', desc: 'Celebrate your special day with our premium mocktail bar' },
    { value: 'corporate', label: 'Corporate', icon: '🏢', desc: 'Professional catering for business events' },
    { value: 'birthday', label: 'Birthday', icon: '🎂', desc: 'Make birthdays memorable with fresh drinks' },
    { value: 'other', label: 'Other', icon: '🎉', desc: 'Any celebration - we\'ve got you covered!' },
  ];

  const services = [
    { icon: '🍹', title: 'Mocktail Bar', desc: 'Professional bartenders crafting custom drinks' },
    { icon: '🥗', title: 'Fresh Salad Station', desc: 'Build-your-own salad bar with premium ingredients' },
    { icon: '👨‍🍳', title: 'Live Preparation', desc: 'Watch as we prepare your drinks fresh on-site' },
    { icon: '🎨', title: 'Custom Menu', desc: 'Tailored menu to match your event theme' },
    { icon: '📦', title: 'Full Setup', desc: 'We handle everything from setup to cleanup' },
    { icon: '⭐', title: 'Premium Service', desc: 'Professional staff ensuring perfect execution' },
  ];

  return (
    <div className="min-h-screen bg-cream-bg">
      {/* Hero Section - Premium & Eye-catching */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image from Unsplash */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80&auto=format&fit=crop"
            alt="Event celebration with drinks and party atmosphere"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gold-primary/40 to-black/70"></div>
        </div>

        {/* Animated background shapes */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />

        <div className="container-fof relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-7xl mb-6"
            >
              🎪
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Catering & Events
            </h1>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
              Make your celebration unforgettable with our premium mocktail bar and fresh salad catering
            </p>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations - we bring fresh, healthy refreshment to any event
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
          >
            {[
              { number: '500+', label: 'Events Catered' },
              { number: '10K+', label: 'Happy Guests' },
              { number: '50+', label: 'Mocktail Varieties' },
              { number: '5★', label: 'Average Rating' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-fof p-4">
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Event Types Section */}
      <section className="section-padding bg-white">
        <div className="container-fof">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Perfect for <span className="text-gradient">Every Occasion</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whatever your celebration, we create memorable experiences with premium refreshments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((type, idx) => (
              <motion.div
                key={type.value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-6xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-2">{type.label}</h3>
                <p className="text-gray-600 text-sm">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-br from-cream-bg to-beige-warm">
        <div className="container-fof">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              What We <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium catering services designed to wow your guests
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section-padding bg-white">
        <div className="container-fof max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Book Your <span className="text-gradient">Event</span>
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 md:p-12"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-7xl mb-6">🎉</div>
                <h3 className="text-3xl font-heading font-bold mb-4 text-green-primary">
                  Thank You!
                </h3>
                <p className="text-lg text-gray-600 mb-2">
                  Your event booking request has been received!
                </p>
                <p className="text-gray-500">
                  We'll contact you within 24 hours to discuss the details.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="input-field"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="input-field"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="input-field"
                      value={formData.contactPhone}
                      onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                      placeholder="+44 xxx xxx xxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      required
                      className="input-field"
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    >
                      {eventTypes.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Event Details */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      required
                      className="input-field"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Time *
                    </label>
                    <input
                      type="time"
                      required
                      className="input-field"
                      value={formData.eventTime}
                      onChange={(e) => setFormData({ ...formData, eventTime: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Guest Count *
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      className="input-field"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      placeholder="50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Location *
                  </label>
                  <input
                    type="text"
                    required
                    className="input-field"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Full address or venue name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests or Dietary Requirements
                  </label>
                  <textarea
                    rows={4}
                    className="input-field"
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="Tell us about any special requirements, themes, or preferences..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full text-lg py-4">
                  Submit Booking Request
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * We'll send you a detailed quote within 24 hours
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gold-primary to-green-primary text-white">
        <div className="container-fof text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Questions About Our Catering?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our events team is here to help plan your perfect celebration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-block bg-white text-gold-primary font-semibold px-8 py-4 rounded-fof hover:shadow-2xl transition-all duration-300">
                Contact Us
              </a>
              <a href="tel:+44xxxxxxxxxx" className="inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded-fof hover:bg-white hover:text-gold-primary transition-all duration-300">
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;
