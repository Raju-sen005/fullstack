import React from "react";

function WishList() {
  const wishlistItems = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 79,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9C83lWlsgkR8Dow9nmbry2gK0Vvh0cVRsA&s",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 150,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLVPVrxcntxf5G9kOCUFRtdIrVxMgdsqRlow&s",
    },
    // {
    //   id: 3,
    //   name: "Leather Bag",
    //   price: 99,
    //   image:
    //     "https://images.unsplash.com/photo-1616627451095-baa5c97e7b6b?auto=format&fit=crop&w=500&q=80",
    // },
  ];

  return (
    <div className="bg-gray-0 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
          Your Wishlist
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className=" rounded-lg shadow-sm hover:shadow-md bg-white transition p-3"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover rounded-md"
              />
              <div className="mt-3 text-center">
                <h3 className="text-gray-800 font-medium">{item.name}</h3>
                <p className="text-indigo-0 text-lg font-semibold mt-1">
                  ₹{item.price}
                </p>

                <div className="mt-3 flex gap-2">
                  <button className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm transition">
                    Add to Cart
                  </button>
                  <button className="w-1/2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-2 rounded-md text-sm transition">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WishList;
