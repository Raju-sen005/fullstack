import React from "react";

function Cart() {
  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 120,
      quantity: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9C83lWlsgkR8Dow9nmbry2gK0Vvh0cVRsA&s",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 150,
      quantity: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLVPVrxcntxf5G9kOCUFRtdIrVxMgdsqRlow&s",
    },
  ];

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-0 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white  rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
           Your Shopping Cart
        </h1>

        {/* Cart Items */}
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between border-b pb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-gray-500">₹{item.price}</p>
                </div>
              </div>

              {/* Quantity + Remove */}
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <div className="flex items-center border rounded-md">
                  <button className="px-3 py-1 text-lg hover:bg-gray-100">
                    -
                  </button>
                  <span className="px-4 text-gray-700">{item.quantity}</span>
                  <button className="px-3 py-1 text-lg hover:bg-gray-100">
                    +
                  </button>
                </div>
                <button className="text-red-500 hover:text-red-700 text-sm">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Total: <span className="text-indigo-0">₹{total.toFixed(2)}</span>
          </h2>
          <button className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
