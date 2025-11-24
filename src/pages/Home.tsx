import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';

const Home = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Premium Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=1920&h=1080&fit=crop"
            alt="Fresh healthy drinks"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Video Overlay - Gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60"></div>

          {/* Animated Elements - Subtle for video background */}
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
            className="absolute top-20 -right-20 md:right-10 w-72 md:w-96 h-72 md:h-96 bg-gold-primary/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute bottom-20 -left-20 md:left-10 w-96 md:w-[500px] h-96 md:h-[500px] bg-green-primary/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container-fof relative z-10 px-4 sm:px-6 lg:px-8 py-20 md:py-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-block px-4 py-2 bg-gold-primary/10 text-gold-primary rounded-full text-xs sm:text-sm font-semibold mb-4">
                  🌿 Fresh & Healthy Delivered Daily
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight text-white"
              >
                Refresh Your Day,{' '}
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gold-primary via-yellow-300 to-gold-light">The Healthy Way</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Handcrafted mocktails and fresh green salads made with premium
                ingredients. No artificial flavors, just pure refreshment
                delivered to your door.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <Link to="/products" className="btn-primary inline-flex items-center justify-center text-sm sm:text-base py-3 sm:py-4">
                  <span>Shop Mocktails</span>
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>

                <Link to="/recipe-builder" className="btn-outline inline-flex items-center justify-center text-sm sm:text-base py-3 sm:py-4">
                  <span>Build Your Recipe</span>
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </Link>
              </motion.div>

              {/* Stats - Mobile Optimized */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-md mx-auto lg:mx-0"
              >
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-gold-primary">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-white/90">Natural</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-gold-primary">
                    2-4h
                  </div>
                  <div className="text-xs sm:text-sm text-white/90">Delivery</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-gold-primary">
                    50+
                  </div>
                  <div className="text-xs sm:text-sm text-white/90">Recipes</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Product Showcase - Hidden on mobile for better UX */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[600px]">
                {/* Main Product Image - Placeholder for real product photo */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-0 right-0 w-64 h-80 bg-gradient-to-br from-gold-primary/20 to-green-primary/20 rounded-fof shadow-2xl flex items-center justify-center overflow-hidden backdrop-blur-sm"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(45, 80, 22, 0.2) 100%)',
                  }}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-2">🍹</div>
                    <p className="text-sm font-medium text-gray-700">Premium Mocktails</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                  className="absolute bottom-0 left-0 w-56 h-72 bg-gradient-to-br from-green-primary/20 to-teal-accent/20 rounded-fof shadow-2xl flex items-center justify-center overflow-hidden backdrop-blur-sm"
                >
                  <div className="text-center">
                    <div className="text-6xl mb-2">🥗</div>
                    <p className="text-sm font-medium text-gray-700">Fresh Salads</p>
                  </div>
                </motion.div>

                {/* Decorative circle */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-dashed border-gold-primary/30 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hidden md:block"
        >
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-fof">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
            >
              Why Choose <span className="text-gradient">FoF?</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600">
              We're passionate about bringing you the freshest, healthiest
              drinks and salads
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: '🌱',
                title: 'Fresh Ingredients',
                desc: 'Sourced daily from local farms',
              },
              {
                icon: '🚫',
                title: 'No Artificial Flavors',
                desc: 'Pure, natural ingredients only',
              },
              {
                icon: '♻️',
                title: 'Eco-Friendly',
                desc: 'Recyclable packaging',
              },
              {
                icon: '⚡',
                title: 'Fast Delivery',
                desc: '2-4 hours to your door',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card p-8 text-center hover:transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-cream-bg">
        <div className="container-fof">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
            >
              Our <span className="text-gradient">Bestsellers</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600">
              Discover our most loved drinks and salads
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: 'Tropical Paradise',
                price: '6.99',
                image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?w=400&h=500&fit=crop',
                category: 'Mocktail',
              },
              {
                name: 'Green Goddess Salad',
                price: '8.99',
                image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=500&fit=crop',
                category: 'Salad',
              },
              {
                name: 'Berry Bliss',
                price: '5.99',
                image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&h=500&fit=crop',
                category: 'Mocktail',
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card overflow-hidden group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold-primary text-white text-sm font-medium rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gold-primary">${product.price}</span>
                    <button className="btn-primary py-2 px-4 text-sm">Add to Cart</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="btn-outline inline-flex items-center"
            >
              View All Products
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gold-primary to-green-primary text-white">
        <div className="container-fof text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Ready to Refresh?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-8 max-w-2xl mx-auto">
              Start your journey to healthier, tastier refreshment today!
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                to="/products"
                className="inline-block bg-white text-gold-primary font-semibold px-12 py-4 rounded-fof hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Browse Products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
