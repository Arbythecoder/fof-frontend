import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface DrinkOption {
  id: string;
  name: string;
  emoji: string;
  pricePerLitre: number;
}

const AVAILABLE_DRINKS: DrinkOption[] = [
  { id: 'mojito', name: 'Mojito', emoji: '🍹', pricePerLitre: 6.50 },
  { id: 'chapman', name: 'Chapman', emoji: '🥤', pricePerLitre: 5.50 },
  { id: 'pina-colada', name: 'Pina Colada', emoji: '🥥', pricePerLitre: 7.00 },
  { id: 'passion-fruit', name: 'Passion Fruit', emoji: '🍊', pricePerLitre: 6.00 },
];

interface DrinkSelectorProps {
  selectedDrinks: DrinkOption[];
  onDrinksChange: (drinks: DrinkOption[]) => void;
}

const DrinkSelector: React.FC<DrinkSelectorProps> = ({ selectedDrinks, onDrinksChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrink = (drink: DrinkOption) => {
    const isSelected = selectedDrinks.some(d => d.id === drink.id);
    if (isSelected) {
      onDrinksChange(selectedDrinks.filter(d => d.id !== drink.id));
    } else {
      onDrinksChange([...selectedDrinks, drink]);
    }
  };

  const isDrinkSelected = (drinkId: string) => {
    return selectedDrinks.some(d => d.id === drinkId);
  };

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Drinks *
      </label>

      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-left flex items-center justify-between hover:border-gold-primary transition-colors"
      >
        <span className="text-gray-700">
          {selectedDrinks.length === 0 ? (
            'Choose your drinks...'
          ) : (
            `${selectedDrinks.length} drink${selectedDrinks.length > 1 ? 's' : ''} selected`
          )}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Selected Drinks Display */}
      {selectedDrinks.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {selectedDrinks.map((drink) => (
            <motion.div
              key={drink.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="bg-gold-primary/10 text-gold-primary px-3 py-1 rounded-full text-sm flex items-center gap-2"
            >
              <span>{drink.emoji}</span>
              <span>{drink.name}</span>
              <button
                type="button"
                onClick={() => toggleDrink(drink)}
                className="hover:text-red-600 transition-colors"
              >
                ×
              </button>
            </motion.div>
          ))}
        </div>
      )}

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 w-full mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-2xl overflow-hidden"
          >
            <div className="p-2 space-y-1">
              {AVAILABLE_DRINKS.map((drink) => {
                const isSelected = isDrinkSelected(drink.id);
                return (
                  <button
                    key={drink.id}
                    type="button"
                    onClick={() => toggleDrink(drink)}
                    className={`w-full p-3 rounded-lg text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-gold-primary text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{drink.emoji}</span>
                      <div>
                        <p className="font-medium">{drink.name}</p>
                        <p className={`text-xs ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                          £{drink.pricePerLitre.toFixed(2)}/litre
                        </p>
                      </div>
                    </div>
                    {isSelected && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DrinkSelector;
