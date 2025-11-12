import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProductImageProps {
  src: string;
  alt: string;
  emoji: string;
  className?: string;
}

const ProductImage = ({ src, alt, emoji, className = '' }: ProductImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  return (
    <div className={`relative bg-gradient-to-br from-gold-primary/20 to-green-primary/20 ${className}`}>
      {/* Real Image (hidden until loaded, or if error shows emoji) */}
      {!imageError && (
        <img
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0 absolute'
          }`}
          loading="lazy"
        />
      )}

      {/* Fallback Emoji (shows while loading or on error) */}
      {(!imageLoaded || imageError) && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center">
            <div className="text-6xl md:text-7xl mb-2">{emoji}</div>
            {imageError && (
              <p className="text-xs text-gray-500">
                Add image to see photo
              </p>
            )}
          </div>
        </motion.div>
      )}

      {/* Loading indicator (only shown briefly while attempting to load) */}
      {!imageLoaded && !imageError && (
        <div className="absolute top-2 right-2">
          <div className="w-4 h-4 border-2 border-gold-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default ProductImage;
