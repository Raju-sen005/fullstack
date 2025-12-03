import React from "react";
import { ShoppingCart, Heart, Search } from "lucide-react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* 🔹 Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold text-gray-800 ">
            E-Commerce
          </span>
        </div>

        {/* 🔹 Search Bar */}
        <div className="hidden md:flex items-center flex-1 mx-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              className="w-full rounded-full border border-gray-300 px-4 py-2 pl-10 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0.5 focus:ring-[#66b2b2]"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* 🔹 Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/wishlist">
            <button className="relative text-gray-600 hover:text-[#66b2b2]">
              <Heart className="w-6 h-6" />
            </button>
          </Link>
          <Link to="/cart">
            <button className="relative text-gray-600 hover:text-[#66b2b2]">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </div>

      {/* 🔹 Mobile Search */}
      <div className="block md:hidden px-4 pb-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full rounded-full border border-gray-300 px-4 py-2 pl-10 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
