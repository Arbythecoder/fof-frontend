import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RECIPE_OPTIONS } from '../utils/constants';
import { useCartStore } from '../store/cartStore';
import type { Product } from '../types';

interface RecipeSelection {
  base: string;
  flavors: string[];
  mixins: string[];
  toppings: string[];
  size: string;
}

const RecipeBuilder = () => {
  const { addToCart, openCart } = useCartStore();
  const [currentStep, setCurrentStep] = useState(1);
  const [recipe, setRecipe] = useState<RecipeSelection>({
    base: '',
    flavors: [],
    mixins: [],
    toppings: [],
    size: '330ml',
  });

  const [recipeName, setRecipeName] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  // Calculate total price
  const calculatePrice = () => {
    let total = 3; // Base price

    // Add base price
    const baseItem = RECIPE_OPTIONS.BASES.find((b) => b.id === recipe.base);
    if (baseItem) total += baseItem.price;

    // Add flavors
    recipe.flavors.forEach((flavorId) => {
      const flavor = RECIPE_OPTIONS.FLAVORS.find((f) => f.id === flavorId);
      if (flavor) total += flavor.price;
    });

    // Add mixins
    recipe.mixins.forEach((mixinId) => {
      const mixin = RECIPE_OPTIONS.MIXINS.find((m) => m.id === mixinId);
      if (mixin) total += mixin.price;
    });

    // Add toppings
    recipe.toppings.forEach((toppingId) => {
      const topping = RECIPE_OPTIONS.TOPPINGS.find((t) => t.id === toppingId);
      if (topping) total += topping.price;
    });

    // Add size price
    const sizeItem = RECIPE_OPTIONS.SIZES.find((s) => s.id === recipe.size);
    if (sizeItem) total += sizeItem.price;

    return total;
  };

  // Calculate estimated calories
  const calculateCalories = () => {
    let calories = 50; // Base calories

    recipe.flavors.forEach((flavorId) => {
      const flavor = RECIPE_OPTIONS.FLAVORS.find((f) => f.id === flavorId);
      if (flavor) calories += flavor.calories;
    });

    recipe.mixins.forEach((mixinId) => {
      const mixin = RECIPE_OPTIONS.MIXINS.find((m) => m.id === mixinId);
      if (mixin) calories += mixin.calories;
    });

    return calories;
  };

  // Generate auto recipe name
  const generateRecipeName = () => {
    if (recipe.flavors.length > 0) {
      const firstFlavor = RECIPE_OPTIONS.FLAVORS.find(
        (f) => f.id === recipe.flavors[0]
      );
      return `${firstFlavor?.name || 'Custom'} Paradise`;
    }
    return 'My Custom Mocktail';
  };

  // Handle adding to cart
  const handleAddToCart = () => {
    // Create a mock product for the custom recipe
    const customProduct: Product = {
      _id: `custom-${Date.now()}`,
      name: recipeName || generateRecipeName(),
      description: 'Custom mocktail created with Recipe Builder',
      price: calculatePrice(),
      category: 'mocktail',
      deliveryType: 'daily',
      images: [],
      thumbnail: '',
      ingredients: [
        ...recipe.flavors,
        ...recipe.mixins,
        ...recipe.toppings,
      ],
      allergens: [],
      dietary: [],
      inStock: true,
      featured: false,
      rating: 5,
      reviewCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Create customization details
    const customization = {
      name: recipeName || generateRecipeName(),
      base: recipe.base,
      flavors: recipe.flavors,
      mixins: recipe.mixins,
      toppings: recipe.toppings,
      size: recipe.size,
      estimatedCalories: calculateCalories(),
      price: calculatePrice(),
    };

    // Add to cart with customization
    addToCart(customProduct, 1, customization);

    // Show confetti and open cart
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      openCart();
    }, 1500);
  };

  // Toggle flavor selection
  const toggleFlavor = (flavorId: string) => {
    setRecipe((prev) => ({
      ...prev,
      flavors: prev.flavors.includes(flavorId)
        ? prev.flavors.filter((f) => f !== flavorId)
        : [...prev.flavors, flavorId],
    }));
  };

  // Toggle mixin selection
  const toggleMixin = (mixinId: string) => {
    setRecipe((prev) => ({
      ...prev,
      mixins: prev.mixins.includes(mixinId)
        ? prev.mixins.filter((m) => m !== mixinId)
        : [...prev.mixins, mixinId],
    }));
  };

  // Toggle topping selection
  const toggleTopping = (toppingId: string) => {
    setRecipe((prev) => ({
      ...prev,
      toppings: prev.toppings.includes(toppingId)
        ? prev.toppings.filter((t) => t !== toppingId)
        : [...prev.toppings, toppingId],
    }));
  };

  const steps = [
    { number: 1, title: 'Choose Base', key: 'base' },
    { number: 2, title: 'Select Flavors', key: 'flavors' },
    { number: 3, title: 'Add Mix-ins', key: 'mixins' },
    { number: 4, title: 'Pick Toppings', key: 'toppings' },
    { number: 5, title: 'Choose Size', key: 'size' },
  ];

  return (
    <div className="min-h-screen bg-cream-bg">
      {/* Hero - Premium & Mobile Optimized */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image from Unsplash */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1502741509171-6c0f3e4f1466?w=1920&q=80&auto=format&fit=crop"
            alt="Fresh ingredients and mixing"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-primary/80 via-black/60 to-teal-accent/70"></div>
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
          className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        />

        <div className="container-fof relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
              🎨 Recipe Builder
            </h1>
            <p className="text-xl mb-2">
              Create Your Perfect Mocktail
            </p>
            <p className="text-sm opacity-90">
              Mix, match, and make it yours!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-white shadow-md sticky top-20 z-40">
        <div className="container-fof py-4">
          <div className="flex justify-between items-center">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center flex-1"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    currentStep >= step.number
                      ? 'bg-gold-primary text-white scale-110'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {currentStep > step.number ? '✓' : step.number}
                </div>
                <span
                  className={`text-xs mt-2 hidden md:block ${
                    currentStep >= step.number
                      ? 'text-gold-primary font-semibold'
                      : 'text-gray-500'
                  }`}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Builder */}
      <section className="section-padding">
        <div className="container-fof">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Selection Panel */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="card p-8"
              >
                <AnimatePresence mode="wait">
                  {/* Step 1: Choose Base */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                    >
                      <h2 className="text-3xl font-heading font-bold mb-6">
                        Step 1: Choose Your Base
                      </h2>
                      <div className="grid md:grid-cols-3 gap-4">
                        {RECIPE_OPTIONS.BASES.map((base) => (
                          <motion.button
                            key={base.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                              setRecipe({ ...recipe, base: base.id })
                            }
                            className={`p-6 rounded-fof border-2 transition-all ${
                              recipe.base === base.id
                                ? 'border-gold-primary bg-gold-primary/10'
                                : 'border-gray-200 hover:border-gold-primary/50'
                            }`}
                          >
                            <div className="text-4xl mb-2">💧</div>
                            <div className="font-semibold">{base.name}</div>
                            <div className="text-sm text-gray-600 mt-1">
                              {base.price === 0
                                ? 'Free'
                                : `+£${base.price.toFixed(2)}`}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Select Flavors */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                    >
                      <h2 className="text-3xl font-heading font-bold mb-6">
                        Step 2: Select Flavors
                        <span className="text-sm text-gray-500 ml-2">
                          (Select multiple)
                        </span>
                      </h2>
                      <div className="grid md:grid-cols-4 gap-4">
                        {RECIPE_OPTIONS.FLAVORS.map((flavor) => (
                          <motion.button
                            key={flavor.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => toggleFlavor(flavor.id)}
                            className={`p-4 rounded-fof border-2 transition-all ${
                              recipe.flavors.includes(flavor.id)
                                ? 'border-gold-primary bg-gold-primary/10'
                                : 'border-gray-200 hover:border-gold-primary/50'
                            }`}
                          >
                            <div className="text-3xl mb-2">🍓</div>
                            <div className="font-semibold text-sm">
                              {flavor.name}
                            </div>
                            <div className="text-xs text-gray-600 mt-1">
                              +£{flavor.price.toFixed(2)}
                            </div>
                            {recipe.flavors.includes(flavor.id) && (
                              <div className="text-green-primary text-xl mt-2">
                                ✓
                              </div>
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Add Mix-ins */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                    >
                      <h2 className="text-3xl font-heading font-bold mb-6">
                        Step 3: Add Mix-ins
                        <span className="text-sm text-gray-500 ml-2">
                          (Optional)
                        </span>
                      </h2>
                      <div className="grid md:grid-cols-4 gap-4">
                        {RECIPE_OPTIONS.MIXINS.map((mixin) => (
                          <motion.button
                            key={mixin.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => toggleMixin(mixin.id)}
                            className={`p-4 rounded-fof border-2 transition-all ${
                              recipe.mixins.includes(mixin.id)
                                ? 'border-gold-primary bg-gold-primary/10'
                                : 'border-gray-200 hover:border-gold-primary/50'
                            }`}
                          >
                            <div className="text-3xl mb-2">🌿</div>
                            <div className="font-semibold text-sm">
                              {mixin.name}
                            </div>
                            <div className="text-xs text-gray-600 mt-1">
                              +£{mixin.price.toFixed(2)}
                            </div>
                            {recipe.mixins.includes(mixin.id) && (
                              <div className="text-green-primary text-xl mt-2">
                                ✓
                              </div>
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Pick Toppings */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                    >
                      <h2 className="text-3xl font-heading font-bold mb-6">
                        Step 4: Pick Toppings
                        <span className="text-sm text-gray-500 ml-2">
                          (Optional)
                        </span>
                      </h2>
                      <div className="grid md:grid-cols-4 gap-4">
                        {RECIPE_OPTIONS.TOPPINGS.map((topping) => (
                          <motion.button
                            key={topping.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => toggleTopping(topping.id)}
                            className={`p-4 rounded-fof border-2 transition-all ${
                              recipe.toppings.includes(topping.id)
                                ? 'border-gold-primary bg-gold-primary/10'
                                : 'border-gray-200 hover:border-gold-primary/50'
                            }`}
                          >
                            <div className="text-3xl mb-2">🌸</div>
                            <div className="font-semibold text-sm">
                              {topping.name}
                            </div>
                            <div className="text-xs text-gray-600 mt-1">
                              +£{topping.price.toFixed(2)}
                            </div>
                            {recipe.toppings.includes(topping.id) && (
                              <div className="text-green-primary text-xl mt-2">
                                ✓
                              </div>
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 5: Choose Size */}
                  {currentStep === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                    >
                      <h2 className="text-3xl font-heading font-bold mb-6">
                        Step 5: Choose Size
                      </h2>
                      <div className="grid md:grid-cols-4 gap-4">
                        {RECIPE_OPTIONS.SIZES.map((size) => (
                          <motion.button
                            key={size.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                              setRecipe({ ...recipe, size: size.id })
                            }
                            className={`p-6 rounded-fof border-2 transition-all ${
                              recipe.size === size.id
                                ? 'border-gold-primary bg-gold-primary/10'
                                : 'border-gray-200 hover:border-gold-primary/50'
                            }`}
                          >
                            <div className="text-4xl mb-2">🥤</div>
                            <div className="font-semibold">{size.name}</div>
                            <div className="text-sm text-gray-600 mt-1">
                              {size.price === 0
                                ? 'Free'
                                : `+£${size.price.toFixed(2)}`}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                    className={`btn-outline ${
                      currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => setCurrentStep(Math.min(5, currentStep + 1))}
                    disabled={currentStep === 5}
                    className={`btn-primary ${
                      currentStep === 5 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    Next →
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right: Preview & Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="card p-6 sticky top-32"
              >
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Your Creation
                </h3>

                {/* Live Preview */}
                <div className="mb-6 relative">
                  <motion.div
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-full h-48 bg-gradient-to-b from-gold-primary/20 to-green-primary/30 rounded-fof flex items-center justify-center"
                  >
                    <span className="text-7xl">🍹</span>
                  </motion.div>
                  {showConfetti && (
                    <div className="absolute inset-0 flex items-center justify-center text-6xl pointer-events-none">
                      🎉
                    </div>
                  )}
                </div>

                {/* Recipe Name */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Recipe Name
                  </label>
                  <input
                    type="text"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                    placeholder={generateRecipeName()}
                    className="input-field text-sm"
                  />
                </div>

                {/* Ingredients List */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Ingredients:</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    {recipe.base && (
                      <li>
                        • Base:{' '}
                        {RECIPE_OPTIONS.BASES.find((b) => b.id === recipe.base)
                          ?.name}
                      </li>
                    )}
                    {recipe.flavors.length > 0 && (
                      <li>• Flavors: {recipe.flavors.length} selected</li>
                    )}
                    {recipe.mixins.length > 0 && (
                      <li>• Mix-ins: {recipe.mixins.length} selected</li>
                    )}
                    {recipe.toppings.length > 0 && (
                      <li>• Toppings: {recipe.toppings.length} selected</li>
                    )}
                    <li>• Size: {recipe.size}</li>
                  </ul>
                </div>

                {/* Price & Calories */}
                <div className="mb-6 p-4 bg-cream-bg rounded-fof">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Estimated Calories:</span>
                    <span className="font-semibold">{calculateCalories()} cal</span>
                  </div>
                  <div className="flex justify-between text-xl">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold text-gold-primary">
                      £{calculatePrice().toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleAddToCart}
                    disabled={!recipe.base}
                    className={`btn-primary w-full ${
                      !recipe.base ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    Add to Cart
                  </button>
                  <button className="btn-outline w-full text-sm">
                    Save Recipe
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipeBuilder;
