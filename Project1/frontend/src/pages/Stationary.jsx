import React, { useState } from "react";

function Stationary() {
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    brand: [],
    price: "",
  });

  // ✏️ Stationery Products
  const products = [
    {
      id: 1,
      name: "Classmate Notebook",
      brand: "Classmate",
      price: 99,
      category: "Paper",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZUZRWNvRsYxHNxZLyFgVw_YClql9e3uHow&s",
    },
    {
      id: 2,
      name: "Camlin Fountain Pen",
      brand: "Camlin",
      price: 249,
      category: "Writing",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7YKv0L-m22zySveyPsb1qflKScKYI-f1pA&s",
    },
    {
      id: 3,
      name: "Faber-Castell Sketch Pens",
      brand: "Faber-Castell",
      price: 349,
      category: "Art Supplies",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbK4X4qXurxb0Qk1kftT8aD3cQ2nR8W0ajSA&s",
    },
    {
      id: 4,
      name: "Apsara Pencil Pack",
      brand: "Apsara",
      price: 59,
      category: "Writing",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9podqdgBko5YjT9LQF0o7lfZvdLVPIWu3kQ&s",
    },
    // {
    //   id: 5,
    //   name: "Reynolds Ball Pen (Pack of 10)",
    //   brand: "Reynolds",
    //   price: 149,
    //   category: "Writing",
    //   image:
    //     "https://images.unsplash.com/photo-1616627986988-285b7e4ed9f1?auto=format&fit=crop&w=600&q=80",
    // },
    // {
    //   id: 6,
    //   name: "Cello Gel Pen Set",
    //   brand: "Cello",
    //   price: 179,
    //   category: "Writing",
    //   image:
    //     "https://images.unsplash.com/photo-1586864388193-dc6c15e2bba6?auto=format&fit=crop&w=600&q=80",
    // },
    // {
    //   id: 7,
    //   name: "Acrylic Paint Set",
    //   brand: "Faber-Castell",
    //   price: 499,
    //   category: "Art Supplies",
    //   image:
    //     "https://images.unsplash.com/photo-1593529467220-9d721ceb17d6?auto=format&fit=crop&w=600&q=80",
    // },
    // {
    //   id: 8,
    //   name: "Office File Folder Set",
    //   brand: "Classmate",
    //   price: 299,
    //   category: "Office",
    //   image:
    //     "https://images.unsplash.com/photo-1603570812169-68f8a5825c7b?auto=format&fit=crop&w=600&q=80",
    // },
  ];

  // 🗂 Filters
  const categories = ["Writing", "Paper", "Art Supplies", "Office"];
  const brands = ["Classmate", "Camlin", "Faber-Castell", "Apsara", "Reynolds", "Cello"];
  const prices = [
    { label: "Under ₹100", min: 0, max: 100 },
    { label: "₹100 - ₹300", min: 100, max: 300 },
    { label: "₹300 & Above", min: 300, max: Infinity },
  ];

  // ✅ Handle Filter Change
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
        {/* 🧾 Sidebar Filter */}
        <aside className="w-64 bg-white p-6 rounded-lg shadow-sm h-fit fixed top-5 left-0">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Stationery Filters
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

        {/* 🛒 Product List */}
        <main className="flex absolute left-63 right-0 px-6">
          {filteredProducts.length === 0 ? (
            <p className="text-gray-600">No stationery items match your filters.</p>
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
                    <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
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

export default Stationary;
