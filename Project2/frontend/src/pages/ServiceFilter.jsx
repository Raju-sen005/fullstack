import React, { useState } from "react";
import Navbar from "../components/Navbar";

function ServiceFilter() {
  const services = [
    {
      id: 1,
      title: "Electrician",
      desc: "Fix wiring, switchboards, fans",
      price: 199,
      category: "Home Repair",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8ZKOX71iFU_eFsq_2T3iyXy7pdwNkdr8_g&s",
    },
    {
      id: 2,
      title: "Plumber",
      desc: "Leak repair, pipe fitting",
      price: 249,
      category: "Home Repair",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZvqPhDtrMBdLKzCoh2XvOXe0_zGWtA9aEg&s",
    },
    {
      id: 3,
      title: "Carpenter",
      desc: "Furniture repair & installation",
      price: 299,
      category: "Home Repair",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ70Z0fuPygX8elpcGUNzBtEsoE8wBNv947w&s",
    },
    {
      id: 4,
      title: "Home Cleaning",
      desc: "Deep cleaning & dust removal",
      price: 499,
      category: "Cleaning",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79XsD_LKRWfh4FKXC6Pc2DphhBwiANoX8Pg&s",
    },
  ];

  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(1000);

  // Filter Logic
  const filteredServices = services.filter((service) => {
    const matchesCategory = category === "All" || service.category === category;
    const matchesPrice = service.price <= maxPrice;
    return matchesCategory && matchesPrice;
  });

  return (
    <>
      <Navbar />

      <div className="pt-28 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* SIDEBAR FILTER */}
        <aside className="bg-white rounded-xl shadow p-5 h-fit sticky top-28 md:col-span-1">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Filters</h2>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Category</h3>
            <div className="flex flex-col gap-2">
              <label>
                <input
                  type="radio"
                  value="All"
                  checked={category === "All"}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mr-2"
                />
                All
              </label>
              <label>
                <input
                  type="radio"
                  value="Home Repair"
                  checked={category === "Home Repair"}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mr-2"
                />
                Home Repair
              </label>
              <label>
                <input
                  type="radio"
                  value="Cleaning"
                  checked={category === "Cleaning"}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mr-2"
                />
                Cleaning
              </label>
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">
              Max Price: ₹{maxPrice}
            </h3>
            <input
              type="range"
              min="100"
              max="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <button
            onClick={() => {
              setCategory("All");
              setMaxPrice(1000);
            }}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg"
          >
            Reset Filters
          </button>
        </aside>

        {/* SERVICE GRID */}
        <div className="md:col-span-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Services
          </h1>

          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white  rounded-lg p-4 shadow-sm hover:shadow-lg transition duration-300"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-32 object-contain mb-4"
                  />
                  <h2 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-2">{service.desc}</p>
                  <p className="text-blue-600 font-bold text-lg">
                    ₹{service.price}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 mt-10 text-lg">
              No services match your filters.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default ServiceFilter;
