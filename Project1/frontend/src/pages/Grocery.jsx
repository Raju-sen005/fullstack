import React, { useState } from "react";

function Grocery() {
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    brand: [],
    price: "",
  });

  const products = [
    {
      id: 1,
      name: "Fresh Apples (1 kg)",
      brand: "Local Farm",
      price: 199,
      category: "Fruits",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-kPr4-lrzFxaNTcdayj9Ct4cuZKfn--TGRQ&s",
    },
    {
      id: 2,
      name: "Tomatoes (1 kg)",
      brand: "Farm Fresh",
      price: 49,
      category: "Vegetables",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_levjS2RTh-8AFUiEDB7zrELy6gYVPBx-zw&s",
    },
    {
      id: 3,
      name: "Oats Pack",
      brand: "Quaker",
      price: 159,
      category: "Breakfast",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDNx0E-AIIT1AV-NoPgBCok3-mF96WA-BpQ&s",
    },
    {
      id: 4,
      name: "Chocolate Cookies",
      brand: "Parle",
      price: 49,
      category: "Snacks",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmVMotLvpM8U-NgudPP29VrI5EhVDh4ohwmA&s",
    },
    // {
    //   id: 5,
    //   name: "Milk Powder",
    //   brand: "Amul",
    //   price: 299,
    //   category: "Dairy",
    //   image:
    //     "https://images.unsplash.com/photo-1587049352879-51e12c8a5570?auto=format&fit=crop&w=600&q=80",
    // },
    // {
    //   id: 6,
    //   name: "Green Tea",
    //   brand: "Tetley",
    //   price: 199,
    //   category: "Beverages",
    //   image:
    //     "https://images.unsplash.com/photo-1576390152524-0c6180b2b1ae?auto=format&fit=crop&w=600&q=80",
    // },
    // {
    //   id: 7,
    //   name: "Potato Chips",
    //   brand: "Lay’s",
    //   price: 39,
    //   category: "Snacks",
    //   image:
    //     "https://images.unsplash.com/photo-1594633313687-7e39f80c8eb7?auto=format&fit=crop&w=600&q=80",
    // },
    // {
    //   id: 8,
    //   name: "Paneer",
    //   brand: "Britannia",
    //   price: 199,
    //   category: "Dairy",
    //   image:
    //     "https://images.unsplash.com/photo-1609954588099-f4cc660cd3d1?auto=format&fit=crop&w=600&q=80",
    // },
  ];

  const categories = [
    "Fruits",
    "Vegetables",
    "Breakfast",
    "Snacks",
    "Dairy",
    "Beverages",
  ];
  const brands = [
    "Local Farm",
    "Farm Fresh",
    "Quaker",
    "Parle",
    "Amul",
    "Tetley",
    "Lay’s",
    "Britannia",
  ];
  const prices = [
    { label: "Under ₹100", min: 0, max: 100 },
    { label: "₹100 - ₹200", min: 100, max: 200 },
    { label: "₹200 & Above", min: 200, max: Infinity },
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
            Grocery Filters
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
            <p className="text-gray-600">No grocery items found.</p>
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

export default Grocery;
