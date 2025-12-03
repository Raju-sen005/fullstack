import React, { useState } from "react";

function Furniture() {
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    brand: [],
    price: "",
  });

  const products = [
    {
      id: 1,
      name: "Wooden Sofa",
      brand: "Durian",
      price: 25999,
      category: "Sofas",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyc4hHQukFOYkeltmqONS42nkcqAy6l0tf9w&s",
    },
    {
      id: 2,
      name: "Dining Table Set",
      brand: "Nilkamal",
      price: 19999,
      category: "Tables",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHGUNLQE4dgYGxRqgMN9_or1GaeljGtbbg1g&s",
    },
    {
      id: 3,
      name: "Office Chair",
      brand: "Godrej",
      price: 7999,
      category: "Chairs",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoHlAUP48DzAPQnljcvno-mrTIC3oNjQgQ8g&s",
    },
    {
      id: 4,
      name: "Queen Bed",
      brand: "Durian",
      price: 31999,
      category: "Beds",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqb6VNjDVJNGgfYaRihDNMEJliuBmt52E7RQ&s",
    },
    // {
    //   id: 5,
    //   name: "Bookshelf",
    //   brand: "Nilkamal",
    //   price: 8999,
    //   category: "Shelves",
    //   image:
    //     "https://images.unsplash.com/photo-1496467115032-cd2894b12e6c?auto=format&fit=crop&w=600&q=80",
    // },
    // {
    //   id: 6,
    //   name: "Coffee Table",
    //   brand: "Godrej",
    //   price: 6999,
    //   category: "Tables",
    //   image:
    //     "https://images.unsplash.com/photo-1588776814546-1ff1356cfbaa?auto=format&fit=crop&w=600&q=80",
    // },
  ];

  const categories = ["Sofas", "Chairs", "Tables", "Beds", "Shelves"];
  const brands = ["Durian", "Nilkamal", "Godrej"];
  const prices = [
    { label: "Under ₹10k", min: 0, max: 10000 },
    { label: "₹10k - ₹20k", min: 10000, max: 20000 },
    { label: "₹20k & Above", min: 20000, max: Infinity },
  ];

  const handleCheckboxChange = (type, value) => {
    setSelectedFilters((prev) => {
      const updated = { ...prev };
      if (type === "category" || type === "brand") {
        if (updated[type].includes(value))
          updated[type] = updated[type].filter((i) => i !== value);
        else updated[type] = [...updated[type], value];
      } else if (type === "price")
        updated.price = updated.price === value ? "" : value;
      return updated;
    });
  };

  const filteredProducts = products.filter((p) => {
    const catOK =
      selectedFilters.category.length === 0 ||
      selectedFilters.category.includes(p.category);
    const brandOK =
      selectedFilters.brand.length === 0 ||
      selectedFilters.brand.includes(p.brand);
    const priceRange = prices.find(
      (pr) => pr.label === selectedFilters.price
    );
    const priceOK =
      !priceRange ||
      (p.price >= priceRange.min && p.price <= priceRange.max);
    return catOK && brandOK && priceOK;
  });

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-8 lg:px-12 flex gap-8">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-6 rounded-lg shadow-sm h-fit fixed top-5 left-0">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Furniture Filters
          </h2>

          {/* Category */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Category
            </h3>
            <div className="space-y-2">
              {categories.map((c) => (
                <label
                  key={c}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters.category.includes(c)}
                    onChange={() => handleCheckboxChange("category", c)}
                    className="accent-indigo-600"
                  />
                  {c}
                </label>
              ))}
            </div>
          </div>

          {/* Brand */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Brand
            </h3>
            <div className="space-y-2">
              {brands.map((b) => (
                <label
                  key={b}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters.brand.includes(b)}
                    onChange={() => handleCheckboxChange("brand", b)}
                    className="accent-indigo-600"
                  />
                  {b}
                </label>
              ))}
            </div>
          </div>

          {/* Price */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Price
            </h3>
            <div className="space-y-2">
              {prices.map((p) => (
                <label
                  key={p.label}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <input
                    type="radio"
                    name="price"
                    checked={selectedFilters.price === p.label}
                    onChange={() => handleCheckboxChange("price", p.label)}
                    className="accent-indigo-600"
                  />
                  {p.label}
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={() =>
              setSelectedFilters({ category: [], brand: [], price: "" })
            }
            className="mt-6 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium py-2 rounded-md transition"
          >
            Reset Filters
          </button>
        </aside>

        {/* Products */}
        <main className="flex absolute left-63 right-0 px-6">
          {filteredProducts.length === 0 ? (
            <p className="text-gray-600">No furniture items found.</p>
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
                    {/* <p className="text-xs text-gray-500">{product.brand}</p> */}
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

export default Furniture;
