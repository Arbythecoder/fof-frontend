import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-cream-bg">
      {/* Hero - Premium & Mobile Optimized */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image from Unsplash */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80&auto=format&fit=crop"
            alt="Fresh ingredients and healthy food preparation"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-primary/80 via-black/60 to-gold-primary/70"></div>
        </div>

        {/* Animated decorative elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full blur-3xl"
        />

        <div className="container-fof relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="text-5xl md:text-6xl mb-6"
            >
              🌱
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              About <span className="text-gold-light">FoF</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 max-w-3xl mx-auto opacity-95">
              Fresh, healthy, delicious - that's our promise
            </p>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto opacity-90">
              Bringing you the finest mocktails and salads since day one
            </p>
          </motion.div>

          {/* Quick highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 max-w-4xl mx-auto"
          >
            {[
              { icon: '🌿', label: 'Organic' },
              { icon: '💚', label: 'Sustainable' },
              { icon: '🏆', label: 'Premium' },
              { icon: '⭐', label: 'Quality' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-fof p-3 md:p-4">
                <div className="text-3xl md:text-4xl mb-2">{item.icon}</div>
                <div className="text-sm md:text-base font-medium">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <svg className="w-6 h-6 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Story - Mobile Optimized */}
      <section className="section-padding">
        <div className="container-fof max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-6 sm:mb-8">
              Our Story
            </h2>
            <p className="text-base sm:text-lg text-gray-600 text-center mb-6 sm:mb-8">
              FoF was born from a simple idea: everyone deserves access to
              fresh, healthy, and delicious refreshments. We're passionate about
              bringing you the best mocktails and salads, made with locally
              sourced ingredients and delivered right to your door.
            </p>
            <p className="text-base sm:text-lg text-gray-600 text-center">
              No artificial flavors, no refined sugar, just pure, natural
              goodness that tastes amazing and makes you feel great.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            {[
              { title: 'Our Mission', icon: '🎯', text: 'Bring healthy refreshment to everyone' },
              { title: 'Our Values', icon: '💚', text: 'Fresh, natural, sustainable' },
              { title: 'Our Promise', icon: '✨', text: 'Quality you can taste' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="card p-6 sm:p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl sm:text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
