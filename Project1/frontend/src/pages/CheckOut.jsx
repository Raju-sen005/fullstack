import React, { useState } from "react";

function Checkout() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "cod",
  });

  const cartItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1200,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1583225144781-5ef0f6d0dcfc?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2500,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1606813909025-7d2e6b59afae?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const itemsTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = itemsTotal > 2000 ? 0 : 99;
  const grandTotal = itemsTotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert("✅  Delivery Information successfully! (Demo)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-0 via-white to-blue-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
           Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Section */}
          <form
            onSubmit={handlePlaceOrder}
            className="lg:col-span-2 bg-white shadow-lg rounded-2xl p-8 border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-3">
              Delivery Information
            </h2>

            {/* Full Name + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  placeholder="Raju Sen"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  placeholder="9999999999"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mt-5">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email (optional)
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                placeholder="you@example.com"
              />
            </div>

            {/* Address */}
            <div className="mt-5">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Address
              </label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-none"
                placeholder="House no, street, area..."
              />
            </div>

            {/* City / State / Pincode */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  placeholder="Jaipur"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  placeholder="Rajasthan"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pincode
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  placeholder="302001"
                />
              </div>
            </div>

            {/* Payment */}
            <div className="mt-8 border-t pt-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Payment Method
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                {["cod", "upi", "card"].map((method) => (
                  <label key={method} className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      checked={form.paymentMethod === method}
                      onChange={handleChange}
                      className="accent-indigo-600"
                    />
                    {method === "cod"
                      ? "Cash on Delivery"
                      : method === "upi"
                      ? "UPI (PhonePe / GPay / Paytm)"
                      : "Credit / Debit Card"}
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="mt-8 w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-200"
            >
              Place Order
            </button>
          </form>

          {/* Right Section */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 h-fit">
            <h2 className="text-xl font-semibold text-gray-800 mb-5 border-b pb-3">
              Order Summary
            </h2>

            <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center gap-4 border-b pb-3"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-md object-cover shadow-sm"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-indigo-700">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="mt-6 border-t pt-4 text-sm text-gray-700 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{itemsTotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
              </div>
              <div className="flex justify-between font-semibold text-gray-900 mt-2 text-base">
                <span>Total</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            <p className="mt-5 text-xs text-gray-500">
              💡 Free delivery for orders above ₹2000!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
