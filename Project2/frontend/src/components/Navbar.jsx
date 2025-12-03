import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="w-full h-5 bg-blue-600"></div>
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-700">KaamSet.in</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex list-none gap-10 text-gray-700 font-medium">
            <Link to="/">
              <li className="cursor-pointer hover:text-blue-600">Home</li>
            </Link>
            <Link to="/services">
              <li className="cursor-pointer hover:text-blue-600">
                Book a Service
              </li>
            </Link>
          </ul>
        </nav>

        {/* Desktop Login Button */}
        <div className="hidden md:flex">
          <button className="text-blue-600 hover:text-blue-700 transition">
            <FaRegUser className="text-2xl" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-blue-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-sm py-4 px-4 border-t">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li className="cursor-pointer hover:text-blue-600">Home</li>
            <Link to="/services">
              <li className="cursor-pointer hover:text-blue-600">
                Book a Service
              </li>
            </Link>
          </ul>

          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700">
            Login
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
