import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import ChristmasNotice from './components/banners/ChristmasNotice';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import RecipeBuilder from './pages/RecipeBuilder';
import Events from './pages/Events';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Checkout from './pages/Checkout';
import CustomOrder from './pages/CustomOrder';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import SavedRecipes from './pages/SavedRecipes';
// Legal & Info Pages - imported for footer links
import FAQ from './pages/FAQ';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <ChristmasNotice />
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/custom-order" element={<CustomOrder />} />
          <Route path="/recipe-builder" element={<RecipeBuilder />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
          <Route path="/admin" element={<Admin />} />
          {/* Legal & Info Pages - routes for footer links */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}

export default App;
