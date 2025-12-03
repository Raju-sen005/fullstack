import React from 'react'

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          Last updated: November 2025
        </p>

        <p className="text-gray-700 mb-4">
          At <b>[Your Company Name]</b>, we value your privacy and are committed to
          protecting your personal data. This Privacy Policy explains how we collect,
          use, and safeguard your information when you use our website or services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Name, email, phone number, and address.</li>
          <li>Payment details for order processing.</li>
          <li>Cookies, IP address, and browsing data.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Data</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>To process orders and provide services.</li>
          <li>To improve website performance.</li>
          <li>To send promotional offers and updates.</li>
        </ul>

        <p className="text-gray-700">
          For any privacy-related questions, contact us at{" "}
          <b>support@[yourdomain].com</b>.
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy