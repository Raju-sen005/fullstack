import React from 'react'

function ReturnRefundPolicy() {
  return (
     <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">
          Return & Refund Policy
        </h1>
        <p className="text-gray-700 mb-4">Last updated: November 2025</p>

        <p className="text-gray-700 mb-4">
          Thank you for shopping with <b>[Your Company Name]</b>. We aim to ensure you are
          completely satisfied with your purchase.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Returns</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Return within 7 days of delivery.</li>
          <li>Item must be unused and in original packaging.</li>
          <li>Digital or personal care products are non-returnable.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Refunds</h2>
        <p className="text-gray-700 mb-4">
          Once your return is inspected, we will notify you. Approved refunds
          will be processed within 5–7 business days.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Exchanges</h2>
        <p className="text-gray-700 mb-4">
          Defective or damaged products are replaced at no extra cost.
        </p>

        <p className="text-gray-700">
          For any refund-related query, email us at <b>support@[yourdomain].com</b>.
        </p>
      </div>
    </div>
  )
}

export default ReturnRefundPolicy