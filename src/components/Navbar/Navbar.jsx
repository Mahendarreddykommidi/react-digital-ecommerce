import React, { useContext, useState } from 'react'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../../context/context';
import logo from "../../../public/images/log.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartAmount } = useContext(ShopContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative bg-white shadow-2xl text-lg md:text-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img
                className="h-10 w-auto md:h-12"
                src={logo}
                alt="Company Logo"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between space-x-4 capitalize">
            <NavLink to="/" className="hover:text-blue-600 transition-colors">
              <li>Home</li>
            </NavLink>
            <NavLink to="/about" className="hover:text-blue-600 transition-colors">
              <li>About</li>
            </NavLink>
            <NavLink to="/products" className="hover:text-blue-600 transition-colors">
              <li>Products</li>
            </NavLink>
            <NavLink to="/contact" className="hover:text-blue-600 transition-colors">
              <li>Contact</li>
            </NavLink>
          </div>

          {/* Shopping Cart Icon */}
          <div className="relative flex items-center space-x-4">
            <NavLink to="/cart" className="relative">
              <ShoppingCart size={30} className="text-gray-700 hover:text-blue-600 transition-colors" />
              <p className="absolute right-[-5px] bottom-[-5px] text-center cursor-pointer font-bold leading-4 w-4 aspect-square rounded-full text-[8px] text-white bg-black">
                {getTotalCartAmount()}
              </p>
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute z-10 inset-x-0 top-full bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink to="/" className="block hover:text-blue-600 transition-colors">
                <li>Home</li>
              </NavLink>
              <NavLink to="/about" className="block hover:text-blue-600 transition-colors">
                <li>About</li>
              </NavLink>
              <NavLink to="/products" className="block hover:text-blue-600 transition-colors">
                <li>Products</li>
              </NavLink>
              <NavLink to="/contact" className="block hover:text-blue-600 transition-colors">
                <li>Contact</li>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;