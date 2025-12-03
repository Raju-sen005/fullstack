import React from 'react'

function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Terms of Service</h1>
        <p className="text-gray-700 mb-4">Last updated: November 2025</p>

        <p className="text-gray-700 mb-4">
          By using <b>[Your Company Name]</b>, you agree to follow the terms and conditions below.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Account Responsibility</h2>
        <p className="text-gray-700 mb-4">
          You are responsible for maintaining the confidentiality of your login credentials.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Product & Pricing</h2>
        <p className="text-gray-700 mb-4">
          We strive for accuracy but may correct pricing or description errors anytime.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Orders & Payments</h2>
        <p className="text-gray-700 mb-4">
          All orders are subject to availability. Payments must be made through approved gateways.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          We are not liable for any indirect or incidental damages resulting from use of our services.
        </p>

        <p className="text-gray-700">
          For queries, contact <b>support@[yourdomain].com</b>.
        </p>
      </div>
    </div>
  )
}

export default TermsOfService