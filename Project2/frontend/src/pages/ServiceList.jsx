import React from "react";
import Navbar from "../components/Navbar";
import { Search } from "lucide-react";

function ServiceList() {
   const services = [
    {
      id: 1,
      title: "Electrician",
      desc: "Fix wiring, switchboards, fans",
      price: "₹199",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8ZKOX71iFU_eFsq_2T3iyXy7pdwNkdr8_g&s",
    },
    {
      id: 2,
      title: "Plumber",
      desc: "Leak repair, pipe fitting",
      price: "₹249",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZvqPhDtrMBdLKzCoh2XvOXe0_zGWtA9aEg&s",
    },
    {
      id: 3,
      title: "Carpenter",
      desc: "Furniture repair & installation",
      price: "₹299",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ70Z0fuPygX8elpcGUNzBtEsoE8wBNv947w&s",
    },
    {
      id: 4,
      title: "Home Cleaning",
      desc: "Deep cleaning & dust removal",
      price: "₹499",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79XsD_LKRWfh4FKXC6Pc2DphhBwiANoX8Pg&s",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="pt-28 max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 ">
          Book Your Services
        </h1>

        {/* Search Bar */}
        <div className="mb-8 relative w-full md:w-1/2">
          <Search className="absolute left-4 top-3 text-gray-400 w-5 h-5" />

          <input
            type="text"
            placeholder="Search your service..."
            className="w-full pl-12 pr-4 py-3  rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-5 rounded-xl  hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-20 h-20 mx-auto mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm text-center mt-2">
                {service.desc}
              </p>

              <p className="text-blue-600 font-semibold text-center mt-3 text-lg">
                Starting at {service.price}
              </p>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ServiceList;
