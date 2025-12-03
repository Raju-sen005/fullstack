import React, { useState } from "react";

function Sports() {
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    brand: [],
    price: "",
  });

  const products = [
   {
      id: 1,
      name: "Football Shoes",
      brand: "Nike",
      price: 2999,
      category: "Outdoor",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLbL6Iy2v3AtnEfiemT2jhyAYvtAZoE7SAg&s",
    },
    {
      id: 2,
      name: "Cricket Bat",
      brand: "MRF",
      price: 1999,
      category: "Outdoor",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLz29Jah62uTSM4tSE8ZQMtMzxxkseLkdIUw&s",
    },
    {
      id: 3,
      name: "Yoga Mat",
      brand: "Decathlon",
      price: 899,
      category: "Fitness",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKBi2Ip1MRrhWGZN_P9-bkMdnXrbICbZ03w&s",
    },
    {
      id: 4,
      name: "Basketball",
      brand: "Spalding",
      price: 1299,
      category: "Indoor",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJIAQh2VQrwqqlqIHElm5D4KvVRjhXWrfFQ&s",
    },
    // {
    //   id: 5,
    //   name: "Running Shorts",
    //   brand: "Adidas",
    //   price: 999,
    //   category: "Fitness",
    //   image:
    //     "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=600&q=80",
    // },
    // {
    //   id: 6,
    //   name: "Tennis Racket",
    //   brand: "Yonex",
    //   price: 2499,
    //   category: "Outdoor",
    //   image:
    //     "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=600&q=80",
    // },
    // {
    //   id: 7,
    //   name: "Skipping Rope",
    //   brand: "Puma",
    //   price: 499,
    //   category: "Fitness",
    //   image:
    //     "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=600&q=80",
    // },
    // {
    //   id: 8,
    //   name: "Badminton Shuttle",
    //   brand: "Yonex",
    //   price: 599,
    //   category: "Indoor",
    //   image:
    //     "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=600&q=80",
    // },
  ];

  // Filter Data
 const categories = ["Outdoor", "Indoor", "Fitness"];
  const brands = ["Nike", "Adidas", "Puma", "MRF", "Decathlon", "Yonex", "Spalding"];
  const prices = [
    { label: "Under ₹1000", min: 0, max: 1000 },
    { label: "₹1000 - ₹2000", min: 1000, max: 2000 },
    { label: "₹2000 & Above", min: 2000, max: Infinity },
  ];

  // ✅ Handle checkbox/radio changes
  const handleCheckboxChange = (type, value) => {
    setSelectedFilters((prev) => {
      const updated = { ...prev };
      if (type === "category" || type === "brand") {
        if (updated[type].includes(value)) {
          updated[type] = updated[type].filter((item) => item !== value);
        } else {
          updated[type] = [...updated[type], value];
        }
      } else if (type === "price") {
        updated.price = updated.price === value ? "" : value;
      }
      return updated;
    });
  };

  // ✅ Apply Filters
  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedFilters.category.length === 0 ||
      selectedFilters.category.includes(product.category);

    const matchBrand =
      selectedFilters.brand.length === 0 ||
      selectedFilters.brand.includes(product.brand);

    const selectedPriceRange = prices.find(
      (p) => p.label === selectedFilters.price
    );

    const matchPrice =
      !selectedPriceRange ||
      (product.price >= selectedPriceRange.min &&
        product.price <= selectedPriceRange.max);

    return matchCategory && matchBrand && matchPrice;
  });

  return (
    <>
      <div className="min-h-screen bg-gray-0 py-8 px-4 sm:px-8 lg:px-12 flex gap-8">
        {/* 🔹 Sidebar Filter */}
        <aside className="w-64 bg-white p-6 rounded-lg shadow-sm h-fit fixed top-5 left-0">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Filters
          </h2>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Category
            </h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters.category.includes(cat)}
                    onChange={() => handleCheckboxChange("category", cat)}
                    className="accent-indigo-600"
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Brand Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Brand</h3>
            <div className="space-y-2">
              {brands.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters.brand.includes(brand)}
                    onChange={() => handleCheckboxChange("brand", brand)}
                    className="accent-indigo-600"
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Price</h3>
            <div className="space-y-2">
              {prices.map((price) => (
                <label
                  key={price.label}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <input
                    type="radio"
                    name="price"
                    checked={selectedFilters.price === price.label}
                    onChange={() => handleCheckboxChange("price", price.label)}
                    className="accent-indigo-600"
                  />
                  {price.label}
                </label>
              ))}
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={() =>
              setSelectedFilters({ category: [], brand: [], price: "" })
            }
            className="mt-6 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium py-2 rounded-md transition"
          >
            Reset Filters
          </button>
        </aside>

        {/* 🔹 Product List */}
        <main className="flex absolute left-63 right-0 px-6">
          {filteredProducts.length === 0 ? (
            <p className="text-gray-600">No products match your filters.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                  />
                  <div className="p-4">
                    <h3 className="mt-4 text-sm text-gray-700">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      ₹{product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default Sports;
