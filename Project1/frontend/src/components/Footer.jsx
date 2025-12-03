import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 🔹 Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">E-Commerce</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your one-stop shop for electronics, fashion, and daily essentials.
              We provide high-quality products at affordable prices.
            </p>
          </div>

          {/* 🔹 Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy-policy" className="hover:text-blue-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-blue-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/refund-policy" className="hover:text-blue-400 transition">
                  Refund & Return Policy
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-blue-400 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* 🔹 Contact Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span>Email:</span>{" "}
                <a href="mailto:support@ecommerce.com" className="hover:text-blue-400 transition">
                  support@ecommerce.com
                </a>
              </li>
              <li>
                <span>Phone:</span>{" "}
                <a href="tel:+919999999999" className="hover:text-blue-400 transition">
                  +91 99999 99999
                </a>
              </li>
              <li>
                <span>Address:</span> Jaipur, Rajasthan, India
              </li>
            </ul>
          </div>
        </div>

        {/* 🔹 Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© 2026 E-Commerce. All rights reserved.</p>
          <div className="mt-3 flex justify-center space-x-4">
            <a href="/about" className="hover:text-blue-400 transition">
              About Us
            </a>
            <a href="/support" className="hover:text-blue-400 transition">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
