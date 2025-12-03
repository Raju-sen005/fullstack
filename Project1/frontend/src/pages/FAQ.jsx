import React from 'react'

function FAQ() {
     const faqs = [
    {
      question: "How can I place an order?",
      answer:
        "Browse products, add to cart, and complete payment using our secure checkout.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept UPI, Credit/Debit Cards, Wallets, and Net Banking.",
    },
    {
      question: "How long does delivery take?",
      answer: "Usually 3–7 business days depending on your location.",
    },
    {
      question: "Can I cancel my order?",
      answer: "Yes, before it is shipped. Contact support@[yourdomain].com.",
    },
    {
      question: "Do you offer returns or exchanges?",
      answer: "Yes, within 7 days of delivery as per our Return Policy.",
    },
  ];

  return (
     <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">
          Frequently Asked Questions
        </h1>

        {faqs.map((faq, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {index + 1}. {faq.question}
            </h3>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ