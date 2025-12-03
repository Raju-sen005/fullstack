import React, { useState } from "react";

function Electronics() {
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    brand: [],
    price: "",
  });

  const products = [
    {
      id: 1,
      name: "Smart TV 43\"",
      brand: "Samsung",
      price: 32999,
      category: "TVs",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpUkyAvpk3WI17fhjcKE9i2QE5MgG3UYx6w&s",
    },
    {
      id: 2,
      name: "Laptop 14\"",
      brand: "HP",
      price: 45999,
      category: "Laptops",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpjlzcGmEx6CEUosFGXSrM0fCWI2UBexHpg&s",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      brand: "Sony",
      price: 12999,
      category: "Accessories",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ecF0vrUvBmb5gcFa202PkWF5cGfPUqRIJA&s",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      brand: "JBL",
      price: 7999,
      category: "Accessories",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTql3e1xJtUGYaWnY-oLVv9MUN-RGq5qwUA1g&s",
    },
    // {
    //   id: 5,
    //   name: "Smartphone 5G",
    //   brand: "OnePlus",
    //   price: 29999,
    //   category: "Mobiles",
    //   image:
    //     "https://images.unsplash.com/photo-1612920276580-0d0a4b5da446?auto=format&fit=crop&w=600&q=80",
    // },
    // {
    //   id: 6,
    //   name: "Home Theater",
    //   brand: "LG",
    //   price: 22999,
    //   category: "TVs",
    //   image:
    //     "https://images.unsplash.com/photo-1584625764033-28226c300c63?auto=format&fit=crop&w=600&q=80",
    // },
    // {
    //   id: 7,
    //   name: "Gaming Mouse",
    //   brand: "Logitech",
    //   price: 3999,
    //   category: "Accessories",
    //   image:
    //     "https://images.unsplash.com/photo-1603778182352-bd1b7cd569ef?auto=format&fit=crop&w=600&q=80",
    // },
    // {
    //   id: 8,
    //   name: "Printer",
    //   brand: "Canon",
    //   price: 14999,
    //   category: "Office",
    //   image:
    //     "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=60",
    // },
  ];

  const categories = ["TVs", "Laptops", "Mobiles", "Accessories", "Office"];
  const brands = ["Samsung", "HP", "Sony", "JBL", "OnePlus", "LG", "Logitech", "Canon"];
  const prices = [
    { label: "Under ₹10k", min: 0, max: 10000 },
    { label: "₹10k - ₹30k", min: 10000, max: 30000 },
    { label: "₹30k & Above", min: 30000, max: Infinity },
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
      <div className="min-h-screen bg-gray-0 py-8 px-4 sm:px-8 lg:px-12 flex gap-8">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-6 rounded-lg shadow-sm h-fit fixed top-5 left-0">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Electronics Filters
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
            <p className="text-gray-600">No electronics items found.</p>
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

export default Electronics;
