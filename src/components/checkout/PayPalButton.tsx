import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useState } from 'react';
import axios from 'axios';

interface PayPalButtonProps {
  orderId: string;
  onSuccess: () => void;
  onError: (error: string) => void;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ orderId, onSuccess, onError }) => {
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

  // Get auth token from localStorage
  const getAuthToken = () => {
    const token = localStorage.getItem('token');
    return token;
  };

  const createOrder = async () => {
    try {
      setLoading(true);
      const token = getAuthToken();

      const { data } = await axios.post(
        `${apiUrl}/api/payments/paypal/create-order`,
        { orderId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      return data.id;
    } catch (error: any) {
      console.error('Error creating PayPal order:', error);
      onError(error.response?.data?.message || 'Failed to create PayPal order');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const onApprove = async (data: any) => {
    try {
      setLoading(true);
      const token = getAuthToken();

      await axios.post(
        `${apiUrl}/api/payments/paypal/capture`,
        {
          orderID: data.orderID,
          orderId: orderId
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      onSuccess();
    } catch (error: any) {
      console.error('Error capturing PayPal payment:', error);
      onError(error.response?.data?.message || 'Failed to capture payment');
    } finally {
      setLoading(false);
    }
  };

  const initialOptions = {
    clientId: clientId,
    currency: 'EUR',
    intent: 'capture',
  };

  return (
    <div className="paypal-button-container">
      {loading && (
        <div className="text-center py-4">
          <div className="animate-spin inline-block w-6 h-6 border-4 border-gold-primary border-t-transparent rounded-full"></div>
          <p className="text-sm text-gray-600 mt-2">Processing payment...</p>
        </div>
      )}

      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          onError={(err) => {
            console.error('PayPal error:', err);
            onError('An error occurred with PayPal. Please try again.');
          }}
          style={{
            layout: 'vertical',
            color: 'gold',
            shape: 'rect',
            label: 'paypal',
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default PayPalButton;
