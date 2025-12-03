import React from 'react'

function AboutUs() {
  return (
      <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">About Us</h1>

        <p className="text-gray-700 mb-4">
          Welcome to <b>[Your Company Name]</b> — your trusted online marketplace
          for authentic, affordable, and quality products from local sellers across India.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          To empower small businesses and local sellers by giving them a platform to
          reach customers nationwide.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Our Vision</h2>
        <p className="text-gray-700 mb-4">
          To become India’s most trusted online platform that promotes “Made in India” products.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
        <ul className="text-gray-700 mb-4">
          <li>📍 Jaipur, Rajasthan, India</li>
          <li>📧 support@[yourdomain].com</li>
          <li>📞 +91 9876543210</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutUs