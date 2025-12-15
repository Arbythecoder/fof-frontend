import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { HeartIcon, ClockIcon, UsersIcon, ChartBarIcon, TrashIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import api from '../services/api';
import BackToTop from '../components/common/BackToTop';

interface Recipe {
  _id: string;
  name: string;
  description: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  thumbnail?: string;
  images?: string[];
  category?: string;
}

const SavedRecipes = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=/saved-recipes');
      return;
    }

    fetchSavedRecipes();
  }, [user, navigate]);

  const fetchSavedRecipes = async () => {
    try {
      const response = await api.get('/api/users/favorites');
      setRecipes(response.data.data || []);
    } catch (err: any) {
      console.error('Error fetching saved recipes:', err);
      setError(err.response?.data?.message || 'Failed to load saved recipes');
    } finally {
      setLoading(false);
    }
  };

  const removeFromFavorites = async (recipeId: string) => {
    try {
      await api.delete(`/api/users/favorites/${recipeId}`);
      setRecipes(recipes.filter(recipe => recipe._id !== recipeId));
    } catch (err: any) {
      console.error('Error removing recipe:', err);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'text-green-600 bg-green-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'hard':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
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
          <div className="flex items-center gap-3 mb-2">
            <HeartSolidIcon className="w-10 h-10 text-gold-primary" />
            <h1 className="text-4xl font-heading font-bold text-gray-900">
              Saved Recipes
            </h1>
          </div>
          <p className="text-gray-600">
            Your collection of favorite recipes
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gold-primary border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Loading your saved recipes...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card p-6 text-center"
          >
            <p className="text-red-600">{error}</p>
          </motion.div>
        )}

        {/* Empty State */}
        {!loading && !error && recipes.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card p-12 text-center"
          >
            <HeartIcon className="w-20 h-20 text-gray-300 mx-auto mb-6" />
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
              No saved recipes yet
            </h3>
            <p className="text-gray-600 mb-6">
              Start exploring and save your favorite recipes
            </p>
            <button
              onClick={() => navigate('/recipe-builder')}
              className="btn-primary"
            >
              Explore Recipes
            </button>
          </motion.div>
        )}

        {/* Recipes Grid */}
        {!loading && !error && recipes.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe, index) => (
              <motion.div
                key={recipe._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden group hover:shadow-xl transition-shadow"
              >
                {/* Recipe Image */}
                <div className="relative h-48 bg-gradient-to-br from-gold-primary/20 to-green-primary/20 overflow-hidden">
                  {recipe.thumbnail || recipe.images?.[0] ? (
                    <img
                      src={recipe.thumbnail || recipe.images?.[0]}
                      alt={recipe.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl">🍹</span>
                    </div>
                  )}

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromFavorites(recipe._id)}
                    className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-red-50 transition-colors group/btn"
                    title="Remove from saved recipes"
                  >
                    <TrashIcon className="w-5 h-5 text-gray-600 group-hover/btn:text-red-500" />
                  </button>

                  {/* Category Badge */}
                  {recipe.category && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                      {recipe.category}
                    </span>
                  )}
                </div>

                {/* Recipe Content */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-2 text-gray-900 group-hover:text-gold-primary transition-colors">
                    {recipe.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {recipe.description}
                  </p>

                  {/* Recipe Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <ClockIcon className="w-4 h-4" />
                      <span>{(recipe.prepTime || 0) + (recipe.cookTime || 0)} min</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <UsersIcon className="w-4 h-4" />
                      <span>{recipe.servings} servings</span>
                    </div>
                  </div>

                  {/* Difficulty Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <ChartBarIcon className="w-4 h-4 text-gray-500" />
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                      {recipe.difficulty?.charAt(0).toUpperCase() + recipe.difficulty?.slice(1)}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <button
                    onClick={() => navigate(`/recipe/${recipe._id}`)}
                    className="btn-primary w-full text-sm"
                  >
                    View Recipe
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Recipe Count */}
        {!loading && recipes.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-center text-gray-600"
          >
            {recipes.length} {recipes.length === 1 ? 'recipe' : 'recipes'} saved
          </motion.div>
        )}
      </div>

      <BackToTop />
    </div>
  );
};

export default SavedRecipes;
