import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { UserCircleIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, KeyIcon } from '@heroicons/react/24/outline';
import api from '../services/api';
import BackToTop from '../components/common/BackToTop';

const Profile = () => {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=/profile');
    } else {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || ''
      });
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      const response = await api.patch('/api/users/me', formData);

      // Update user in context
      if (updateUser) {
        updateUser(response.data.data);
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen bg-cream-bg py-12">
      <div className="container-fof max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">
            My Profile
          </h1>
          <p className="text-gray-600">
            Manage your account information and preferences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="card p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-gold-primary to-green-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCircleIcon className="w-16 h-16 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-1">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => navigate('/profile')}
                  className="w-full text-left px-4 py-3 rounded-fof bg-gold-primary/10 text-gold-primary font-medium"
                >
                  Personal Info
                </button>
                <button
                  onClick={() => navigate('/orders')}
                  className="w-full text-left px-4 py-3 rounded-fof hover:bg-gray-100 transition-colors"
                >
                  My Orders
                </button>
                <button
                  onClick={() => navigate('/saved-recipes')}
                  className="w-full text-left px-4 py-3 rounded-fof hover:bg-gray-100 transition-colors"
                >
                  Saved Recipes
                </button>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="card p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Personal Information</h2>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-fof text-green-600"
                >
                  Profile updated successfully!
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-fof text-red-600 text-sm"
                >
                  {error}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <UserCircleIcon className="w-5 h-5 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="input-field"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <EnvelopeIcon className="w-5 h-5 inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="input-field"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <PhoneIcon className="w-5 h-5 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="input-field"
                    placeholder="+44 7123 456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPinIcon className="w-5 h-5 inline mr-2" />
                    Address
                  </label>
                  <textarea
                    rows={3}
                    className="input-field"
                    placeholder="Enter your delivery address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`btn-primary w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </form>

              {/* Change Password Section */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-xl font-heading font-bold mb-4">
                  <KeyIcon className="w-6 h-6 inline mr-2" />
                  Security
                </h3>
                <button
                  onClick={() => navigate('/change-password')}
                  className="btn-outline"
                >
                  Change Password
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
};

export default Profile;
