import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ShoppingBagIcon, ClockIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import api from '../services/api';
import BackToTop from '../components/common/BackToTop';

interface OrderItem {
  product: {
    _id: string;
    name: string;
    thumbnail?: string;
    images?: string[];
  };
  name: string;
  quantity: number;
  price: number;
  image?: string;
}

interface Order {
  _id: string;
  orderItems: OrderItem[];
  totalPrice: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  isPaid: boolean;
  isDelivered: boolean;
  createdAt: string;
  deliveredAt?: string;
  shippingAddress?: {
    fullName: string;
    address: string;
    city: string;
    postcode: string;
  };
}

const Orders = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=/orders');
      return;
    }

    fetchOrders();
  }, [user, navigate]);

  const fetchOrders = async () => {
    try {
      const response = await api.get('/api/orders');
      setOrders(response.data.data || []);
    } catch (err: any) {
      console.error('Error fetching orders:', err);
      setError(err.response?.data?.message || 'Failed to load orders');
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <ClockIcon className="w-5 h-5 text-yellow-500" />;
      case 'processing':
        return <ClockIcon className="w-5 h-5 text-blue-500" />;
      case 'completed':
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      case 'cancelled':
        return <XCircleIcon className="w-5 h-5 text-red-500" />;
      default:
        return <ClockIcon className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'processing':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'completed':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'cancelled':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-cream-bg py-12">
      <div className="container-fof max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">
            My Orders
          </h1>
          <p className="text-gray-600">
            View and track your order history
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gold-primary border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Loading your orders...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card p-6 text-center"
          >
            <XCircleIcon className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <p className="text-red-600">{error}</p>
          </motion.div>
        )}

        {/* Empty State */}
        {!loading && !error && orders.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card p-12 text-center"
          >
            <ShoppingBagIcon className="w-20 h-20 text-gray-300 mx-auto mb-6" />
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
              No orders yet
            </h3>
            <p className="text-gray-600 mb-6">
              Start shopping to see your orders here
            </p>
            <button
              onClick={() => navigate('/products')}
              className="btn-primary"
            >
              Browse Products
            </button>
          </motion.div>
        )}

        {/* Orders List */}
        {!loading && !error && orders.length > 0 && (
          <div className="space-y-6">
            {orders.map((order, index) => (
              <motion.div
                key={order._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                {/* Order Header */}
                <div className="flex flex-wrap justify-between items-start mb-6 pb-4 border-b">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-heading font-bold text-lg">
                        Order #{order._id.slice(-8).toUpperCase()}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                        <span className="inline-flex items-center gap-1">
                          {getStatusIcon(order.status)}
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Placed on {formatDate(order.createdAt)}
                    </p>
                  </div>
                  <div className="text-right mt-2 sm:mt-0">
                    <p className="text-sm text-gray-600">Total</p>
                    <p className="text-2xl font-bold text-gold-primary">
                      £{order.totalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  {order.orderItems?.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold-primary/20 to-green-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🍹</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                        <p className="text-sm font-bold text-gold-primary">
                          £{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Shipping Address */}
                {order.shippingAddress && (
                  <div className="bg-gray-50 rounded-fof p-4">
                    <h4 className="font-semibold text-sm mb-2">Delivery Address</h4>
                    <p className="text-sm text-gray-600">
                      {order.shippingAddress.fullName}<br />
                      {order.shippingAddress.address}<br />
                      {order.shippingAddress.city}, {order.shippingAddress.postcode}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => navigate(`/orders/${order._id}`)}
                    className="btn-outline text-sm flex-1 sm:flex-none"
                  >
                    View Details
                  </button>
                  {order.status === 'completed' && (
                    <button
                      onClick={() => navigate('/products')}
                      className="btn-primary text-sm flex-1 sm:flex-none"
                    >
                      Order Again
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <BackToTop />
    </div>
  );
};

export default Orders;
