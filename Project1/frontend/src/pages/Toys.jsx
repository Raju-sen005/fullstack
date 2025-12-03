import React, { useState } from "react";

function Toys() {
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    brand: [],
    price: "",
  });

  const products = [
    {
      id: 1,
      name: "Building Blocks",
      brand: "Lego",
      price: 1499,
      category: "Educational",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5_AME-sOzdI5WK8Kl_i1MZyDFwS0JDHGLug&s",
    },
    {
      id: 2,
      name: "Soft Teddy Bear",
      brand: "Fisher-Price",
      price: 799,
      category: "Soft Toys",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDqBsKbSBu99_z03iJib8UnPHls55zWXE3Rw&s",
    },
    {
      id: 3,
      name: "Remote Control Car",
      brand: "Hot Wheels",
      price: 1299,
      category: "Cars",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIEVWjnyc3RMZMg8Yx2y3UAe72NETFBP4XQ&s",
    },
    {
      id: 4,
      name: "Doll with Accessories",
      brand: "Barbie",
      price: 999,
      category: "Dolls",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7atlzJ_aIyzStcl6k1mtJlRkavnqLhCCO_w&s",
    },
   
  ];

  const categories = ["Educational", "Soft Toys", "Cars", "Dolls"];
  const brands = ["Lego", "Fisher-Price", "Hot Wheels", "Barbie", "Ravensburger"];
  const prices = [
    { label: "Under ₹500", min: 0, max: 500 },
    { label: "₹500 - ₹1000", min: 500, max: 1000 },
    { label: "₹1000 & Above", min: 1000, max: Infinity },
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
            Toys Filters
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
            <p className="text-gray-600">No toys items found.</p>
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

export default Toys;
