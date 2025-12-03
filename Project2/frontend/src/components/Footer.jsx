import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-blue-700 text-white mt-12 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-3">KaamSet.in</h3>
          <p className="text-sm text-gray-200">
            Your local trusted service marketplace.  
            Book professional services anytime, anywhere in Rajasthan.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Book a Service</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Popular Services</h4>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-white cursor-pointer">Electrician</li>
            <li className="hover:text-white cursor-pointer">Plumber</li>
            <li className="hover:text-white cursor-pointer">Carpenter</li>
            <li className="hover:text-white cursor-pointer">Cleaning</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-2xl">
            <FaFacebook className="cursor-pointer hover:text-yellow-300" />
            <FaInstagram className="cursor-pointer hover:text-yellow-300" />
            <FaTwitter className="cursor-pointer hover:text-yellow-300" />
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="w-full border-t border-blue-400 mt-10 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} KaamSet.in — All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
