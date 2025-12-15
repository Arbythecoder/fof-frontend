import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import sampleProducts from '../data/sampleProducts';
import type { DeliveryType, ProductData } from '../data/sampleProducts';
import ProductImage from '../components/ProductImage';
import { useCartStore } from '../store/cartStore';
import type { Product } from '../types';
import BackToTop from '../components/common/BackToTop';

const Products = () => {
  const { addToCart, openCart } = useCartStore();
  const [selectedFilter, setSelectedFilter] = useState<DeliveryType | 'all'>('all');

  const handleAddToCart = (product: ProductData) => {
    try {
      // Convert ProductData to Product type for cart
      const cartProduct: Product = {
        _id: String(product.id),
        name: product.name,
        description: product.description,
        price: product.price,
        salePrice: product.salePrice,
        category: product.category,
        deliveryType: product.deliveryType,
        images: [product.image], // Convert single image to array
        thumbnail: product.image,
        ingredients: [], // Sample data doesn't have these
        allergens: [],
        dietary: [],
        inStock: true,
        featured: product.badge === 'popular',
        rating: product.rating,
        reviewCount: product.reviews,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      console.log('Adding to cart:', cartProduct.name);
      addToCart(cartProduct, 1);
      openCart();
      console.log('✅ Added to cart successfully!');
    } catch (error) {
      console.error('❌ Error adding to cart:', error);
      alert('Failed to add item to cart. Please try again.');
    }
  };

  const filteredProducts = selectedFilter === 'all'
    ? sampleProducts
    : sampleProducts.filter(p => p.deliveryType === selectedFilter);

  const filterButtons = [
    { label: 'All Products', value: 'all' as const, icon: '🛍️' },
    { label: 'Daily Delivery', value: 'daily' as const, icon: '📅' },
    { label: 'Weekly Plans', value: 'weekly' as const, icon: '📆' },
    { label: 'Party Packages', value: 'party' as const, icon: '🎉' },
    { label: 'Bottomless', value: 'bottomless' as const, icon: '♾️' },
  ];

  return (
    <div className="min-h-screen bg-cream-bg">
      {/* Hero Section - Premium & Mobile Optimized */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image from Unsplash */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=1920&q=80&auto=format&fit=crop"
            alt="Fresh mocktails and drinks"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60"></div>
        </div>

        {/* Animated shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-5 md:right-20 w-48 md:w-72 h-48 md:h-72 bg-white/10 rounded-full blur-2xl"
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-10 left-5 md:left-20 w-56 md:w-80 h-56 md:h-80 bg-white/10 rounded-full blur-2xl"
        />

        <div className="container-fof relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
              className="text-5xl md:text-6xl mb-4"
            >
              🍹
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 md:mb-6">
              Our <span className="text-gold-light">Products</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 max-w-3xl mx-auto opacity-95">
              Fresh mocktails and salads, delivered to your door
            </p>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto opacity-90">
              Handcrafted with premium ingredients, delivered fresh daily
            </p>
          </motion.div>

          {/* Delivery Type Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2 md:gap-3 justify-center mt-8 max-w-4xl mx-auto"
          >
            {filterButtons.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`px-4 md:px-6 py-2 md:py-2.5 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium transition-all transform hover:scale-105 ${
                  selectedFilter === filter.value
                    ? 'bg-white text-gold-primary shadow-lg'
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
              >
                <span className="mr-1">{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid - Mobile Optimized */}
      <section className="section-padding">
        <div className="container-fof px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              {selectedFilter === 'all' && 'All Products'}
              {selectedFilter === 'daily' && 'Daily Delivery'}
              {selectedFilter === 'weekly' && 'Weekly Plans'}
              {selectedFilter === 'party' && 'Party Packages'}
              {selectedFilter === 'bottomless' && 'Bottomless Options'}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {selectedFilter === 'all' && 'Explore our curated selection of premium mocktails and fresh salads'}
              {selectedFilter === 'daily' && 'Fresh mocktails delivered to your door daily'}
              {selectedFilter === 'weekly' && 'Convenient weekly packages for regular refreshment'}
              {selectedFilter === 'party' && 'Perfect selections for events and celebrations'}
              {selectedFilter === 'bottomless' && 'Unlimited refreshments for your special events'}
            </p>
            <div className="mt-4 inline-block px-4 py-2 bg-gold-primary/10 rounded-full">
              <span className="text-sm font-medium text-gold-primary">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} Available
              </span>
            </div>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group cursor-pointer hover:shadow-2xl transition-all duration-300"
              >
                {/* Product Image with Smart Fallback */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                    emoji={product.emoji}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Badges */}
                  {product.badge === 'sale' && (
                    <div className="absolute top-4 right-4 bg-coral-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Sale!
                    </div>
                  )}
                  {product.badge === 'new' && (
                    <div className="absolute top-4 right-4 bg-green-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      New
                    </div>
                  )}
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 group-hover:text-gold-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 fill-current ${i < product.rating ? 'text-gold-primary' : 'text-gray-300'}`} viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    <span className="text-xs sm:text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      {product.salePrice ? (
                        <div className="flex items-center gap-2">
                          <span className="text-lg sm:text-2xl font-bold text-gold-primary">
                            £{product.salePrice.toFixed(2)}
                          </span>
                          <span className="text-sm text-gray-400 line-through">
                            £{product.price.toFixed(2)}
                          </span>
                        </div>
                      ) : (
                        <span className="text-xl sm:text-2xl font-bold text-gold-primary">
                          £{product.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="btn-primary text-xs sm:text-sm py-2 px-4 sm:px-6"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button - Resets filter */}
          {selectedFilter !== 'all' && (
            <div className="text-center mt-12">
              <button
                onClick={() => setSelectedFilter('all')}
                className="btn-outline px-8 py-3"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-primary to-gold-primary text-white">
        <div className="container-fof text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 md:mb-6">
              Can't Decide? Try Our Recipe Builder!
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto opacity-95">
              Create your perfect custom mocktail with our interactive recipe builder
            </p>
            <Link
              to="/recipe-builder"
              className="inline-block bg-white text-gold-primary font-semibold px-6 sm:px-8 md:px-12 py-3 md:py-4 rounded-fof hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Build Your Recipe
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default Products;
