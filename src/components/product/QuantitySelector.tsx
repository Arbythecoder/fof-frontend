import { useState } from 'react';

interface QuantitySelectorProps {
  quantity: number | string;
  onQuantityChange: (quantity: number | string) => void;
}

const PRESET_QUANTITIES = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onQuantityChange }) => {
  const [isCustom, setIsCustom] = useState(false);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === 'custom') {
      setIsCustom(true);
      onQuantityChange('');
    } else {
      setIsCustom(false);
      onQuantityChange(parseInt(value));
    }
  };

  const handleCustomInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onQuantityChange(value);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Quantity (Litres) *
      </label>

      {!isCustom ? (
        <select
          value={typeof quantity === 'number' ? quantity : 'custom'}
          onChange={handleSelectChange}
          className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg hover:border-gold-primary transition-colors focus:outline-none focus:ring-2 focus:ring-gold-primary"
        >
          <option value="">Select quantity...</option>
          {PRESET_QUANTITIES.map((qty) => (
            <option key={qty} value={qty}>
              {qty} Litres - £{(qty * 6.5).toFixed(2)}
            </option>
          ))}
          <option value="custom">Other (Custom Amount)</option>
        </select>
      ) : (
        <div className="space-y-2">
          <div className="flex gap-2">
            <input
              type="number"
              min="1"
              max="100"
              value={quantity}
              onChange={handleCustomInput}
              placeholder="Enter custom quantity..."
              className="flex-1 px-4 py-3 bg-white border-2 border-gray-300 rounded-lg hover:border-gold-primary transition-colors focus:outline-none focus:ring-2 focus:ring-gold-primary"
            />
            <button
              type="button"
              onClick={() => {
                setIsCustom(false);
                onQuantityChange(2);
              }}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm"
            >
              Cancel
            </button>
          </div>
          {quantity && typeof quantity === 'string' && !isNaN(Number(quantity)) && (
            <p className="text-sm text-gray-600">
              Estimated Price: <span className="font-bold text-gold-primary">
                £{(Number(quantity) * 6.5).toFixed(2)}
              </span>
            </p>
          )}
        </div>
      )}

      {!isCustom && quantity && (
        <p className="mt-2 text-xs text-gray-500">
          💡 Need a different amount? Select "Other (Custom Amount)"
        </p>
      )}
    </div>
  );
};

export default QuantitySelector;
