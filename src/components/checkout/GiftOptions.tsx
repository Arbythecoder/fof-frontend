import { motion, AnimatePresence } from 'framer-motion';

interface ReceiverDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postcode: string;
}

interface GiftOptionsProps {
  isGift: boolean;
  onGiftToggle: (isGift: boolean) => void;
  giftMessage: string;
  onGiftMessageChange: (message: string) => void;
  receiverDetails: ReceiverDetails;
  onReceiverDetailsChange: (details: ReceiverDetails) => void;
}

const GiftOptions: React.FC<GiftOptionsProps> = ({
  isGift,
  onGiftToggle,
  giftMessage,
  onGiftMessageChange,
  receiverDetails,
  onReceiverDetailsChange,
}) => {
  const handleReceiverChange = (field: keyof ReceiverDetails, value: string) => {
    onReceiverDetailsChange({
      ...receiverDetails,
      [field]: value,
    });
  };

  return (
    <div className="space-y-6">
      {/* Gift Toggle */}
      <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-gold-primary/5 to-green-light/5 rounded-lg border-2 border-gold-primary/20">
        <input
          type="checkbox"
          id="isGift"
          checked={isGift}
          onChange={(e) => onGiftToggle(e.target.checked)}
          className="w-5 h-5 text-gold-primary rounded focus:ring-gold-primary"
        />
        <label htmlFor="isGift" className="flex items-center gap-2 cursor-pointer">
          <span className="text-2xl">🎁</span>
          <div>
            <p className="font-medium text-gray-900">Send as a Gift</p>
            <p className="text-xs text-gray-600">Deliver to someone special with a personalized message</p>
          </div>
        </label>
      </div>

      {/* Gift Details */}
      <AnimatePresence>
        {isGift && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-6"
          >
            {/* Gift Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gift Message (Optional)
              </label>
              <textarea
                value={giftMessage}
                onChange={(e) => onGiftMessageChange(e.target.value)}
                maxLength={250}
                rows={4}
                placeholder="Write a special message for the receiver..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary resize-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                {giftMessage.length}/250 characters
              </p>
            </div>

            {/* Receiver Details */}
            <div className="p-6 bg-green-light/5 rounded-lg border-2 border-green-secondary/20">
              <h3 className="text-lg font-heading font-bold mb-4 flex items-center gap-2">
                <span>👤</span> Receiver's Details
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Receiver's Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={receiverDetails.fullName}
                    onChange={(e) => handleReceiverChange('fullName', e.target.value)}
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Receiver's Email
                  </label>
                  <input
                    type="email"
                    value={receiverDetails.email}
                    onChange={(e) => handleReceiverChange('email', e.target.value)}
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Receiver's Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={receiverDetails.phone}
                    onChange={(e) => handleReceiverChange('phone', e.target.value)}
                    className="input-field"
                    placeholder="+44 1234 567890"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={receiverDetails.address}
                    onChange={(e) => handleReceiverChange('address', e.target.value)}
                    className="input-field"
                    placeholder="House/Flat Number, Street Address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={receiverDetails.city}
                    onChange={(e) => handleReceiverChange('city', e.target.value)}
                    className="input-field"
                    placeholder="London"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    required
                    value={receiverDetails.postcode}
                    onChange={(e) => handleReceiverChange('postcode', e.target.value)}
                    className="input-field"
                    placeholder="SW1A 1AA"
                  />
                </div>
              </div>

              <p className="mt-4 text-xs text-gray-600 bg-white p-3 rounded-lg">
                📦 The gift will be delivered to this address with your personalized message attached.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GiftOptions;
